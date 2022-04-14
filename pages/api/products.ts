import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../products.json'

type Product = {
    name: string
    category: string,
    price: number
    currency: string,
    image: {},
    bestseller: boolean,
    featured: boolean,
    details?: {},
    dimensions?: {}
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    return res.status(200).json({name: "Sabastine"})
}