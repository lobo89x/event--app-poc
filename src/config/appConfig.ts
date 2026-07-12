export type AppMode = 'demo' | 'production';
export type ScheduleDisplayMode = 'cards' | 'image';

function resolveAppMode(): AppMode {
  const mode = import.meta.env.VITE_APP_MODE?.toLowerCase();
  return mode === 'production' ? 'production' : 'demo';
}

function resolveScheduleDisplayMode(): ScheduleDisplayMode {
  const mode = import.meta.env.VITE_SCHEDULE_DISPLAY_MODE?.toLowerCase();
  return mode === 'image' ? 'image' : 'cards';
}

const appMode = resolveAppMode();

export const appConfig = {
  mode: appMode,
  isDemo: appMode === 'demo',
  isProduction: appMode === 'production',
  scheduleDisplayMode: resolveScheduleDisplayMode(),
  emailJs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  },
} as const;

export const DEMO_CONTACT_ALERT_MESSAGE = 'This feature is not live for the demo';
