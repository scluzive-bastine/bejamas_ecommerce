import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'

const CategoriesCheckbox = ({ values, checkedItems, onChange }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    if (checkedItems.length !== 0) {
      const newItems = values.map((product) => {
        return [...checkedItems].includes(product.category.title)
          ? { ...product, isChecked: true }
          : product
      })

      setItems(newItems)
    } else {
      setItems(values)
    }
  }, [checkedItems])

  function handleChange(e) {
    const isChecked = e.target.checked
    const value = e.target.value

    setItems((prevState) =>
      prevState.map((product) =>
        product.category.title === value
          ? { ...product, isChecked: isChecked }
          : product
      )
    )

    if (isChecked) {
      onChange([...checkedItems, value])
    } else {
      const newCategory = checkedItems.filter((product) => product !== value)
      onChange(newCategory)
    }
  }

  return (
    <div className="mt-8">
      {items?.map((item, i) => {
        return (
          <div className="mb-8 flex items-center space-x-2" key={item.id}>
            <Checkbox
              id={item.id}
              name={item.category.title}
              value={item.category.title}
              checked={item.isChecked}
              onChange={handleChange}
            />
            <label
              htmlFor={item.category.title}
              className="text-xl font-normal text-gray-700"
            >
              {item.category.title}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default CategoriesCheckbox
