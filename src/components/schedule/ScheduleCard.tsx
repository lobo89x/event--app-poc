import ScheduleSocialLinks from './ScheduleSocialLinks';
import type { ScheduleEvent } from '../../types/schedule';

type ScheduleCardProps = {
  event: ScheduleEvent;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function ScheduleCard({
  event,
  isExpanded,
  onToggle,
}: ScheduleCardProps) {
  const detailsId = `${event.id}-details`;

  return (
    <article className="overflow-hidden rounded-xl border border-park-200 bg-white shadow-sm">
      <button
        type="button"
        id={`${event.id}-trigger`}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left hover:bg-park-50 motion-safe:transition-colors sm:px-6 sm:py-6"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={onToggle}
      >
        <span className="text-2xl font-bold text-park-900 sm:text-3xl">
          {event.title}
        </span>
        <span className="shrink-0 pt-1 text-lg font-semibold text-sun-700 sm:text-xl">
          {event.time}
        </span>
      </button>

      {isExpanded ? (
        <div
          id={detailsId}
          role="region"
          aria-labelledby={`${event.id}-trigger`}
          className="border-t border-park-100 px-5 pb-5 motion-safe:animate-[schedule-expand_200ms_ease-out] sm:px-6 sm:pb-6"
        >
          <div className="pt-4">
            <p className="max-w-2xl text-lg leading-relaxed text-earth-800">
              {event.description}
            </p>
            {event.socialLinks && event.socialLinks.length > 0 ? (
              <div className="mt-4 flex justify-end">
                <ScheduleSocialLinks
                  eventTitle={event.title}
                  socialLinks={event.socialLinks}
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
