export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactSubmissionResult =
  | { status: 'demo' }
  | { status: 'success' }
  | { status: 'error'; message: string };
