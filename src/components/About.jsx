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
        I am a Computer Engineering graduate from Ain Shams University, 
        I love building software that solves problems in the real world. 
        I love working across the full development lifecycle - from designing intuitive Flutter applications, to architecting scalable backend services, to integrating AI into practical products.

        </p>
        <p>
         My background is in cross-platform mobile development, backend engineering with FastAPI and local AI pipelines with Whisper and LLMs. I am a big fan of clean architecture, maintainable code, and designing applications that are reliable, efficient and user-centric.
        </p>
        <p>
         I am enthusiastic about learning new technologies and building meaningful software opportunities.
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
