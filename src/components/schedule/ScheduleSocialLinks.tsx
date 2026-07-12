import type { ScheduleEvent, ScheduleSocialPlatform } from '../../types/schedule';

type ScheduleSocialLinksProps = {
  eventTitle: string;
  socialLinks: NonNullable<ScheduleEvent['socialLinks']>;
};

const platformLabels: Record<ScheduleSocialPlatform, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  link: 'website',
};

const platformIcons: Record<ScheduleSocialPlatform, string> = {
  instagram: 'lab la-instagram',
  facebook: 'lab la-facebook',
  tiktok: 'lab la-tiktok',
  youtube: 'lab la-youtube',
  link: 'las la-link',
};

export default function ScheduleSocialLinks({
  eventTitle,
  socialLinks,
}: ScheduleSocialLinksProps) {
  return (
    <div className="flex flex-wrap justify-end gap-2">
      {socialLinks.map((link) => {
        const label = platformLabels[link.platform];

        return (
          <a
            key={`${link.platform}-${link.url}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${eventTitle} on ${label}`}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-park-200 bg-park-50 text-2xl text-park-800 hover:bg-park-100 motion-safe:transition-colors"
          >
            <i className={platformIcons[link.platform]} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
