import { shopifyFetch } from "../client";
import { PRODUCT_FRAGMENT } from "../fragments/product.fragment";

export const GET_ALL_PRODUCTS = `
  query GetProducts($first: Int = 50) {
    products(first: $first) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const getProducts = async (first: number = 50) => {
  try {
    const data = await shopifyFetch({
      query: GET_ALL_PRODUCTS,
      variables: { first },
    });
    return data?.products?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
