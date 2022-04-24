export interface Product {
  _id: string
  name: string
  category: {
    title: string
  }
  price: number
  currecny: string
  quantity: number
  details: [object]
  image: {
    asset: {
      url: string
    }
  }
  bestseller: boolean
  featured: boolean
}
