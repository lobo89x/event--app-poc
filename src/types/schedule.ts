export type ScheduleSocialPlatform =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'youtube'
  | 'link';

export type ScheduleSocialLink = {
  platform: ScheduleSocialPlatform;
  url: string;
};

export type ScheduleEvent = {
  id: string;
  title: string;
  time: string;
  description: string;
  socialLinks?: ScheduleSocialLink[];
};
