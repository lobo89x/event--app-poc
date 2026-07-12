import ImageContentPage from '../components/ImageContentPage';
import ScheduleDeck from '../components/schedule/ScheduleDeck';
import { appConfig } from '../config/appConfig';
import { imageAssets } from '../config/assets';

const scheduleTitle = 'Main Stage Schedule';
const scheduleDescription =
  'A simple day-of schedule for performances, activities, and community moments on the main stage.';

export default function SchedulePage() {
  if (appConfig.scheduleDisplayMode === 'image') {
    return (
      <ImageContentPage
        title={scheduleTitle}
        description={scheduleDescription}
        imageSrc={imageAssets.eventSchedule}
        imageAlt="Event schedule listing gates open, welcome, dance showcase, family games, live music, community awards, and closing performance"
      />
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-park-900 sm:text-5xl">
          {scheduleTitle}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-earth-800 sm:text-xl">
          {scheduleDescription}
        </p>
      </header>
      <ScheduleDeck />
    </section>
  );
}
