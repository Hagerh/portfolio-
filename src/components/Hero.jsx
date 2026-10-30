import { motion } from 'framer-motion';
import HeroCanvas from './canvas/HeroBlob';
import { fadeIn } from '../utils/motion';
import { pillPrimary, pillSecondary } from '../utils/styles';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-peach-50 via-peach-100 to-blossom-100"
    >
      {/* soft blob shapes behind the content, echoing the pastel reference image */}
      <div className="blob absolute -left-32 -top-32 h-96 w-96 bg-blossom-100/70 blur-2xl" />
      <div className="blob absolute -bottom-40 -right-20 h-[28rem] w-[28rem] bg-plum-400/20 blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-24 sm:px-10 lg:grid-cols-2">
        <motion.div variants={fadeIn('right', 0.1)} initial="hidden" animate="show">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blossom-600">
            Hi, I'm Hager Hesham
          </p>
          <h1 className="text-4xl font-bold leading-tight text-plum-900 sm:text-5xl lg:text-6xl">
            I Build <span className="text-blossom-500">Software</span> That
            <br /> Solves Real Problems
          </h1>
          <p className="mt-6 max-w-md text-plum-800/80">
            Computer Engineer focused on backend APIs, enterprise integration (IBM FileNet &amp; BAW) and AI-powered Flutter apps — from event-driven services to document and approval workflows for banking clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className={pillPrimary}>
              View Projects
            </a>
            <a href="#contact" className={pillSecondary}>
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          className="h-[320px] sm:h-[420px] lg:h-[520px]"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
