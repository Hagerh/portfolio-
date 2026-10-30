import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeUp } from '../utils/motion';
import { sectionHeadText, sectionPadding, sectionSubText } from '../utils/styles';
import { projects, projectTracks } from '../constants';

const ProjectCard = ({ project }) => (
  <div>
    <Tilt
      className="tilt-card h-full"
      options={{ max: 12, scale: 1.02, speed: 400 }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-blossom-100">
        <div className="relative h-48 w-full bg-gradient-to-br from-blossom-100 to-peach-100">
          {!project.image && !project.images ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm font-bold uppercase tracking-widest text-blossom-500/70">
              {project.tags[0]?.name}
            </div>
          ) : project.images ? (
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
  </div>
);

const Projects = () => {
  const [track, setTrack] = useState('all');
  const visible = projects.filter((p) => track === 'all' || p.tracks.includes(track));
  const countFor = (id) =>
    id === 'all' ? projects.length : projects.filter((p) => p.tracks.includes(id)).length;

  return (
    <div className={`${sectionPadding} mx-auto max-w-6xl`}>
      <motion.div variants={fadeUp(0)}>
        <p className={sectionSubText}>My Work</p>
        <h2 className={sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p variants={fadeUp(0.1)} className="mt-6 max-w-2xl text-plum-800/80">
        A few things I've built, grouped by the kind of role they fit. Pick a track to see the projects that best match it  a project can appear in more than one.
      </motion.p>

      <motion.div
        variants={fadeUp(0.2)}
        role="tablist"
        aria-label="Project tracks"
        className="mt-8 flex flex-wrap gap-3"
      >
        {projectTracks.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={track === t.id}
            onClick={() => setTrack(t.id)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              track === t.id
                ? 'bg-blossom-500 text-white shadow-md shadow-blossom-100'
                : 'bg-white text-plum-800 hover:bg-blossom-100'
            }`}
          >
            {t.label}
            <span className="ml-2 text-xs opacity-70">{countFor(t.id)}</span>
          </button>
        ))}
      </motion.div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
