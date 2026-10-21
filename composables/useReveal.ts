// Adds `.is-visible` to every `.reveal` element as it enters the viewport.
export function useReveal() {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => observer!.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
