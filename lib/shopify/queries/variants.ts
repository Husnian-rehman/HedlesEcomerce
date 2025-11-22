import { shopifyFetch } from "../client";

export const GET_PRODUCT_VARIANTS = `
  query GetProductVariants($productId: ID!, $first: Int = 10) {
    product(id: $productId) {
      variants(first: $first) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            availableForSale
            sku
            weight
            weightUnit
          }
        }
      }
    }
  }
`;

export const getVariants = async (productId: string, first: number = 10) => {
  try {
    const data = await shopifyFetch({
      query: GET_PRODUCT_VARIANTS,
      variables: { productId, first },
    });
    return data?.product?.variants?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching variants:", error);
    return [];
  }
};
