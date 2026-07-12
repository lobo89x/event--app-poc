type ImageContentPageProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ImageContentPage({
  title,
  description,
  imageSrc,
  imageAlt,
}: ImageContentPageProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-park-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-earth-800 sm:text-xl">
          {description}
        </p>
      </header>
      <figure className="overflow-hidden rounded-2xl border border-park-200 bg-white p-3 shadow-sm sm:p-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="mx-auto h-auto w-full max-w-full object-contain"
        />
      </figure>
    </section>
  );
}
