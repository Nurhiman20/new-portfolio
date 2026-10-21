<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'is-menu-open': open }">
    <div class="wrap site-header__inner">
      <a href="#home" class="site-header__mark" aria-label="Angga Nurhiman — back to top" @click.prevent="go('#home')">
        <nuxt-img src="/images/logo.png" alt="" width="28" height="27" format="webp" />
        <span class="mono">Angga Nurhiman</span>
      </a>

      <nav aria-label="Primary" class="site-nav">
        <ul>
          <li v-for="(item, i) in navItems" :key="item.to">
            <a
              :href="item.to"
              class="site-nav__link"
              :class="{ 'is-active': active === item.to }"
              :aria-current="active === item.to ? 'location' : undefined"
              @click.prevent="go(item.to)"
            >
              <span class="mono site-nav__idx">{{ pad(i + 1) }}</span>
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        ref="toggleEl"
        type="button"
        class="menu-toggle"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        @click="open = !open"
      >
        <span class="mono">{{ open ? 'Close' : 'Menu' }}</span>
        <span class="menu-toggle__icon" aria-hidden="true"><i /><i /></span>
      </button>
    </div>
  </header>

  <Transition name="menu">
    <div
      v-if="open"
      id="mobile-menu"
      ref="menuEl"
      class="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <ol class="wrap">
        <li v-for="(item, i) in navItems" :key="item.to" :style="{ '--i': i }">
          <a :href="item.to" @click.prevent="go(item.to)">
            <span class="mono">{{ pad(i + 1) }}</span>
            {{ item.title }}
          </a>
        </li>
      </ol>
      <p class="wrap mono mobile-menu__foot">{{ contact.email }}</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { navItems, contact, pad } from '~/data/portfolio'

const scrollTo = useScrollTo()
const open = ref(false)
const scrolled = ref(false)
const active = ref('')
const menuEl = ref<HTMLElement>()
const toggleEl = ref<HTMLButtonElement>()

const go = (to: string) => {
  open.value = false
  scrollTo(to)
}

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

// Esc closes, Tab stays inside toggle + menu links
const onKeydown = (e: KeyboardEvent) => {
  if (!open.value) return
  if (e.key === 'Escape') {
    open.value = false
    toggleEl.value?.focus()
    return
  }
  if (e.key !== 'Tab' || !menuEl.value || !toggleEl.value) return
  const focusables = [toggleEl.value, ...menuEl.value.querySelectorAll<HTMLElement>('a')]
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(open, async (isOpen) => {
  document.documentElement.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) {
    await nextTick()
    menuEl.value?.querySelector('a')?.focus()
  }
})

let observer: IntersectionObserver | undefined

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKeydown)

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = `#${entry.target.id}`
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  ;['#home', ...navItems.map((n) => n.to)].forEach((sel) => {
    const el = document.querySelector(sel)
    if (el) observer!.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKeydown)
  observer?.disconnect()
  document.documentElement.style.overflow = ''
})
</script>

<style lang="scss">
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  height: var(--header-h);
  border-bottom: 1px solid transparent;
  transition: background-color 0.4s, border-color 0.4s, backdrop-filter 0.4s;

  &.is-scrolled:not(.is-menu-open) {
    background: rgba(14, 14, 12, 0.72);
    backdrop-filter: blur(14px) saturate(1.2);
    border-bottom-color: var(--rule);
  }

  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  &__mark {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--paper);

    img {
      width: 28px;
      height: auto;
      transition: transform 0.6s var(--ease-out);
    }

    &:hover img {
      transform: rotate(-12deg) scale(1.08);
    }
  }
}

.site-nav {
  display: none;

  ul {
    display: flex;
    gap: clamp(1.25rem, 3vw, 2.75rem);
    list-style: none;
  }

  &__link {
    position: relative;
    display: inline-flex;
    align-items: baseline;
    gap: 0.4rem;
    padding-block: 0.4rem;
    font-size: 0.95rem;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.3s;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: var(--accent);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s var(--ease-out);
    }

    &:hover,
    &.is-active {
      color: var(--paper);
    }

    &.is-active::after,
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &__idx {
    font-size: 0.65rem;
    color: var(--accent);
  }

  @media (min-width: 768px) {
    display: block;
  }
}

.menu-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 44px;
  padding-inline: 0.25rem;
  color: var(--paper);
  background: none;
  border: 0;
  cursor: pointer;

  &__icon {
    position: relative;
    width: 22px;
    height: 10px;

    i {
      position: absolute;
      left: 0;
      right: 0;
      height: 1.5px;
      background: currentColor;
      transition: transform 0.4s var(--ease-out), top 0.4s var(--ease-out);

      &:first-child { top: 0; }
      &:last-child { top: 100%; }
    }
  }

  &[aria-expanded='true'] &__icon i {
    top: 50%;

    &:first-child { transform: rotate(45deg); }
    &:last-child { transform: rotate(-45deg); }
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--header-h) + 2rem);
  padding-bottom: 2rem;
  background: var(--ink);
  clip-path: inset(0);

  ol {
    list-style: none;
  }

  li {
    border-bottom: 1px solid var(--rule);
    transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
    transition-delay: calc(var(--i) * 60ms + 120ms);
  }

  a {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding-block: 0.9rem;
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 12vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--paper);
    text-decoration: none;

    .mono {
      color: var(--accent);
    }
  }

  &__foot {
    color: var(--muted);
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: clip-path 0.6s var(--ease-in-out);
}

.menu-enter-from,
.menu-leave-to {
  clip-path: inset(0 0 100% 0);

  li {
    opacity: 0;
    transform: translateY(24px);
  }
}
</style>
