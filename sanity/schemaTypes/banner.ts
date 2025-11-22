export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Slide Heading',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Slide Description',
            },
            {
              name: 'bgImage',
              type: 'image',
              title: 'Slide Background Image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'shopAllBtn',
              title: 'Shop All Button',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Button Text',
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'Button URL',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
