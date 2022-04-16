import { XIcon } from '@heroicons/react/outline'
import FilterSection from './FilterSection'
import { useProductContext } from '../context/context'
import { useState } from 'react'
import { isEmpty } from 'lodash'

const MobileFilter = ({ toggleModal = () => {} }) => {
  const [checkedCategory, setCheckedCategory] = useState([])
  const [checkedPrice, setCheckedPrice] = useState(null)

  const { filterProductsByCategory, filterProductsByPrice } =
    useProductContext()

  const handleCategoryFilter = (values) => {
    setCheckedCategory(values)
  }

  const handlePriceFilter = (values) => {
    setCheckedPrice(values)
  }

  const closeModal = () => {
    toggleModal()
  }
  const clearFilters = () => {
    setCheckedCategory([])
    setCheckedPrice(null)
    filterProductsByCategory([])
    filterProductsByPrice(null)
    toggleModal()
  }

  const saveFilters = () => {
    filterProductsByCategory(checkedCategory)
    filterProductsByPrice(checkedPrice)
    toggleModal()
  }
  const isDisabled = isEmpty(checkedCategory) && isEmpty(checkedPrice)

  return (
    <div
      className="trasnition sticky bottom-0 z-40 h-screen w-full transform overflow-scroll bg-gray-100 duration-700 ease-in-out sm:hidden"
      style={{ background: '#0000007a' }}
    >
      <div
        className="absolute bottom-0 w-full overflow-scroll bg-white"
        style={{ height: '70vh' }}
      >
        <div className="sticky top-0 flex items-center justify-between bg-white py-4 px-5">
          <h3 className="text-2xl font-bold text-black">Filter </h3>
          <div className="cursor-pointer px-2 py-2" onClick={closeModal}>
            <XIcon className="h-6 text-black" />
          </div>
        </div>
        <div className="mt-10 px-5">
          <FilterSection
            handleCategoryFilter={handleCategoryFilter}
            handlePriceFilter={handlePriceFilter}
            checkedCategory={checkedCategory}
            checkedPrice={checkedPrice}
          />
        </div>
        <div className="sticky bottom-0 flex justify-between border-t-4 border-gray-300 bg-white px-10 pb-5 pt-5">
          <button
            className="border-2 border-black px-8 py-2 uppercase text-black"
            onClick={clearFilters}
          >
            Clear
          </button>
          <button
            className={`button ${
              isDisabled ? 'cursor-not-allowed bg-gray-600' : ' '
            }`}
            disabled={isDisabled}
            onClick={saveFilters}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileFilter
