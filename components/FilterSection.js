import { useProductContext } from '../context/context'
import {
  createCategoryFilter,
  extractKeyValue,
  priceRageGenerator,
} from '../utils/functions'
import CategoriesCheckbox from './CategoriesCheckbox'
import PriceCheckbox from './PriceCheckbox'

const FilterSection = ({
  checkedPrice,
  checkedCategory,
  handleCategoryFilter,
  handlePriceFilter,
}) => {
  const { products } = useProductContext()
  const mainProducts = products.filter((item) => !item.featured)

  const categories = createCategoryFilter(mainProducts)
  const extractedPrices = extractKeyValue(mainProducts, 'price')
  const prices = priceRageGenerator(extractedPrices)

  return (
    <div>
      <h4 className="text-xl  font-bold text-black">Category</h4>
      <div className="mt-8">
        <CategoriesCheckbox
          values={categories}
          checkedItems={checkedCategory}
          onChange={handleCategoryFilter}
        />
      </div>
      <div className="mt-8 mb-8 border-b-2 border-gray-500"></div>
      <PriceCheckbox
        values={prices}
        checkedItems={checkedPrice}
        onChange={handlePriceFilter}
      />
    </div>
  )
}

export default FilterSection
