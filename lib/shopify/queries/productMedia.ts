import { shopifyFetch } from "../client";
import { MEDIA_FRAGMENT } from "../fragments/media.fragment";

export const GET_PRODUCT_MEDIA = `
  query GetProductMedia($productId: ID!, $first: Int = 10) {
    product(id: $productId) {
      media(first: $first) {
        edges {
          node {
            ...MediaFragment
          }
        }
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

export const getProductMedia = async (productId: string, first: number = 10) => {
  try {
    const data = await shopifyFetch({
      query: GET_PRODUCT_MEDIA,
      variables: { productId, first },
    });
    return data?.product?.media?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching product media:", error);
    return [];
  }
};
