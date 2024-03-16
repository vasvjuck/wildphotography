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
