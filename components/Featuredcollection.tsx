"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  handle: string;
  featuredImage?: { url: string; altText: string };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    edges: {
      node: {
        compareAtPrice?: { amount: string };
        price: { amount: string };
      };
    }[];
  };
}

export default function FeaturedCollectionSection({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const variant = product.variants?.edges?.[0]?.node;
            const price = variant?.price?.amount;
            const comparePrice = variant?.compareAtPrice?.amount;

            return (
              <Link
                key={product.id}
                href={`/products/${product.handle}`} // link to product detail page
                className="group border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[400px] rounded overflow-hidden bg-gray-100">
                  {product.featuredImage?.url && (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      className="object-cover h-full group-hover:scale-105 transition"
                    />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>

                {/* PRICE */}
                <div className="mt-2 flex gap-2 items-center">
                  <span className="text-lg font-bold">${price}</span>
                  {comparePrice && (
                    <span className="line-through text-gray-400">
                      ${comparePrice}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}






// "use client";

// import Image from "next/image";

// interface Product {
//   id: string;
//   title: string;
//   handle: string;
//   featuredImage?: { url: string; altText: string };
//   priceRange: {
//     minVariantPrice: {
//       amount: string;
//       currencyCode: string;
//     };
//   };
//   variants: {
//     edges: {
//       node: {
//         compareAtPrice?: { amount: string };
//         price: { amount: string };
//       };
//     }[];
//   };
// }

// export default function FeaturedCollectionSection({
//   title,
//   products,
// }: {
//   title: string;
//   products: Product[];
// }) {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6">
//         {title && (
//           <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
//         )}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => {
//             const variant = product.variants?.edges?.[0]?.node;
//             const price = variant?.price?.amount;
//             const comparePrice = variant?.compareAtPrice?.amount;

//             return (
//               <div
//                 key={product.id}
//                 className="group border rounded-lg p-4 shadow hover:shadow-lg transition"
//               >

//                 {/* IMAGE */}
//                 <div className="relative w-full h-[400px] rounded overflow-hidden bg-gray-100">
//                   {product.featuredImage?.url && (
//                     <Image
//                       src={product.featuredImage.url}
//                       alt={product.featuredImage.altText || product.title}
//                       fill
//                       className="object-cover h-full group-hover:scale-105 transition"
//                     />
//                   )}
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>

//                 {/* PRICE */}
//                 <div className="mt-2 flex gap-2 items-center">
//                   <span className="text-lg font-bold">
//                     ${price}
//                   </span>

//                   {comparePrice && (
//                     <span className="line-through text-gray-400">
//                       ${comparePrice}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
