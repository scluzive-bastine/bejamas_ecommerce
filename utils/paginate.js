const paginate = (products, perPage) => {
  const itemsPerPage = perPage
  const numberOfPages = Math.ceil(products.length / itemsPerPage)

  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return products.slice(start, start + itemsPerPage)
  })

  return newProducts
}

export default paginate
