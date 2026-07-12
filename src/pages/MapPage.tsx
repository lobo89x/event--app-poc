import ImageContentPage from '../components/ImageContentPage';
import { imageAssets } from '../config/assets';

export default function MapPage() {
  return (
    <ImageContentPage
      title="Event Map"
      description="Use this map to find the main stage, food vendors, community booths, restrooms, children's area, entrance, and first aid."
      imageSrc={imageAssets.eventMap}
      imageAlt="Festival event map showing stages, vendor areas, restrooms, entrances, and key locations throughout the park"
    />
  );
}
