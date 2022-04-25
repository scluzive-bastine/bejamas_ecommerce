import Image from 'next/image'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import {
  decreaseItemCount,
  deleteItemFromBasket,
  increaseItemCount,
  selectItems,
  selectTotal,
} from '../slices/basketSlice'
import { currencyTransform } from '../utils/functions'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import { urlFor } from '../sanity'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key!)

const checkout = () => {
  const { data: session } = useSession()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  const dispatch = useDispatch()
  const deleteItemFromCart = (id: string) => {
    dispatch(deleteItemFromBasket({ id }))
  }

  const increaseItemInCart = (id: string) => {
    dispatch(increaseItemCount({ id }))
  }

  const decreaseItemInCart = (id: string) => {
    dispatch(decreaseItemCount({ id }))
  }

  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    // call backend to create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session?.user?.email,
    })

    // Redirect user to strip checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result?.error) alert(result.error.message)
  }

  let buttonText
  let buttonClass
  let buttonDisabled
  if (!session) {
    buttonText = 'Sign in to checkout'
    buttonClass = 'bg-gray-500 text-gray-100 cursor-not-allowed'
    buttonDisabled = true
  } else {
    if (items.length > 0) {
      buttonText = 'Proceed to checkout'
      buttonClass = ' '
      buttonDisabled = false
    } else {
      buttonText = 'No items in cart'
      buttonClass = 'bg-gray-500 text-gray-100 cursor-not-allowed'
      buttonDisabled = true
    }
  }
  
  return (
    <div className="mx-auto max-w-screen-2xl bg-white font-archivo">
      <Header />

      <main className="relative py-8 px-4 sm:py-20 sm:px-8">
        <div className="mt-10 block justify-between md:space-x-10 lg:flex">
          <div className="flex-grow">
            <div className="mb-10 flex items-center justify-between border-b border-gray-200 pb-2 md:mb-0 md:border-0">
              <div>
                <h1 className="text-2xl text-black md:mb-10 ">
                  Products in cart
                </h1>
                <div className="lg:hidden">
                  <div className="mb-1">Subtotal: {total.quantity}</div>
                  <div>
                    Total Price: {total.total > 0 ? '$' + total.total : '0'}
                  </div>
                </div>
              </div>
              <div className="lg:hidden">
                <button className="button mx-auto mt-2">Checkout</button>
              </div>
            </div>
            {items.length > 0 ? (
              items.map((item: any) => (
                <div
                  className="group mb-8 flex-col border-b border-gray-200 pb-4"
                  key={item.name}
                >
                  <div className="block items-center justify-between md:flex">
                    <div className="flex items-center space-x-3">
                      <div className="relative h-[60px] w-[120px] md:h-[100px] md:w-[200px]">
                        <Image
                          src={urlFor(item.image.asset._ref).url()}
                          objectFit="cover"
                          layout="fill"
                          alt={item.name}
                          className="transition-transform duration-200 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <div className="text-lg text-black md:text-2xl">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.category.title}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center space-x-4 md:mt-0 md:space-x-10">
                      <div className="flex items-center space-x-2">
                        <div
                          className="cursor-pointer rounded p-2 transition duration-150 hover:bg-gray-100"
                          onClick={() => decreaseItemInCart(item._id)}
                        >
                          <MinusIcon className="h-5" />
                        </div>
                        <div>
                          <div className="h-10 w-10 rounded border border-gray-200 p-2 text-center font-semibold text-black">
                            {item.quantity}{' '}
                          </div>
                        </div>
                        <div
                          className="cursor-pointer rounded p-2 transition duration-150 hover:bg-gray-100"
                          onClick={() => increaseItemInCart(item._id)}
                        >
                          <PlusIcon className="h-5" />
                        </div>
                      </div>
                      <div className="w-16 text-center text-lg font-bold text-black md:w-20">
                        <span className="text-sm">
                          {currencyTransform(item.currency)}
                        </span>
                        {item.price}
                      </div>
                      <div
                        className="cursor-pointer text-red-500 transition duration-150 hover:text-red-700"
                        onClick={() => deleteItemFromCart(item._id)}
                      >
                        <TrashIcon className="h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-10 text-center text-lg text-black">
                No items in cart
              </div>
            )}
          </div>
          <div className="hidden h-full w-full items-center justify-center bg-gray-200 p-4 md:w-80 lg:flex">
            <div>
              <h1 className="mb-8 text-center text-2xl font-bold">
                Cart Summary
              </h1>
              <div>
                <div className="mb-2">Subtotal: {total.quantity}</div>
                <div className="border-b border-gray-200 pb-2">
                  Total Price:{' '}
                  {total.total > 0
                    ? '$' + parseFloat(total.total.toFixed(2))
                    : '0'}
                </div>
                <button
                  role="link"
                  onClick={createCheckoutSession}
                  className={`${buttonClass} button mx-auto mt-2`}
                  disabled={buttonDisabled}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default checkout
