import { sanityClient } from '../sanity'

const fetchProducts = async (setLoading, setError, setData) => {
  const query = `*[_type == "product"] {
  _id,
  name,
  category -> {
     title
  },
  price,
  currency,
  quantity,
  details[0] {
    size,
    description,
    recommendations,
    dimmentions
  },
  bestseller,
  featured,
  image
  
}`

  setLoading(true)
  try {
    const p = await sanityClient.fetch(query)
    setData(p)
  } catch (error) {
    setError(error)
  }
  setLoading(false)
}

export default { fetchProducts }
