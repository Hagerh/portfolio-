import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

// Wraps any section component so it fades/slides in once when scrolled into view,
// and tags it with an id so the Navbar can link straight to it.
const SectionWrapper = (Component, idName) => {
  function WrappedComponent() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 'some' }}
        className="relative"
      >
        <Component />
      </motion.section>
    );
  }

  return WrappedComponent;
};

export default SectionWrapper;
