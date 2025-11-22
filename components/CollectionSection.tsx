import Image from "next/image";
import { shopifyFetch } from "@/lib/shopify/client"; 
import { getCollectionProductsByTitle } from "@/lib/shopify/queries/collection";
import Link from "next/link";


interface CollectionSectionProps {
  title: string;
  collectionTitles: string[];
  preview?: boolean; // preview mode
}

export default async function CollectionSection({ title, collectionTitles, preview = false }: CollectionSectionProps) {

  if (!collectionTitles || collectionTitles.length === 0) return null;

  let collections: any[] = [];

  if (!preview) {
    // Live site: fetch from Shopify
    const collectionsData = await Promise.all(
      collectionTitles.map(async (collectionTitle) => {
        const shopifyData = await shopifyFetch({
          query: getCollectionProductsByTitle,
         variables: { title: collectionTitle }
        });
        return shopifyData?.data?.collections?.edges?.[0]?.node || null;
      })
    );
    collections = collectionsData.filter(Boolean);
  } else {
    // Preview: show placeholder so editor can see the section
    collections = collectionTitles.map((title) => ({
      title,
      image: { url: "/placeholder.png" }, // ya koi default image
    }));
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, idx) => (
          <Link href="/products">
          <div key={idx} className="text-center">
            {collection.image?.url && (
             <Image
              src={collection.image?.url || '/placeholder.png'}
              alt={collection.title}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            )}
            <h3 className="text-xl font-semibold">{collection.title}</h3>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
