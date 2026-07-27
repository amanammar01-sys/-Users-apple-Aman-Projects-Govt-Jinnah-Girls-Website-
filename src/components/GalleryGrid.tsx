"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryCategory, type GalleryImage } from "@/data/gallery";
import Lightbox from "./Lightbox";
import FadeIn from "./FadeIn";

interface GalleryGridProps {
  images: GalleryImage[];
  limit?: number;
  showFilters?: boolean;
}

export default function GalleryGrid({ images, limit, showFilters = true }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;
  const allSrcs = displayed.map((img) => img.src);

  return (
    <>
      {showFilters && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-royal text-white shadow-sm"
                  : "bg-gray-100 text-navy-600 hover:bg-royal-50 hover:text-royal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-5">
        {displayed.map((image, index) => (
          <FadeIn key={image.id} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              className="group mb-3 block w-full overflow-hidden rounded-2xl sm:mb-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy-900/0 transition-colors group-hover:bg-navy-900/20" />
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={allSrcs}
          currentIndex={lightboxIndex}
          title="Campus Gallery"
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
