'use client';

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

async function getBannerData() {
  const query = `*[_type == "banner"][0]`;
  return await client.fetch(query);
}

export default function Banner() {
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    getBannerData().then(setBanner);
  }, []);

  if (!banner?.slides) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <Slider {...settings}>
        {banner.slides.map((slide: any, idx: number) => (
          <div key={idx} className="relative w-full h-[100vh]">
            {/* Background Image */}
            {slide.bgImage && (
              <Image
                src={urlFor(slide.bgImage).url()}
                alt="Slide Background"
                fill
                className="object-cover"
              />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute mx-auto container inset-0 flex flex-col items-start justify-center text-white px-4">
              <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                {slide.heading}
              </h2>
              <p className="text-lg max-w-2xl mb-6 opacity-90">
                {slide.description}
              </p>

              {/* Internal Link Button */}
              {slide?.shopAllBtn?.url && (
                <Link
                  href={slide.shopAllBtn.url}
                  className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-200 transition"
                >
                  {slide.shopAllBtn.text || "Shop Now"}
                </Link>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
