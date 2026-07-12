import emailjs from '@emailjs/browser';
import { appConfig, DEMO_CONTACT_ALERT_MESSAGE } from '../config/appConfig';
import type { ContactFormData, ContactSubmissionResult } from '../types/contact';

function getMissingEmailJsConfig(): string[] {
  const missing: string[] = [];
  const { serviceId, templateId, publicKey } = appConfig.emailJs;

  if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');

  return missing;
}

async function sendWithEmailJs(data: ContactFormData): Promise<void> {
  const missing = getMissingEmailJsConfig();
  if (missing.length > 0) {
    throw new Error(
      `EmailJS is not configured. Missing: ${missing.join(', ')}`,
    );
  }

  await emailjs.send(
    appConfig.emailJs.serviceId,
    appConfig.emailJs.templateId,
    {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    },
    {
      publicKey: appConfig.emailJs.publicKey,
    },
  );
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactSubmissionResult> {
  if (appConfig.isDemo) {
    window.alert(DEMO_CONTACT_ALERT_MESSAGE);
    return { status: 'demo' };
  }

  try {
    await sendWithEmailJs(data);
    return { status: 'success' };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unable to send your message right now. Please try again later.';

    return { status: 'error', message };
  }
}
