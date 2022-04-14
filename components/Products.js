import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Product from '../components/Product'
import { ProductContext } from '../context/context'
import { useContext } from 'react'

const Products = () => {
  const {
    products,
    page,
    firstPage,
    lastPage,
    setPage,
    setShowCart,
    data,
    paginated,
  } = useContext(ProductContext)
  return (
    <div className="w-full">
      <div className="grid grid-flow-row-dense grid-cols-1 px-0 sm:grid-cols-2 sm:pl-20 md:grid-cols-2 lg:ml-auto lg:grid-cols-2 xl:grid-cols-3">
        {paginated.map(
          ({ name, id, category, image: src, price, bestseller }) => (
            <Product
              key={id}
              name={name}
              category={category}
              src={src}
              id={id}
              price={price}
              bestseller={bestseller}
              setShowCart={setShowCart}
            />
          )
        )}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex space-x-2">
          <button
            onClick={firstPage}
            className={`${page === 0 ? 'opacity-0' : 'opacity-100'}`}
            disabled={page === 0}
          >
            <ChevronLeftIcon className="h-5 px-2 font-bold text-black" />
          </button>

          {products.map((item, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`px-2 text-xl ${
                i === page ? 'text-2xl text-black' : 'text-gray-400'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={lastPage}
            className={`${
              page === products.length - 1 ? 'opacity-0' : 'opacity-100'
            }`}
            disabled={page === products.length - 1}
          >
            <ChevronRightIcon className="h-5 px-2 font-bold text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
