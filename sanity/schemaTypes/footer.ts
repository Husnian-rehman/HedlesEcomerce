export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Column Heading'
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'text', type: 'string', title: 'Text' },
                    { name: 'url', type: 'url', title: 'URL' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Icon Class or URL' },
            { name: 'url', type: 'url', title: 'Social URL' }
          ]
        }
      ]
    },
    {
      name: 'copyright',
      type: 'string',
      title: 'Copyright Text'
    }
  ]
}
