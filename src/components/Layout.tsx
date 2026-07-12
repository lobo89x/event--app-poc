import { Outlet } from 'react-router-dom';
import EventNav from './EventNav';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <EventNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-park-200 bg-earth-100 px-4 py-6 text-center text-base text-earth-800 sm:px-6">
        <p>We Outside! — Community event proof of concept</p>
      </footer>
    </div>
  );
}
