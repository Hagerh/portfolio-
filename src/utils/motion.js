export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', duration: 0.6, delay, ease: 'easeOut' },
  },
});

export const fadeIn = (direction = 'up', delay = 0) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'up' || direction === 'left' ? 40 : -40;

  return {
    hidden: { opacity: 0, [axis]: sign },
    show: {
      opacity: 1,
      [axis]: 0,
      transition: { type: 'tween', duration: 0.7, delay, ease: 'easeOut' },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
