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

  // const nextPage = () => {
  //   console.log(page);
  //   if(page >= data.length - 1) {
  //     setPage(page)
  //   }else {
  //     setPage(page + 1)
  //   }
  // }

  // const prevPage = () => {
  //     if(page === 0) {
  //       setPage(page)
  //     } else{
  //       setPage(page - 1)
  //     }
  // }

  const firstPage = () => {
    setPage(0)
  }
  const lastPage = () => {
    setPage(products.length - 1)
  }

  useEffect(() => {
    setPaginated(products[page])
  }, [page])

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
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
