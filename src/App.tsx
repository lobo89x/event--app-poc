import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import SchedulePage from './pages/SchedulePage';
import VendorsPage from './pages/VendorsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="vendors" element={<VendorsPage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
