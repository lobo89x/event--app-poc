import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-park-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-earth-800 sm:text-xl">
          Questions about vendors, accessibility, or volunteering? Send us a
          message and we will get back to you.
        </p>
      </header>

      <ContactForm />
    </section>
  );
}
