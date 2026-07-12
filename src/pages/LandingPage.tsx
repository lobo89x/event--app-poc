import { Link } from 'react-router-dom';
import { imageAssets } from '../config/assets';

const heroLinks = [
  { to: '/vendors', label: 'Vendors' },
  { to: '/map', label: 'Event Map' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/contact', label: 'Contact' },
] as const;

export default function LandingPage() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)]">
      <img
        src={imageAssets.hero}
        alt="Community members gathered on a grassy field at an outdoor festival with vendor tents in the background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-earth-950/70 via-earth-950/55 to-park-900/80"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-4xl flex-col justify-center px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-white/20 bg-earth-950/45 p-6 backdrop-blur-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun-200 sm:text-base">
            Community Outdoor Event
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-7xl">
            We Outside!
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-medium text-park-100 sm:text-2xl">
            Food. Music. Family. Community.
          </p>

          <nav aria-label="Event sections" className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {heroLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-14 items-center justify-center rounded-xl border-2 border-sun-300 bg-sun-500/90 px-5 py-4 text-center text-xl font-bold text-earth-950 hover:bg-sun-400 motion-safe:transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
