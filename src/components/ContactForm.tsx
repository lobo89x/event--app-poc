import { FormEvent, useState } from 'react';
import { submitContactForm } from '../services/contactService';
import type { ContactFormData } from '../types/contact';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>(
    {},
  );
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(data: ContactFormData) {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!data.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!isValidEmail(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!data.message.trim()) {
      nextErrors.message = 'Please enter a message.';
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError('');
    setSuccessMessage('');

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);

      if (result.status === 'success') {
        setSuccessMessage('Thank you! Your message has been sent.');
        setFormData(initialFormData);
      } else if (result.status === 'error') {
        setSubmitError(result.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  return (
    <form
      className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-park-200 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-lg font-semibold text-earth-900">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
          className="w-full rounded-lg border border-earth-300 px-4 py-3 text-lg text-earth-950"
        />
        {errors.name ? (
          <p className="mt-2 text-base text-red-700" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-lg font-semibold text-earth-900">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(event) => updateField('email', event.target.value)}
          className="w-full rounded-lg border border-earth-300 px-4 py-3 text-lg text-earth-950"
        />
        {errors.email ? (
          <p className="mt-2 text-base text-red-700" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-lg font-semibold text-earth-900">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="w-full rounded-lg border border-earth-300 px-4 py-3 text-lg text-earth-950"
        />
        {errors.message ? (
          <p className="mt-2 text-base text-red-700" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-base text-red-800" role="alert">
          {submitError}
        </p>
      ) : null}

      {successMessage ? (
        <p className="rounded-lg bg-park-100 px-4 py-3 text-base text-park-900" role="status">
          {successMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-park-700 px-6 py-4 text-lg font-semibold text-white hover:bg-park-800 disabled:cursor-not-allowed disabled:opacity-70 motion-safe:transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
