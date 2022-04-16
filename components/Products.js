import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useProductContext } from '../context/context'
import { isEmpty } from 'lodash'

import { handleFilteringSorting, paginated } from '../utils/functions'
const Products = () => {
  const { products, sortOptions, priceFilterOptions, categoryFilterOptions } =
    useProductContext()
  const [page, setPage] = useState(1)

  const mainProducts = products.filter((item) => !item.featured)
  const filteredProducts = handleFilteringSorting(
    mainProducts,
    categoryFilterOptions,
    priceFilterOptions,
    sortOptions?.order,
    sortOptions?.key
  )

  useEffect(() => {
    setPage(1)
  }, [sortOptions])

  const paginateProducts = (page, data) => {
    const paginate = paginated(data, 6)
    return paginate(page)
  }
  function paginateOtherData(data) {
    setPage(data)
  }

  const newProducts = paginateProducts(page, filteredProducts)
  const pageLength = Math.ceil(filteredProducts.length / 6)
  const prev = page - 1 ? page - 1 : null
  const next = pageLength > page ? page + 1 : null

  if (isEmpty(products)) return null

  return (
    <div className="w-full">
      <div className="grid grid-flow-row-dense grid-cols-1 px-0 sm:grid-cols-2 sm:pl-20 md:grid-cols-2 lg:ml-auto lg:grid-cols-2 xl:grid-cols-3">
        {newProducts.length === 0 &&
        (!isEmpty(categoryFilterOptions) ||
          !isEmpty(priceFilterOptions) ||
          !isEmpty(sortOptions)) ? (
          <div className="text-center">
            <h6>Sorry! No result found for the selected filter query!</h6>
          </div>
        ) : null}
        {newProducts.map(
          ({ name, id, category, image: src, price, bestseller }) => (
            <Product
              key={id}
              name={name}
              category={category}
              src={src}
              id={id}
              price={price}
              bestseller={bestseller}
            />
          )
        )}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex space-x-2">
          <button
            onClick={prev}
            className={`${prev === null ? 'opacity-0' : 'opacity-100'}`}
            disabled={prev === null ? true : false}
          >
            <ChevronLeftIcon className="h-5 px-2 font-bold text-black" />
          </button>

          {[...Array(pageLength)].map((item, i) => (
            <button
              key={i}
              onClick={() => paginateOtherData(i + 1)}
              className={`px-2 text-xl ${
                page === i + 1 ? 'text-2xl text-black' : 'text-gray-400'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={next}
            className={`${next === null ? 'opacity-0' : 'opacity-100'}`}
            disabled={next === null ? true : false}
          >
            <ChevronRightIcon className="h-5 px-2 font-bold text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
