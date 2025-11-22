// app/products/[product-detail]/ProductGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: { node: { url: string; altText?: string } }[];
  productTitle: string;
}

export default function ProductGallery({ images, productTitle }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]?.node.url);

  if (!images.length) {
    return (
      <div className="w-full h-80 bg-gray-100 flex items-center justify-center rounded-lg">
        No Images
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-150 relative rounded-lg overflow-hidden">
        <Image
          src={selectedImage!}
          alt={productTitle}
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="flex gap-4 flex-wrap md:flex-nowrap overflow-x-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-24 h-24 relative rounded-lg overflow-hidden border-2 ${
              selectedImage === img.node.url
                ? "border-blue-500"
                : "border-gray-200"
            } cursor-pointer flex-shrink-0`}
            onClick={() => setSelectedImage(img.node.url)}
          >
            <Image
              src={img.node.url}
              alt={img.node.altText || productTitle}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
