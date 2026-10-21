<template>
  <section id="work" class="section work" aria-labelledby="work-title">
    <div class="wrap">
      <SectionLabel index="01" label="Selected work" :meta="`${pad(projects.length)} projects`" />
      <h2 id="work-title" class="section-title reveal">Things I've <em>built</em>.</h2>

      <ol class="work-list" @mouseenter="startFollow" @mouseleave="stopFollow" @mousemove="onMove">
        <li
          v-for="(project, i) in projects"
          :key="project.title"
          class="work-item reveal"
          :data-open="openIndex === i || undefined"
          :style="{ '--delay': `${(i % 4) * 70}ms` }"
        >
          <h3 class="work-item__heading">
            <button
              :id="`project-btn-${i}`"
              type="button"
              class="work-row"
              :aria-expanded="openIndex === i"
              :aria-controls="`project-${i}`"
              @click="toggle(i)"
              @mouseenter="hovered = i"
            >
              <span class="mono work-row__idx">{{ pad(i + 1) }}</span>
              <span class="work-row__title">{{ project.title }}</span>
              <span class="mono work-row__tags">{{ keyStack(project) }}</span>
              <span class="work-row__icon" aria-hidden="true" />
            </button>
          </h3>

          <div
            :id="`project-${i}`"
            role="region"
            :aria-labelledby="`project-btn-${i}`"
            class="work-detail"
            :inert="openIndex !== i || undefined"
          >
            <div class="work-detail__clip">
              <div class="work-detail__body">
                <figure class="work-detail__figure">
                  <nuxt-img
                    :src="project.image"
                    :alt="`Screenshot of ${project.title}`"
                    format="webp"
                    sizes="100vw md:60vw lg:820px"
                    loading="lazy"
                  />
                </figure>
                <div class="work-detail__info">
                  <p class="work-detail__desc">{{ project.description }}</p>
                  <ul class="work-detail__stack" aria-label="Tech stack">
                    <li v-for="stack in project.stacks" :key="stack" class="mono">{{ stack }}</li>
                  </ul>
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener"
                    class="work-detail__link link-underline"
                  >
                    Visit site <span aria-hidden="true">↗</span>
                    <span class="sr-only">(opens in new tab)</span>
                  </a>
                  <p v-else class="mono work-detail__private">Not publicly available</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div
      v-if="canHover"
      ref="previewEl"
      class="work-preview"
      :class="{ 'is-visible': previewVisible }"
      aria-hidden="true"
    >
      <nuxt-img
        v-for="(project, i) in projects"
        :key="project.title"
        :src="project.image"
        alt=""
        format="webp"
        width="420"
        :class="{ 'is-current': hovered === i }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects, pad, type Project } from '~/data/portfolio'

const openIndex = ref<number | null>(null)
const hovered = ref<number | null>(null)
const following = ref(false)
const canHover = ref(false)
const previewEl = ref<HTMLElement>()

const previewVisible = computed(
  () => following.value && hovered.value !== null && hovered.value !== openIndex.value,
)

const keyStack = (p: Project) =>
  p.stacks.filter((s) => !['Frontend', 'HTML', 'API Integration'].includes(s)).slice(0, 3).join(' / ')

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}

// Cursor-following preview, eased with a lerp
const target = { x: 0, y: 0 }
const pos = { x: 0, y: 0 }
let raf = 0

const loop = () => {
  pos.x += (target.x - pos.x) * 0.14
  pos.y += (target.y - pos.y) * 0.14
  if (previewEl.value) {
    previewEl.value.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
  }
  raf = requestAnimationFrame(loop)
}

const onMove = (e: MouseEvent) => {
  target.x = e.clientX
  target.y = e.clientY
}

const startFollow = (e: MouseEvent) => {
  if (!canHover.value) return
  onMove(e)
  pos.x = target.x
  pos.y = target.y
  following.value = true
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(loop)
}

const stopFollow = () => {
  following.value = false
  hovered.value = null
  cancelAnimationFrame(raf)
}

onMounted(() => {
  canHover.value =
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

<style lang="scss">
.work-list {
  list-style: none;
  border-top: 1px solid var(--rule-strong);
}

.work-item {
  border-bottom: 1px solid var(--rule-strong);

  &__heading {
    font: inherit;
  }
}

.work-row {
  position: relative;
  isolation: isolate;
  width: 100%;
  display: grid;
  grid-template-columns: 2.5rem 1fr 1.5rem;
  align-items: baseline;
  gap: 0.5rem 1rem;
  padding-block: clamp(1.25rem, 2.6vw, 2rem);
  text-align: left;
  color: var(--paper);
  background: none;
  border: 0;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ink-2);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.5s var(--ease-out);
    z-index: -1;
  }

  &__idx {
    color: var(--muted);
    transition: color 0.3s;
  }

  &__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.6rem, 4.4vw, 3.6rem);
    line-height: 1.05;
    letter-spacing: -0.025em;
    transition: transform 0.6s var(--ease-out), color 0.3s;
  }

  &__tags {
    grid-column: 2;
    color: var(--muted);
  }

  &__icon {
    position: relative;
    align-self: center;
    width: 1.1rem;
    height: 1.1rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1.5px;
      background: currentColor;
      transition: transform 0.5s var(--ease-out);
    }

    &::after {
      transform: rotate(90deg);
    }
  }

  &:hover,
  &:focus-visible {
    &::before {
      transform: scaleY(1);
    }

    .work-row__title {
      transform: translateX(0.75rem);
      color: var(--accent);
      font-style: italic;
    }

    .work-row__idx {
      color: var(--accent);
    }
  }

  &[aria-expanded='true'] {
    .work-row__icon::after {
      transform: rotate(0deg);
    }

    .work-row__title {
      font-style: italic;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: 4rem 1fr minmax(12rem, auto) 2rem;

    &__tags {
      grid-column: 3;
      text-align: right;
    }
  }
}

.work-detail {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.7s var(--ease-in-out);

  .work-item[data-open] & {
    grid-template-rows: 1fr;
  }

  &__clip {
    overflow: hidden;
  }

  &__body {
    display: grid;
    gap: clamp(1.5rem, 3vw, 3rem);
    padding-bottom: clamp(1.5rem, 3vw, 2.5rem);

    @media (min-width: 900px) {
      grid-template-columns: 1.6fr 1fr;
      padding-left: 5rem;
    }
  }

  &__figure {
    overflow: hidden;
    background: var(--ink-2);
    border: 1px solid var(--rule);

    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      object-position: top;
      transform: scale(1.06);
      transition: transform 1.2s var(--ease-out);

      .work-item[data-open] & {
        transform: none;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__desc {
    max-width: 46ch;
    color: var(--muted);
  }

  &__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;

    li {
      padding: 0.35rem 0.65rem;
      border: 1px solid var(--rule-strong);
      border-radius: 999px;
      font-size: 0.65rem;
      color: var(--paper);
    }
  }

  &__link {
    align-self: flex-start;
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-style: italic;
  }

  &__private {
    color: var(--muted);
  }
}

.work-preview {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 340px;
  aspect-ratio: 16 / 10;
  margin: -110px 0 0 32px;
  pointer-events: none;
  overflow: hidden;
  opacity: 0;
  clip-path: inset(50% 50% 50% 50%);
  transition: opacity 0.3s, clip-path 0.6s var(--ease-out);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8);

  &.is-visible {
    opacity: 1;
    clip-path: inset(0);
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.35s, transform 0.8s var(--ease-out);

    &.is-current {
      opacity: 1;
      transform: none;
    }
  }
}
</style>
