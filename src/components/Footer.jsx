import { socials } from '../constants';

const Footer = () => {
  return (
    <footer className="border-t border-blossom-100 bg-cloud-100 px-6 py-10 text-center sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-plum-800/70">
          © {new Date().getFullYear()} Hager Hesham. Built with React & Three.js.
        </p>
        <ul className="flex gap-6">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-plum-800 transition hover:text-blossom-500"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
