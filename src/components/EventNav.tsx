import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems: Array<{ to: string; label: string; end?: boolean }> = [
  { to: '/', label: 'Home', end: true },
  { to: '/vendors', label: 'Vendors' },
  { to: '/map', label: 'Map' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/contact', label: 'Contact' },
];

function navLinkClassName({ isActive }: { isActive: boolean }) {
  const base =
    'inline-flex min-h-12 items-center rounded-lg px-4 py-3 text-lg font-semibold transition-colors motion-safe:transition-colors';
  return isActive
    ? `${base} bg-park-700 text-white`
    : `${base} text-earth-900 hover:bg-park-100 hover:text-park-900`;
}

export default function EventNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-park-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="font-display text-2xl font-bold text-park-800 sm:text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          We Outside!
        </NavLink>

        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-park-300 bg-white px-4 text-base font-semibold text-park-800 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close Menu' : 'Menu'}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-[4.5rem] z-20 flex-col gap-2 border-b border-park-200 bg-white px-4 py-4 shadow-md md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={navLinkClassName}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
