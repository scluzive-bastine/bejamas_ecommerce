import Image from 'next/image'
import { addToBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'
import { useProductContext } from '../context/context'
import { kilobytesToMegaBytes } from '../utils/functions'
const Featured = () => {
  const { products, toggleCart } = useProductContext()
  const featuredProduct = products.filter((item) => item.featured === true)
  const {
    id,
    name,
    category,
    currency,
    price,
    quantity,
    image: src,
    details: {
      dimmentions: { width, height },
      size,
      description,
      recommendations,
    },
  } = featuredProduct[0]

  const dispatch = useDispatch()

  const addItemToCart = () => {
    toggleCart()
    const product = {
      name,
      price,
      src,
      id,
      category,
      currency,
      quantity,
    }
    dispatch(addToBasket(product))
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold sm:text-3xl">{name}</h1>
        <button
          className="button hidden sm:inline-flex"
          onClick={addItemToCart}
        >
          Add to cart
        </button>
      </div>
      <div className="relative mt-10 h-[239px] sm:h-[450px] lg:h-[533px] xl:h-[600px] 2xl:h-[600px]">
        <Image
          src={src}
          className=""
          layout="fill"
          objectFit="cover"
          alt={name}
        />
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
            <h3 className="mt-3 text-lg font-semibold capitalize text-gray-500">
              {category}
            </h3>
            <div className="mt-3 text-gray-500">
              <p>{description}</p>
              <p className="mt-10">
                text to mockup various fonts for a type specimen book.So how did
                the classical Latin become so incoherent? According to
                McClintock
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-10 sm:text-left md:mt-0 md:text-right">
            <h3 className="text-2xl font-semibold text-black">
              People also buy
            </h3>
            <div className="mt-10 flex flex-grow justify-start space-x-6 sm:space-x-8 md:justify-end">
              {recommendations.map((item) => (
                <div
                  className="relative h-[150px] w-[117px] cursor-pointer sm:h-[150px] sm:w-[117px] md:h-[150px] md:w-[117px]"
                  key={item.alt}
                >
                  <Image
                    src={item.src}
                    layout="fill"
                    objectFit="cover"
                    alt={name}
                  />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h1 className="text-2xl font-bold">Details</h1>
              <div className="text-sm font-normal text-gray-500">
                <div className="mt-2">
                  Size: {width} x {height} pixel
                </div>
                <div className="mt-2">
                  Size: {kilobytesToMegaBytes(size)} mb
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
