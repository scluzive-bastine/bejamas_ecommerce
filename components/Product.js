import Image from 'next/image'
import { addToBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'
import { ProductContext } from '../context/context'
import { useContext } from 'react'
import { currencyTransform } from '../utils/functions'
import { urlFor } from '../sanity'

const Product = ({
  name,
  category,
  price,
  currency,
  src,
  bestseller,
  id,
  quantity,
}) => {
  const dispatch = useDispatch()
  const { toggleCart } = useContext(ProductContext)

  const addItemToCart = () => {
    toggleCart()
    const product = {
      name,
      price,
      image: src,
      category,
      _id: id,
      currency,
      quantity,
    }
    dispatch(addToBasket(product))
  }

  return (
    <div
      className="group sm:pl-5 md:w-full md:py-5 md:pl-5 lg:py-10 lg:pl-10"
      key={id}
    >
      <div className="relative h-[400px] w-full sm:w-full md:h-[300px] md:w-full lg:h-[400px] lg:w-full xl:w-full">
        {bestseller && (
          <div className="white absolute top-0 left-0 z-20 bg-white px-8">
            Best Seller
          </div>
        )}
        <Image
          src={urlFor(src.asset._ref).url()}
          layout="fill"
          objectFit="cover"
          alt={name}
        />
        <button
          className="button absolute bottom-0 w-full opacity-0 transition duration-150 ease-in-out group-hover:opacity-100"
          onClick={addItemToCart}
        >
          Add to cart
        </button>
      </div>
      <div className="mt-4 text-lg font-semibold capitalize text-gray-600">
        {category.title}
      </div>
      <h1 className="my-1 text-2xl font-bold capitalize text-black">{name}</h1>
      <div className="flex items-center text-xl font-light text-gray-500">
        <span className="text-sm"> {currencyTransform(currency)}</span>
        {price}
      </div>
    </div>
  )
}

export default Product
