import FilterSection from './FilterSection'
import { useProductContext } from '../context/context'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import { isEmpty } from 'lodash'
// import { Product as TypingsProduct } from '../typings'

import { handleFilteringSorting, paginated } from '../utils/functions'

export const Content = () => {
  const {
    products,
    sortOptions,
    priceFilterOptions,
    categoryFilterOptions,
    filterProductsByCategory,
    filterProductsByPrice,
  } = useProductContext()
  const [page, setPage] = useState(1)
  const [checkedCategory, setCheckedCategory] = useState([])
  const [checkedPrice, setCheckedPrice] = useState([])

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
  }, [categoryFilterOptions, priceFilterOptions, sortOptions])

  function handleCategoryFilter(values) {
    setCheckedCategory(values)
    filterProductsByCategory(values)
  }

  function handlePriceFilter(values) {
    setCheckedPrice(values)
    filterProductsByPrice(values)
  }

  const paginateProducts = (page, data) => {
    const paginate = paginated(data, 6)
    return paginate(page)
  }
  function paginateMore(data) {
    setPage(data)
  }

  const newProducts = paginateProducts(page, filteredProducts)
  const pageLength = Math.ceil(filteredProducts.length / 6)
  const prev = page - 1 ? page - 1 : null
  const next = pageLength > page ? page + 1 : null

  if (isEmpty(products)) return null

  return (
    <div className="mt-10 flex flex-grow">
      <div className="hidden w-80 flex-grow sm:inline">
        <FilterSection
          handleCategoryFilter={handleCategoryFilter}
          handlePriceFilter={handlePriceFilter}
          checkedCategory={checkedCategory}
          checkedPrice={checkedPrice}
        />
      </div>

      <div className="w-full">
        {newProducts.length === 0 &&
        (!isEmpty(categoryFilterOptions) ||
          !isEmpty(priceFilterOptions) ||
          !isEmpty(sortOptions)) ? (
          <div className="w-full text-center">
            <h6>Sorry! No result found for the selected filter query!</h6>
          </div>
        ) : null}

        <div className="grid grid-flow-row-dense grid-cols-1 px-0 sm:grid-cols-1 sm:pl-20 md:grid-cols-2 lg:ml-auto lg:grid-cols-2 xl:grid-cols-3">
          {newProducts.map(
            ({
              name,
              _id,
              category,
              image,
              price,
              currency,
              bestseller,
              quantity,
            }) => (
              <Product
                key={_id}
                name={name}
                category={category}
                src={image}
                currency={currency}
                id={_id}
                price={price}
                bestseller={bestseller}
                quantity={quantity}
              />
            )
          )}
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex space-x-2">
            <div
              onClick={() => paginateMore(prev)}
              className={`${
                prev === null ? 'opacity-0' : 'opacity-100'
              } relative cursor-pointer`}
              disabled={prev === null ? true : false}
            >
              <ChevronLeftIcon className="h-7 px-2 font-bold text-black" />
            </div>

            {[...Array(pageLength)].map((item, i) => (
              <button
                key={i}
                onClick={() => paginateMore(i + 1)}
                className={`px-2 text-xl ${
                  page === i + 1 ? 'text-2xl text-black' : 'text-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <div
              onClick={() => paginateMore(next)}
              className={`${
                next === null ? 'opacity-0' : 'opacity-100'
              } relative cursor-pointer`}
              disabled={next === null ? true : false}
            >
              <ChevronRightIcon className="h-7 px-2 font-bold text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
