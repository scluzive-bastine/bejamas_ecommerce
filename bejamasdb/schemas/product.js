export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'bestseller',
      title: 'Bestseller',
      type: 'boolean',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          title: 'Details',
          type: 'productDetails',
        },
      ],
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'name',
      manufactor: 'name',
      media: 'image',
    },
  },
}
