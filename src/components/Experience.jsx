import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText } from '../utils/styles';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <div className={`${sectionPadding} mx-auto max-w-6xl`}>
      <motion.div variants={fadeUp(0)}>
        <p className={sectionSubText}>What I've done so far</p>
        <h2 className={sectionHeadText}>Experience</h2>
      </motion.div>

      <div className="mt-12">
        <VerticalTimeline lineColor="#f2a3c1">
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.title + exp.company_name}
              date={exp.date}
              contentStyle={{
                background: '#ffffff',
                boxShadow: '0 10px 30px rgba(232, 95, 150, 0.15)',
                borderRadius: '1.5rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
              iconStyle={{ background: '#e85f96', color: '#fff' }}
            >
              <h3 className="text-lg font-bold text-plum-900">{exp.title}</h3>
              <p className="text-sm font-semibold text-blossom-600">
                {exp.company_name}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-plum-800/80">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-blossom-600 hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
