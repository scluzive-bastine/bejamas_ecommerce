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
      _ref: string
    }
  }
  bestseller: boolean
  featured: boolean
}

export interface Order {
  _id: string
  transactionId: string
  _createdAt: string
  amount: number
  amountShipping: number
  image: string
}
