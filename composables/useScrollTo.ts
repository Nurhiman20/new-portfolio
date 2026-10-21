import { useGoTo } from 'vuetify'

export function useScrollTo() {
  const goTo = useGoTo()

  return (target: string) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    goTo(target, { duration: reduce ? 0 : 900, offset: 0, easing: 'easeInOutQuart' })
  }
}
