import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { getGalleryContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of campus life, events, and activities at GJGCW Mozang.",
};

export default async function GalleryPage() {
  const galleryImages = await getGalleryContent();

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through campus life, celebrations, and student achievements."
        breadcrumb="Media"
        image="/images/page2_img10.jpeg"
      />

      <section className="section-padding">
        <div className="container-wide">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
