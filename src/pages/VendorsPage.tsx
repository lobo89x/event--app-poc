import VendorCard from '../components/VendorCard';
import { vendors } from '../data/vendors';

export default function VendorsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-10 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-park-900 sm:text-5xl">
          Event Vendors
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-earth-800 sm:text-xl">
          Explore food, art, community organizations, and family activities across
          the park. Booth numbers match the event map.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((vendor) => (
          <li key={vendor.id}>
            <VendorCard vendor={vendor} />
          </li>
        ))}
      </ul>
    </section>
  );
}
