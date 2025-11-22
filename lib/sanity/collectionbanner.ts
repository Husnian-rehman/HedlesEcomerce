import { client } from "./client";

export async function getBanner() {
  const query = `*[_type == "collectionBanner"][0]{
    title,
    description,
    bgImage {
      asset -> {
        url
      }
    }
  }`;

  const banner = await client.fetch(query);
  return banner;
}
