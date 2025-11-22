import { shopifyFetch } from "../client";

export const GET_ALL_TAGS = `
  query GetTags($first: Int = 50) {
    productTags(first: $first) {
      edges {
        node {
          value
        }
      }
    }
  }
`;

export const getTags = async (first: number = 50) => {
  try {
    const data = await shopifyFetch({
      query: GET_ALL_TAGS,
      variables: { first },
    });
    return data?.productTags?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};
