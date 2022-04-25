export default {
  name: 'orders',
  title: 'Orders',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'amountShipping',
      title: 'Amount Shipping',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'customer',
      manufactor: 'customer',
    },
  },
}
