export const duration = {
  fast: 0.18,
  base: 0.26,
  reveal: 0.56,
  hero: 0.8,
};

export const easing = {
  standard: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOutSoft: [0.65, 0, 0.35, 1] as [number, number, number, number],
};

export const stagger = {
  interval: 0.07,
  maxItems: 6,
};

export const distance = {
  reveal: 20,
  lift: 3,
  parallaxMax: 24,
};

export const delay = {
  heroDeck: 0.2,
};

export const revealOnce = {
  initial: { opacity: 0, y: distance.reveal },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: duration.reveal, ease: easing.standard },
};
