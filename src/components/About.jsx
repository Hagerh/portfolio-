import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText } from '../utils/styles';
import { skills } from '../constants';

const About = () => {
  return (
    <div className={`${sectionPadding} mx-auto max-w-6xl`}>
      <motion.div variants={fadeUp(0)}>
        <p className={sectionSubText}>Introduction</p>
        <h2 className={sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.div variants={fadeUp(0.1)} className="mt-6 max-w-3xl space-y-4 text-plum-800/80">
        <p>
          I'm a Computer Engineering graduate from Ain Shams University with a
          passion for building software that solves real-world problems. I
          enjoy working across the entire development lifecycle from
          designing intuitive Flutter applications to architecting scalable
          backend services and integrating AI into practical products.
        </p>
        <p>
          My experience spans cross-platform mobile development, backend
          engineering with FastAPI, and local AI pipelines using Whisper and
          LLMs. I value clean architecture, maintainable code, and creating
          applications that are reliable, efficient, and designed with the
          user in mind.
        </p>
        <p>
          I'm always looking for opportunities to learn new technologies and
          build software that has a meaningful impact.
        </p>
      </motion.div>

      <motion.div variants={fadeUp(0.2)} className="mt-10 flex flex-wrap gap-5">
        {skills.map((skill) => (
          <Tilt key={skill} className="tilt-card" options={{ max: 15, scale: 1.03 }}>
            <div className="rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-plum-800 shadow-md shadow-blossom-100">
              {skill}
            </div>
          </Tilt>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
