import { shopifyFetch } from "@/lib/shopify/client";

// Fetch all blogs and their articles
export async function getAllBlogs() {
  const query = `
    {
      blogs(first: 50) {
        edges {
          node {
            id
            handle
            title
            articles(first: 50) {
              edges {
                node {
                  id
                  title
                  handle
                  excerpt
                  publishedAt
                  image {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch({ query });
  return data.blogs.edges.map((b: any) => b.node);
}

// Fetch a single article by blogHandle and articleHandle
export async function getArticleByHandle(blogHandle: string, articleHandle: string) {
  const query = `
    {
      blogByHandle(handle: "${blogHandle}") {
        id
        title
        articles(first: 50) {
          edges {
            node {
              id
              title
              handle
              contentHtml
              publishedAt
              image {
                src
                altText
              }
            }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch({ query });

  const article = data.blogByHandle.articles.edges.find(
    (a: any) => a.node.handle === articleHandle
  );

  return article?.node || null;
}
