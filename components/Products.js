import Image from 'next/image'

const Products = ({ products, setShowCart }) => {
  return (
    <div className="xl:grid-col-3 grid grid-flow-row-dense grid-cols-1 px-0 sm:grid-cols-2 sm:pl-20 md:grid-cols-2 lg:ml-auto lg:grid-cols-3 ">
      {products.map(
        ({ name, category, price, currency, image: src, bestseller }) => (
          <div className="group sm:pl-5 md:w-full md:py-5 md:pl-5 lg:py-10 lg:pl-10">
            <div className="relative h-[400px] sm:w-full md:h-[300px] md:w-[200px] lg:h-[400px] lg:w-[300px]">
              {bestseller && (
                <div className="absolute top-0 left-0 z-20 bg-white px-8">
                  Best Seller
                </div>
              )}
              <Image src={src} layout="fill" objectFit="cover" />
              <button
                className="button absolute bottom-0 w-full opacity-0 transition duration-150 ease-in-out group-hover:opacity-100"
                onClick={() => setShowCart(true)}
              >
                Add to cart
              </button>
            </div>
            <div className="mt-4 text-lg font-semibold capitalize text-gray-600">
              {category}
            </div>
            <h1 className="my-1 text-2xl font-bold capitalize text-black">
              {name}
            </h1>
            <div className="flex items-center text-xl font-light text-gray-500">
              <span className="text-sm">$</span>
              {price}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Products
