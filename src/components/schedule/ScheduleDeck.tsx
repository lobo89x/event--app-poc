import { useCallback, useEffect, useRef, useState } from 'react';
import { scheduleEvents } from '../../data/schedule';
import ScheduleCard from './ScheduleCard';

const SCROLL_COLLAPSE_THRESHOLD_PX = 48;

export default function ScheduleDeck() {
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const expandScrollYRef = useRef<number | null>(null);
  const collapseGuardRef = useRef(false);

  const collapseActiveCard = useCallback(() => {
    setActiveEventId(null);
    expandScrollYRef.current = null;
  }, []);

  const handleToggle = useCallback((eventId: string) => {
    setActiveEventId((current) => {
      if (current === eventId) {
        expandScrollYRef.current = null;
        return null;
      }

      expandScrollYRef.current = window.scrollY;
      collapseGuardRef.current = true;
      window.requestAnimationFrame(() => {
        collapseGuardRef.current = false;
      });

      return eventId;
    });
  }, []);

  useEffect(() => {
    if (!activeEventId) {
      return;
    }

    const handleScroll = () => {
      if (collapseGuardRef.current) {
        return;
      }

      const expandScrollY = expandScrollYRef.current;
      if (expandScrollY === null) {
        return;
      }

      if (Math.abs(window.scrollY - expandScrollY) >= SCROLL_COLLAPSE_THRESHOLD_PX) {
        collapseActiveCard();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeEventId, collapseActiveCard]);

  return (
    <ol className="mx-auto flex max-w-3xl list-none flex-col gap-4">
      {scheduleEvents.map((event) => (
        <li key={event.id}>
          <ScheduleCard
            event={event}
            isExpanded={activeEventId === event.id}
            onToggle={() => handleToggle(event.id)}
          />
        </li>
      ))}
    </ol>
  );
}
