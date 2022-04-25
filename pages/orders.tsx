import { getSession, useSession } from "next-auth/react"
import Header from "../components/Header"
import { sanityClient } from "../sanity"
import moment from 'moment'
import Order from '../components/Order'
import {Order as OrderInterface} from '../typings'
import { GetServerSideProps } from "next"

interface Props { 
    orders: [OrderInterface]
}
const orders = ({ orders }: Props) => {    
    const { data: session } = useSession()
    
  return (
    <div className="bg-white max-w-screen-2xl mx-auto font-archivo">
          <Header />

          <main className="py-8 sm:py-20 relative px-4 sm:px-8">
              {session ? (
                  <div>
                      <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
                      {orders.length > 0 ? (
                        orders?.map((order) => (
                            <Order
                                key={order._id}
                                transactionId={order.transactionId}
                                time={moment(order._createdAt).format('LL')}
                                total={order.amount / 100}
                                shipping={order.amountShipping / 100}
                                images={order.image}
                            />
                        ))
                      ) : (
                            <p className="text-center mt-24 text-3xl">You have no orders</p>
                      )}
                  </div>
                ) : (
                    <div className="text-center text-2xl">Sign in to see your orders</div>
                )}
          </main>
    </div>
  )
}

export default orders

export const getServerSideProps: GetServerSideProps = async (context) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    // Get logged in user credentials
    const session = await getSession(context)
    if(!session) {
        return {
            props: {}
        }
    }

    const query = `*[_type == "orders" ][customer == "${session?.user?.email}"]`;

    const dbOrders = await sanityClient.fetch(query)    

    return {
        props: {
            orders: dbOrders
        }
    }
}