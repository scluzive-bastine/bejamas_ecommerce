import { useProductContext } from '../context/context'
import { useContext } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { selectItems, removeFromBasket } from '../slices/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { urlFor } from '../sanity'

const Cart = () => {
  // const { setShowCart } = useContext(ProductContext)
  const { cart, isCartOpen, toggleCart, resetCart } = useProductContext()
  const router = useRouter()

  const items = useSelector(selectItems)

  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(removeFromBasket())
  }
  return (
    <div className="absolute right-0 top-20 z-20 w-[350px] border-2 border-gray-200 bg-white p-5 shadow-md md:w-[433px] lg:w-[450px]">
      <div
        className="mb-2 flex cursor-pointer justify-end px-2 py-2"
        onClick={toggleCart}
      >
        <XIcon className="h-6 text-black" />
      </div>
      {items.length > 0 ? (
        items.map((product) => (
          <div
            className="flex flex-grow items-center border-b border-gray-200 py-4"
            key={product.name}
          >
            <div className="w-64 grow">
              <h3 className="text-clip text-sm font-semibold text-black md:text-lg">
                {product.name}
              </h3>
              <div className="flex items-center text-lg font-light text-gray-500">
                <span className="text-sm">$</span>
                {product.price}
              </div>
            </div>
            <div className="relative h-14 w-28">
              <Image
                src={urlFor(product.image.asset._ref).url()}
                layout="fill"
                objectFit="cover"
                alt={product.name}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-lg text-gray-500">Basket is Empty</div>
      )}
      {items.length > 0 && (
        <div className="flex space-x-3">
          <button className="button-outline mt-8" onClick={clearCart}>
            Clear
          </button>
          <button
            className="button mt-8"
            onClick={() => router.push('/checkout')}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
