// Assuming this is stored in '@/lib/shopify/queries/collection'
export const getCollectionProductsByTitle = `
  query getCollectionProductsByTitle($title: String!) {
    collections(first: 1, query: $title) {
      edges {
        node {
          id
          title
          handle
          image {
            url
            altText
          }
          products(first: 10) {
            edges {
              node {
                id
                title
                handle
                featuredImage {
                  url
                  altText
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      compareAtPrice {
                        amount
                      }
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
      }
    }
  }
`;

export const getCollectionProductsById = `
  query getCollectionProductsById($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            featuredImage {
              url
              altText
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 1) {
              edges {
                node {
                  compareAtPrice {
                    amount
                  }
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
  }
`;
