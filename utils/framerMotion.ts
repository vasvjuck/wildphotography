export const sliderVariants = {
  incoming: () => ({
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: () => ({
    scale: 1,
    opacity: 0.2
  })
}

export const transition = {
  duration: 1.5,
  ease: [0.56, 0.03, 0.12, 1.04]
}