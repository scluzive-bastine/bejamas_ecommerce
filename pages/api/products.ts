import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../products.json'

type Product = {
    name: string
    category: string,
    price: number
    currency: string,
    image: any,
    bestseller: boolean,
    featured: boolean,
    details?: any
}

    // {
    //   "name": "Red Bench",
    //   "category": "people",
    //   "price": 3.89,
    //   "currency": "USD",
    //   "image": {
    //     "src": "",
    //     "alt": ""
    //   },
    //   "bestseller": true,
    //   "featured": false,
    //   "details": null
    // },

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {

    res.status(200).json(products)
}