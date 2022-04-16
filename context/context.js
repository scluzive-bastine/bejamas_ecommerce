import { createContext, useReducer, useContext } from 'react'
import { INITIAL_STATE, contextReducer } from './contextReducer'
import { useEffect, useState } from 'react'
import data from '../products.json'

export const ProductContext = createContext()

const AppActions = () => {
  const [products, setProducts] = useState(data)

  const [state, dispatch] = useReducer(contextReducer, INITIAL_STATE)

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const loadProducts = (data) => {
    dispatch({ type: 'INITIALIZE_PRODUCT', data })
  }

  const sortProducts = (data) => {
    dispatch({ type: 'SORT_PRODUCTS', data })
  }
  const filterProductsByCategory = (data) => {
    dispatch({ type: 'FILTER_PRODUCTS_BY_CATEGORY', data })
  }

  function filterProductsByPrice(data) {
    dispatch({ type: 'FILTER_PRODUCTS_BY_PRICE', data })
  }

  useEffect(() => {
    loadProducts(products)
  }, [])

  return {
    state,
    toggleCart,
    loadProducts,
    sortProducts,
    filterProductsByCategory,
    filterProductsByPrice,
  }
}

const Provider = ({ children }) => {
  const { state, ...restProps } = AppActions()

  const value = {
    isCartOpen: state.isCartOpen,
    products: data,
    sortOptions: state.sortOptions,
    priceFilterOptions: state.priceFilterOptions,
    categoryFilterOptions: state.categoryFilterOptions,
    ...restProps,
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export { Provider, useProductContext }
