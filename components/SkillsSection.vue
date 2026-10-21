<template>
  <section id="skills" class="section skills" aria-labelledby="skills-title">
    <div class="wrap">
      <SectionLabel index="03" label="Skills" :meta="`${pad(total)} tools`" />
      <h2 id="skills-title" class="section-title reveal">The <em>toolkit</em>.</h2>

      <div class="skills__grid">
        <div v-for="group in groups" :key="group.title" class="skills__group">
          <h3 class="skills__heading reveal">
            <span>{{ group.title }}</span>
            <span class="mono">{{ group.note }}</span>
          </h3>
          <ul class="skills__list">
            <li
              v-for="(skill, i) in group.items"
              :key="skill.text"
              class="skill reveal"
              :style="{ '--delay': `${(i % 6) * 50}ms` }"
            >
              <span class="mono skill__idx">{{ pad(i + 1) }}</span>
              <span class="skill__logo">
                <!-- IPX can't rasterise SVG to webp, so only convert bitmaps -->
                <nuxt-img
                  v-if="skill.src"
                  :src="skill.src"
                  alt=""
                  width="28"
                  height="28"
                  :format="skill.src.endsWith('.svg') ? undefined : 'webp'"
                  loading="lazy"
                />
                <span v-else class="mono skill__initials" aria-hidden="true">{{ skill.text.slice(0, 2) }}</span>
              </span>
              <span class="skill__name">{{ skill.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mostUsedSkills, knowBasics, mobileSkills, pad } from '~/data/portfolio'

const groups = [
  { title: 'Most used', note: 'Daily drivers', items: mostUsedSkills },
  { title: 'Know the basics', note: 'Comfortable with', items: knowBasics },
  { title: 'Mobile development', note: 'Cross-platform', items: mobileSkills },
]

const total = groups.reduce((sum, g) => sum + g.items.length, 0)
</script>

<style lang="scss">
.skills {
  &__grid {
    display: grid;
    gap: clamp(3rem, 6vw, 6rem);

    @media (min-width: 900px) {
      grid-template-columns: 7fr 5fr;
      align-items: start;
    }
  }

  &__group:first-child {
    @media (min-width: 900px) {
      grid-row: span 2;
    }
  }

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--rule-strong);
    font-family: var(--font-display);
    font-weight: 400;
    font-style: italic;
    font-size: clamp(1.5rem, 2.4vw, 2rem);

    .mono {
      font-style: normal;
      color: var(--muted);
    }
  }

  &__list {
    list-style: none;

    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
}

.skill {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-block: 0.9rem;
  border-bottom: 1px solid var(--rule);

  &__idx {
    width: 1.75rem;
    color: var(--muted);
    transition: color 0.3s;
  }

  &__logo {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background: var(--ink-2);
    border: 1px solid var(--rule);
    transition: background-color 0.4s, border-color 0.4s;

    img {
      width: 22px;
      height: 22px;
      object-fit: contain;
      filter: grayscale(1) brightness(1.6);
      opacity: 0.75;
      transition: filter 0.4s, opacity 0.4s;
    }
  }

  &__initials {
    font-size: 0.7rem;
    letter-spacing: 0.02em;
    text-transform: none;
    color: var(--muted);
    transition: color 0.4s;
  }

  &__name {
    font-size: 1.1rem;
    transition: transform 0.5s var(--ease-out);
  }

  &:hover {
    .skill__logo {
      background: var(--paper);
      border-color: var(--paper);

      img {
        filter: none;
        opacity: 1;
      }

      .skill__initials {
        color: var(--ink);
      }
    }

    .skill__idx {
      color: var(--accent);
    }

    .skill__name {
      transform: translateX(0.35rem);
    }
  }
}
</style>
