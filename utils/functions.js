import { isEmpty } from 'lodash'

export const kilobytesToMegaBytes = (bytes) => {
  return Math.round(bytes / 1024)
}

export const currencyTransform = (value) => {
  switch (value) {
    case 'USD':
      return '$'
    default:
      break
  }
}

export const paginated = (arr, perPage) => {
  if (perPage < 1 || !arr) return () => []

  return function (page) {
    const basePage = (page - 1) * perPage

    return page < 0 || basePage >= arr.length
      ? []
      : arr.slice(basePage, basePage + perPage)
  }
}

export const sortArrayBy = (array, key, order = null) => {
  array.sort((a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    if (varA < varB) return -1
    if (varA > varB) return 1
    return 0
  })
  if (order === 'desc') return array.reverse()
  return array
}

export const createCategoryFilter = (array) => {
  let values = []
  array.forEach((element, index) => {
    const checkValues = values.filter(
      (item) => item.category.title === element.category.title
    )
    if (checkValues.length === 0) {
      values.push({
        id: element.category.title,
        category: element.category,
        isChecked: false,
      })
    }
  })

  return values
}

export const extractKeyValue = (array, key) => {
  let keyValues = []
  ;[...array].forEach((element) => {
    keyValues.push(element[key])
  })
  return keyValues
}

export const priceRageGenerator = (array) => {
  let min = array[0],
    max = array[0]

  for (let i = 1; i < array.length; i++) {
    let value = array[i]
    min = value < min ? value : min
    max = value > max ? value : max
  }

  const range1 = Math.floor(min + 20)
  const range2 = Math.floor((min + max) / 2 - 200)
  const range3 = Math.floor(max - range2)

  return [
    {
      id: 1,
      captionText: 'Lower than $' + range1,
      price: range1 + ',0',
      isChecked: false,
    },
    {
      id: 2,
      captionText: '$' + range1 + ' - $' + range2,
      price: range2 + ',' + range1,
      isChecked: false,
    },
    {
      id: 3,
      captionText: '$' + range2 + ' - $' + range3,
      price: range3 + ',' + range2,
      isChecked: false,
    },
    {
      id: 4,
      captionText: 'More than $' + range3,
      price: '1000000,' + range3,
      isChecked: false,
    },
  ]
}

export const handleFilteringSorting = (
  array = [],
  categoryParam = [],
  priceParam = null,
  sortOrder = null,
  sortKey = null
) => {
  let newArray = [...array]

  if (categoryParam.length !== 0) {
    newArray = [...newArray].filter((item) =>
      [...categoryParam].includes(item.category.title)
    )
  }

  if (!isEmpty(priceParam)) {
    const newPriceParam = priceParam.split(',')
    const max = parseInt(newPriceParam[0])
    const min = parseInt(newPriceParam[1])
    newArray = newArray.filter(function (o) {
      return o.price <= max && o.price >= min
    })
  }

  if (!isEmpty(sortKey) && !isEmpty(sortOrder)) {
    let someArr = sortArrayBy(newArray, sortKey, sortOrder)
    newArray = someArr
  }

  return newArray
}
