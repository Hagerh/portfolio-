import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText, pillPrimary } from '../utils/styles';

// EmailJS account/service/template IDs live in .env (see .env.example) — never commit real keys.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactDetails = [
  { label: '+20 110 457 3249', href: 'tel:+201104573249', type: 'phone' },
  { label: '+974 5520 4165', href: 'tel:+97455204165', type: 'phone' },
  { label: 'h.hesham227766@gmail.com', href: 'mailto:h.hesham227766@gmail.com', type: 'email' },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blossom-500">
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blossom-500">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className={`${sectionPadding} mx-auto max-w-4xl`}>
      <motion.div variants={fadeUp(0)}>
        <p className={sectionSubText}>Get in touch</p>
        <h2 className={sectionHeadText}>Contact</h2>
      </motion.div>

      <motion.div
        variants={fadeUp(0.05)}
        className="mt-8 flex flex-wrap gap-4"
      >
        {contactDetails.map((detail) => (
          <a
            key={detail.href}
            href={detail.href}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-plum-800 shadow-md shadow-blossom-100 transition hover:text-blossom-600"
          >
            {detail.type === 'phone' ? <PhoneIcon /> : <EmailIcon />}
            {detail.label}
          </a>
        ))}
      </motion.div>

      <motion.form
        ref={formRef}
        variants={fadeUp(0.1)}
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-lg shadow-blossom-100"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-plum-800">Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="rounded-xl border border-blossom-100 bg-peach-50 px-4 py-3 outline-none focus:border-blossom-500"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-plum-800">Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-blossom-100 bg-peach-50 px-4 py-3 outline-none focus:border-blossom-500"
            placeholder="you@example.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-plum-800">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="rounded-xl border border-blossom-100 bg-peach-50 px-4 py-3 outline-none focus:border-blossom-500"
            placeholder="What would you like to say?"
          />
        </label>

        <button type="submit" className={pillPrimary} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'sent' && (
          <p className="text-sm font-semibold text-green-600">
            Thanks! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-semibold text-red-500">
            Something went wrong — check your EmailJS keys in .env and try again.
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
