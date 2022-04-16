import { useEffect } from 'react'
import { useProductContext } from '../context/context'
import products from '../products.json'

export const fetchProducts = (setProducts) => {
  useEffect(() => {
    setProducts(products)
  }, [])
}
