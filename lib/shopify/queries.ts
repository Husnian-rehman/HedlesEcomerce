export const GET_ALL_PRODUCTS = `
  query GetProducts {
    products(first: 50) {
      edges {
        node {
          id
          handle
          title
          description
          featuredImage {
            url
            altText
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;
