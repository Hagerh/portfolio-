import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import profilePhoto from '../assets/photo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle a blurred/opaque background once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-cloud-50/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#hero" className="flex items-center gap-3 text-xl font-bold text-plum-900">
          <img
            src={profilePhoto}
            alt="Hager Hesham"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-blossom-300"
          />
          Hager<span className="text-blossom-500">Hesham</span>
        </a>

        <ul className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-semibold text-plum-800 transition hover:text-blossom-500"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blossom-100 text-plum-800 sm:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-6 mb-4 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg sm:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-semibold text-plum-800"
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
