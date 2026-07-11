"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import type { ScheduledEvent } from "@/data/events";
import { categoryLabels, statusLabels, statusColors } from "@/data/events";

interface ScheduleEventCardProps {
  event: ScheduledEvent;
}

export function ScheduleEventCard({ event }: ScheduleEventCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="rounded-full bg-royal-50 px-3 py-1 text-xs font-semibold text-royal">
          {categoryLabels[event.category]}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[event.status]}`}>
          {statusLabels[event.status]}
        </span>
      </div>
      <h3 className="font-semibold text-navy-900">{event.title}</h3>
      <div className="mt-3 space-y-1.5 text-sm text-gray-500">
        <p className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-royal" />
          {event.date}
        </p>
        <p className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-royal" />
          {event.time}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-royal" />
          {event.venue}
        </p>
      </div>
    </article>
  );
}

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
}

export function ActivityCard({ title, description, image }: ActivityCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 sm:aspect-[16/9]">
        {!imgError && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-base font-bold text-white sm:text-lg">
          {title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
