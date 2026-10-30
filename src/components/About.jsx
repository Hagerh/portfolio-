import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText } from '../utils/styles';
import { skillGroups } from '../constants';


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

      <motion.div variants={fadeUp(0.2)} className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-blossom-600">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <Tilt key={skill} className="tilt-card" options={{ max: 15, scale: 1.03 }}>
                  <div className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-plum-800 shadow-md shadow-blossom-100">
                    {skill}
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
