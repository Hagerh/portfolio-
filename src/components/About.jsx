import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText } from '../utils/styles';
import { skillGroups } from '../constants';


const groupAccents = ['bg-blossom-500', 'bg-plum-400', 'bg-peach-200', 'bg-blossom-300'];

const chipsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const chip = {
  hidden: { opacity: 0, y: 14, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 18 } },
};

const SkillGroup = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: 'easeOut' }}
    whileHover={{ y: -6 }}
    className="rounded-3xl bg-white p-6 shadow-lg shadow-blossom-100"
  >
    <div className="mb-4 flex items-center gap-3">
      <motion.span
        className={`h-3 w-3 rounded-full ${groupAccents[index % groupAccents.length]}`}
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.4 }}
      />
      <h3 className="text-sm font-bold uppercase tracking-widest text-blossom-600">{group.title}</h3>
    </div>
    <motion.div
      variants={chipsContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-wrap gap-2.5"
    >
      {group.items.map((skill) => (
        <motion.span
          key={skill}
          variants={chip}
          whileHover={{ y: -4, scale: 1.08, rotate: -2 }}
          className="cursor-default rounded-full bg-peach-50 px-4 py-2 text-sm font-semibold text-plum-800 ring-1 ring-blossom-100 transition-colors hover:bg-blossom-500 hover:text-white hover:ring-blossom-500"
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <div className={`${sectionPadding} mx-auto max-w-6xl`}>
      <motion.div variants={fadeUp(0)}>
        <p className={sectionSubText}>Introduction</p>
        <h2 className={sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.div variants={fadeUp(0.1)} className="mt-6 max-w-3xl space-y-4 text-plum-800/80">
        <p>
          I am a Computer Engineering graduate from Ain Shams University (2026) with experience in
          backend APIs, enterprise integration (IBM FileNet, BAW), and Flutter apps with AI features.
        </p>
        <p>
          I currently work as an Enterprise Application Integration intern at Intercom Enterprise,
          building document automation and approval workflow solutions for banking clients. Alongside
          that I build event-driven backends with Node.js and Kafka, and AI powered products with
          FastAPI, Whisper and LLMs. I care about clean architecture, maintainable code and reliable systems.
        </p>
        <p>I'm looking for a backend or integration role where I can keep growing.</p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.title} group={group} index={i} />
        ))}
      </div>
    </div>
  );
};

export default About;
