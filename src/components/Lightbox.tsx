"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  title,
  onClose,
  onNavigate,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, currentIndex - 1));
      if (e.key === "ArrowRight")
        onNavigate(Math.min(images.length - 1, currentIndex + 1));
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="relative mx-4 flex max-h-[90vh] max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-4 text-center text-sm font-medium text-white/80">{title}</p>

        <div className="relative h-[70vh] w-full max-w-4xl">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority
          />
        </div>

        <p className="mt-4 text-sm text-white/60">
          {currentIndex + 1} / {images.length}
        </p>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onNavigate(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() =>
                onNavigate(Math.min(images.length - 1, currentIndex + 1))
              }
              disabled={currentIndex === images.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="mt-4 flex max-w-lg gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => onNavigate(i)}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  i === currentIndex
                    ? "border-navy-400 ring-2 ring-navy-400/50"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="56px" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
