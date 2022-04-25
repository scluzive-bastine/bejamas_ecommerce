import { buffer } from 'micro'
import sanityClient from '@sanity/client'

export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(sanityConfig)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfullOrder = async (session) => {
  console.log('FUllfilling order', session)

  const {
    metadata: { email, images },
    amount_total, //divide by 100
    total_details: amount_shipping, // divide by 100
  } = session

  try {
    await client.create({
      _type: 'orders',
      transactionId: session.id,
      customer: email,
      amount: amount_total,
      amountShipping: amount_shipping.amount_shipping,
      image: images,
    })
  } catch (error) {
    console.log(`ERROR: ${error.message}`)
  }
  console.log(`success: order ${session.id} had been added to the DB`)
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers['stripe-signature']

    let event
    // Verify that the Event posted came from Stripe.
    if (endpointSecret) {
      try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
      } catch (err) {
        console.log(`Webhook Error: ${err.message}`)
        res.status(200).send(`Webhook Error: ${err.message}`)
      }

      // Handle the checkout.session.completed event
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object

        // Fullfill the purchase...
        return fulfullOrder(session)
          .then(() => res.status(200))
          .catch((error) =>
            res.status(400).send(`Webhook Error: ${error.message}`)
          )
      }
    } else {
      console.log(`Endpoint secret not found`)
    }
  }
}
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
