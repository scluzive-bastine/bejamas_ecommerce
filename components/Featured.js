import Image from 'next/image'
import { addToBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'
import { ProductContext } from '../context/context'
import { useContext } from 'react'
const Featured = ({ featured }) => {
  const {
    name,
    category,
    price,
    currency,
    image: src,
    details: {
      dimmentions: { width, height },
      size,
      description,
      recommendations,
    },
  } = featured[0]

  const { setShowCart } = useContext(ProductContext)
  const dispatch = useDispatch()

  const addItemToCart = () => {
    setShowCart(true)
    const product = {
      name,
      price,
      src,
    }
    dispatch(addToBasket(product))
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold sm:text-3xl">{name}</h1>
        <button
          className="button hidden sm:inline-flex"
          onClick={addItemToCart}
        >
          Add to cart
        </button>
      </div>
      <div className="relative mt-10 h-[239px] sm:h-[450px] lg:h-[533px] xl:h-[600px] 2xl:h-[600px]">
        <Image src={src} className="" layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 bg-white px-8 py-2 font-semibold text-black sm:px-10 sm:py-4">
          Photo of the day
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <button
              className="button mb-10 w-full sm:hidden"
              onClick={addItemToCart}
            >
              Add to cart
            </button>
            <h3 className="text-xl font-semibold text-black sm:text-3xl">
              About the Samurai King Resting
            </h3>
            <h6 className="mt-3 text-lg font-semibold text-gray-500">
              {category}
            </h6>
            <div className="mt-3 text-gray-500">
              <p>{description}</p>
              <p className="mt-10">
                text to mockup various fonts for a type specimen book.So how did
                the classical Latin become so incoherent? According to
                McClintock
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-0 sm:pl-10 sm:text-right">
            <h3 className="text-2xl font-semibold text-black">
              People also buy
            </h3>
            <div className="mt-10 flex flex-grow justify-end space-x-6 sm:space-x-8">
              {recommendations.map((item) => (
                <div
                  className="relative h-[120px] w-[200px] cursor-pointer sm:h-[120px] sm:w-full md:w-[160px]"
                  key={item.alt}
                >
                  <Image src={item.src} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h1 className="text-2xl font-semibold">Details</h1>
              <div className="text-sm text-gray-500">
                <div className="mt-2">
                  Size: {width} x {height} pixel
                </div>
                <div className="mt-2">Size: {size / 1000} mb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
