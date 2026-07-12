import type { Vendor } from '../types/vendor';

type VendorCardProps = {
  vendor: Vendor;
};

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-park-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-bold text-park-900">{vendor.name}</h2>
      <dl className="mt-4 space-y-3 text-lg text-earth-900">
        <div>
          <dt className="font-semibold text-earth-700">Category</dt>
          <dd>{vendor.category}</dd>
        </div>
        <div>
          <dt className="font-semibold text-earth-700">Booth</dt>
          <dd>Booth {vendor.boothNumber}</dd>
        </div>
      </dl>
      {vendor.socialUrl ? (
        <a
          href={vendor.socialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-sun-500 px-4 py-3 text-center text-lg font-semibold text-earth-950 hover:bg-sun-400 motion-safe:transition-colors"
        >
          Visit Social Page
        </a>
      ) : (
        <p className="mt-6 text-base text-earth-600">Social link coming soon</p>
      )}
    </article>
  );
}
