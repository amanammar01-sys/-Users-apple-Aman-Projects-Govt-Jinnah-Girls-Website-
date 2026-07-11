"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Images } from "lucide-react";
import type { CollegeEvent } from "@/data/events";
import { categoryLabels, categoryColors } from "@/data/events";
import Lightbox from "./Lightbox";

interface EventCardProps {
  event: CollegeEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <article className="card-premium group overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[event.category]}`}
          >
            {categoryLabels[event.category]}
          </span>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
            <Images className="h-3.5 w-3.5" />
            {event.images.length}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-navy-900">{event.title}</h3>
          {event.date && (
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              {event.date}
            </p>
          )}
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
            {event.description}
          </p>

          <button
            type="button"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
            className="mt-4 w-full rounded-lg bg-slate-50 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50"
          >
            View Gallery
          </button>
        </div>
      </article>

      {lightboxOpen && (
        <Lightbox
          images={event.images}
          currentIndex={lightboxIndex}
          title={event.title}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
