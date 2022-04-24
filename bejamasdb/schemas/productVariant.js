export default {
  title: 'Product Details',
  name: 'productDetails',
  type: 'object',
  fields: [
    {
      title: 'Dimmentions',
      name: 'dimmentions',
      type: 'object',
      fields: [
        { name: 'width', type: 'number', title: 'Width' },
        { name: 'height', type: 'number', title: 'Height' },
      ],
    },
    {
      title: 'Size',
      name: 'size',
      type: 'number',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Recommendations',
      name: 'recommendations',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
