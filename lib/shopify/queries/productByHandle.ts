// lib/shopify/queries/productByHandle.ts
import { shopifyFetch } from "../client";
import { PRODUCT_FRAGMENT } from "../fragments/product.fragment";

export const GET_PRODUCT_BY_HANDLE = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const getProductByHandle = async (handle: string) => {
  try {
    const data = await shopifyFetch({
      query: GET_PRODUCT_BY_HANDLE,
      variables: { handle },
    });
    return data?.productByHandle || null;
  } catch (error) {
    console.error("Error fetching product by handle:", error);
    return null;
  }
};
