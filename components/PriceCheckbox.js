import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { useProductContext } from '../context/context'
import Checkbox from './Checkbox'

const PriceCheckbox = ({ values, checkedItems, onChange = () => null }) => {
  const [items, setItems] = useState([])
  const { priceParam, setPriceParam } = useProductContext()

  useEffect(() => {
    if (!isEmpty(checkedItems)) {
      const newItems = values.map((product) => {
        return product.price === checkedItems
          ? { ...product, isChecked: true }
          : product
      })

      setItems(newItems)
    } else {
      setItems(values)
    }
  }, [checkedItems])

  const handleChange = (e) => {
    const isChecked = e.target.checked
    const value = e.target.value

    const copy = [...items].map((product) => ({
      ...product,
      isChecked: false,
    }))

    const newState = copy.map((product) =>
      product.price === value ? { ...product, isChecked: isChecked } : product
    )
    setItems(newState)

    if (isChecked) {
      onChange(value)
    } else {
      onChange('')
    }
  }

  return (
    <div>
      {items?.map((item, i) => (
        <div className="mb-8 flex items-center space-x-2" key={item.id}>
          <Checkbox
            id={item?.id}
            name={item.price}
            value={item.price}
            checked={item.isChecked}
            onChange={handleChange}
          />
          <label
            htmlFor={item.price}
            className="text-lg font-normal text-gray-700"
          >
            {item.captionText}{' '}
          </label>
        </div>
      ))}
    </div>
  )
}

export default PriceCheckbox
