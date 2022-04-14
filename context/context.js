import { useState, useEffect, createContext } from 'react'
import data from '../products.json'
import paginate from '../utils/paginate'

export const ProductContext = createContext()

export const Provider = ({ children }) => {
  const [products, setProducts] = useState(paginate(data))
  const [page, setPage] = useState(0)
  const [paginated, setPaginated] = useState(products[page])

  const featuredProduct = data.filter((item) => item.featured === true)

  const [showFilter, setShowFilter] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [sorted, setSorted] = useState([])
  const [sortType, setSortType] = useState('')

  const firstPage = () => {
    setPage(0)
  }
  const lastPage = () => {
    setPage(products.length - 1)
  }

  // Sorting
  useEffect(() => {
    const sortArray = (type) => {
      let tempProducts = [...data]
      if (type === 'asc') {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
        setProducts(paginate(tempProducts))
        setPaginated(products[page])
      } else if (type === 'desc') {
        tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
        setProducts(paginate(tempProducts))
        setPaginated(products[page])
      } else if (type === 'price') {
        tempProducts = tempProducts.sort((a, b) => (a.price > b.price ? 1 : -1))
        setProducts(paginate(tempProducts))
        setPaginated(products[page])
      }
    }

    sortArray(sortType)
  }, [sortType])

  useEffect(() => {
    setPaginated(products[page])
  }, [page, products])

  return (
    <ProductContext.Provider
      value={{
        showCart,
        featuredProduct,
        paginated,
        products,
        page,
        data,
        showFilter,
        firstPage,
        lastPage,
        setPage,
        setShowFilter,
        setShowCart,
        setSortType,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
