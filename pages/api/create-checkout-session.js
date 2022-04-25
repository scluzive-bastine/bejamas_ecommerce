const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { urlFor } = require('../../sanity')

export default async (req, res) => {
  const { items, email } = req.body

  const transformedItems = items.map((item) => ({
    description: item.category.title,
    quantity: item.quantity,
    price_data: {
      currency: item.currency,
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        images: [urlFor(item.image.asset._ref).url()],
      },
    },
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    shipping_rates: ['shr_1KsO9WCtMcjxDgaJrLfg43BW'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA'],
    },
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email: email,
      images: JSON.stringify(
        items.map((item) => urlFor(item.image.asset._ref).url())
      ),
    },
  })
  console.log(session.id)
  res.status(200).json({ id: session.id })
}
