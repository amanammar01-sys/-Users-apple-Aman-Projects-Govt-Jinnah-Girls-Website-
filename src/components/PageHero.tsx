import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image = "/images/page3_img1.jpeg",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-12 text-white sm:py-16 lg:py-20">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-navy-950/80" />

      <div className="container-wide relative z-10">
        {breadcrumb && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
            {breadcrumb}
          </p>
        )}
        <span className="mb-4 block h-0.5 w-10 bg-amber-500" aria-hidden="true" />
        <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm text-gray-300 sm:mt-4 sm:text-base lg:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
