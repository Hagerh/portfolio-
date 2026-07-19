import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText } from '../utils/styles';
import { projects } from '../constants';

const ProjectCard = ({ project, index }) => (
  <motion.div variants={fadeUp(index * 0.1)}>
    <Tilt
      className="tilt-card h-full"
      options={{ max: 12, scale: 1.02, speed: 400 }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-blossom-100">
        <div className="relative h-48 w-full bg-gradient-to-br from-blossom-100 to-peach-100">
          {project.images ? (
            <div className="grid h-full grid-cols-2 gap-0.5">
              {project.images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={project.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ))}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-plum-900">{project.name}</h3>
          <p className="mt-2 flex-1 text-sm text-plum-800/70">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-xs font-semibold ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            {project.sourceCodeLink && (
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blossom-600 hover:underline"
              >
                Source →
              </a>
            )}
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-plum-600 hover:underline"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  return (
    <div className={`${sectionPadding} mx-auto max-w-6xl`}>
      <motion.div variants={fadeUp(0)}>
        <p className={sectionSubText}>My Work</p>
        <h2 className={sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p variants={fadeUp(0.1)} className="mt-6 max-w-2xl text-plum-800/80">
        A few things I've built. These projects showcase my skills in cross-platform mobile development, backend engineering, and AI integration. Each project is a testament to my commitment to building software that solves real-world problems.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
