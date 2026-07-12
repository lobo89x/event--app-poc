import type { ScheduleEvent } from '../types/schedule';

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: 'schedule-01',
    title: 'Gates Open',
    time: '10:00 AM',
    description:
      'Welcome to We Outside! Pick up a program at the info tent, find a spot on the lawn, and get ready for a full day of food, music, and community.',
  },
  {
    id: 'schedule-02',
    title: 'Welcome to We Outside!',
    time: '10:30 AM',
    description:
      'Kick off the day with a warm welcome from event hosts and a quick overview of main stage highlights, family activities, and vendor areas.',
  },
  {
    id: 'schedule-03',
    title: 'Community Voices',
    time: '11:15 AM',
    description:
      'Local leaders and neighborhood organizers share short reflections on building stronger community spaces and celebrating time together outdoors.',
    socialLinks: [
      { platform: 'instagram', url: 'https://example.com/we-outside-community-voices' },
    ],
  },
  {
    id: 'schedule-04',
    title: 'The Parkside Rhythm Band',
    time: '12:00 PM',
    description:
      'A lively set of funk and soul favorites from a fictional hometown band perfect for lunch on the lawn. Bring your chairs and your dancing shoes.',
    socialLinks: [
      { platform: 'instagram', url: 'https://example.com/parkside-rhythm-band' },
      { platform: 'youtube', url: 'https://example.com/parkside-rhythm-band-live' },
    ],
  },
  {
    id: 'schedule-05',
    title: 'Family Field Games',
    time: '1:15 PM',
    description:
      'Relay races, sack hops, and team challenges designed for all ages. Volunteers will help groups form so everyone can jump in and play.',
  },
  {
    id: 'schedule-06',
    title: 'Southside Steps Dance Collective',
    time: '2:30 PM',
    description:
      'A high-energy cultural performance blending stepping, call-and-response, and crowd participation from a fictional youth dance collective.',
    socialLinks: [
      { platform: 'tiktok', url: 'https://example.com/southside-steps' },
      { platform: 'instagram', url: 'https://example.com/southside-steps-ig' },
    ],
  },
  {
    id: 'schedule-07',
    title: 'DJ Golden Hour',
    time: '4:00 PM',
    description:
      'A feel-good afternoon mix of R&B, house, and classic cookout anthems to keep the park moving as the sun starts to dip lower.',
    socialLinks: [
      { platform: 'instagram', url: 'https://example.com/dj-golden-hour' },
      { platform: 'facebook', url: 'https://example.com/dj-golden-hour-fb' },
    ],
  },
  {
    id: 'schedule-08',
    title: 'Sunset Soul Live',
    time: '5:30 PM',
    description:
      'Close the day with a live soul set and a final thank-you to vendors, volunteers, and everyone who came out to enjoy the afternoon together.',
    socialLinks: [
      { platform: 'youtube', url: 'https://example.com/sunset-soul-live' },
      { platform: 'link', url: 'https://example.com/sunset-soul' },
    ],
  },
];
