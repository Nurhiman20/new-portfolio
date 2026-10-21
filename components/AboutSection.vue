<template>
  <section id="about-me" class="section about" aria-labelledby="about-title">
    <div class="wrap">
      <SectionLabel index="02" label="About" meta="Bogor, Indonesia" />

      <div class="about__grid">
        <figure class="about__portrait reveal">
          <div class="about__frame">
            <img src="~/assets/images/foto.png" alt="Portrait of Angga Nurhiman" width="183" height="183" loading="lazy" />
          </div>
          <figcaption class="mono">Fig. 01 — Angga Nurhiman</figcaption>
        </figure>

        <div class="about__text">
          <h2 id="about-title" class="section-title reveal">A little <em>about</em> me.</h2>

          <p class="about__lead reveal">
            My name is Angga Nurhiman. I'm a front-end web developer living in Bogor, Indonesia.
          </p>
          <p class="about__body reveal">
            As a front-end web developer, I have experience using Vue.js. I like it when I can
            overcome problems with that technology, and also I'm interested in learning new things.
          </p>

          <aside class="about__aside reveal" aria-label="Off the keyboard">
            <span class="mono">Off the keyboard</span>
            <p>
              Football &amp; futsal — it keeps my body fit and makes my mind more relaxed.
            </p>
          </aside>

          <dl class="about__facts mono reveal">
            <div><dt>Role</dt><dd>Front-end developer</dd></div>
            <div><dt>Weapon of choice</dt><dd>Vue.js / Nuxt</dd></div>
            <div><dt>Based</dt><dd>Bogor, ID</dd></div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  &__grid {
    display: grid;
    gap: clamp(2.5rem, 6vw, 6rem);

    @media (min-width: 900px) {
      grid-template-columns: minmax(220px, 4fr) 8fr;
      align-items: start;
    }
  }

  &__portrait {
    position: relative;
    width: min(240px, 70%);

    @media (min-width: 900px) {
      position: sticky;
      top: calc(var(--header-h) + 2rem);
      width: min(260px, 100%);
      margin-top: 1rem;
    }

    figcaption {
      margin-top: 1rem;
      color: var(--muted);
    }
  }

  &__frame {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border: 1px solid var(--accent);
      transform: translate(14px, 14px);
      transition: transform 0.6s var(--ease-out);
    }

    img {
      position: relative;
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      object-fit: cover;
      filter: grayscale(1) contrast(1.08);
      transition: filter 0.6s;
    }

    &:hover {
      &::before {
        transform: translate(6px, 6px);
      }

      img {
        filter: none;
      }
    }
  }

  &__lead {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.6rem, 3vw, 2.6rem);
    line-height: 1.2;
    letter-spacing: -0.015em;
    max-width: 24ch;

    &::first-letter {
      float: left;
      font-size: 3.1em;
      line-height: 0.82;
      padding: 0.06em 0.1em 0 0;
      color: var(--accent);
      font-style: italic;
    }
  }

  &__body {
    margin-top: 1.75rem;
    max-width: 52ch;
    color: var(--muted);

    @media (min-width: 900px) {
      margin-left: 20%;
    }
  }

  &__aside {
    margin-top: 2.5rem;
    padding: 1.5rem 0 1.5rem 1.5rem;
    border-left: 2px solid var(--accent);
    max-width: 44ch;

    @media (min-width: 900px) {
      margin-left: 20%;
    }

    .mono {
      color: var(--accent);
    }

    p {
      margin-top: 0.5rem;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.35rem;
      line-height: 1.35;
    }
  }

  &__facts {
    margin-top: 3rem;
    border-top: 1px solid var(--rule);

    div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding-block: 0.9rem;
      border-bottom: 1px solid var(--rule);
    }

    dt {
      color: var(--muted);
    }

    dd {
      text-align: right;
    }
  }
}
</style>
