export const duration = {
  fast: 0.18,
  base: 0.26,
  reveal: 0.56,
  hero: 0.8,
  count: 1.6,
};

export const easing = {
  standard: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOutSoft: [0.65, 0, 0.35, 1] as [number, number, number, number],
};

export const stagger = {
  interval: 0.07,
  maxItems: 6,
  letter: 0.05,
};

export const distance = {
  reveal: 20,
  lift: 3,
};

export const delay = {
  heroDeck: 0.2,
  heroLetters: 0.15,
  homeHeroDeck: 0.5,
};

export const revealGroupViewport = { once: true, amount: "some" as const };

export const revealOnce = {
  initial: { opacity: 0, y: distance.reveal },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: duration.reveal, ease: easing.standard },
};
