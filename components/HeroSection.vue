<template>
  <section id="home" class="hero" aria-labelledby="hero-title">
    <div class="hero__grid wrap" aria-hidden="true"><span v-for="n in 12" :key="n" /></div>

    <div class="wrap hero__inner">
      <p class="mono hero__kicker">
        <span class="line-mask"><span class="rise" style="--d: 0.05s">(00) — Portfolio / Front-end developer</span></span>
      </p>

      <h1 id="hero-title" class="hero__title">
        <span class="line-mask"><span class="rise hero__hello" style="--d: 0.15s">Hello, I'm</span></span>
        <span class="line-mask"><span class="rise" style="--d: 0.25s">Angga</span></span>
        <span class="line-mask hero__indent"><span class="rise" style="--d: 0.38s"><em>Nurhiman</em><span class="hero__dot">.</span></span></span>
      </h1>

      <div class="hero__bottom">
        <p class="hero__lede fade" style="--d: 0.7s">
          Front-end web developer building considered, fast interfaces — mostly with
          <strong>Vue.js</strong> &amp; <strong>Nuxt</strong>.
        </p>

        <dl class="hero__meta mono fade" style="--d: 0.8s">
          <div>
            <dt>Based</dt>
            <dd>Bogor, ID</dd>
          </div>
          <div>
            <dt>Local time</dt>
            <dd><time>{{ localTime || '--:--' }}</time> WIB</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Vue · Nuxt · UI</dd>
          </div>
        </dl>

        <a href="#contact" class="hero__cta fade" style="--d: 0.9s" @click.prevent="scrollTo('#contact')">
          <span>Let's talk</span>
          <span class="hero__cta-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="hero__stamp fade" style="--d: 1s" aria-hidden="true">
        <svg viewBox="0 0 200 200" class="hero__stamp-ring">
          <defs>
            <path id="stamp-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text>
            <textPath href="#stamp-circle" textLength="486" lengthAdjust="spacing">Front-end developer • Based in Bogor • Vue &amp; Nuxt •</textPath>
          </text>
        </svg>
        <nuxt-img src="/images/logo.png" alt="" width="64" height="62" format="webp" class="hero__stamp-logo" />
      </div>

      <a href="#work" class="hero__scroll mono fade" style="--d: 1.1s" @click.prevent="scrollTo('#work')">
        <span>Scroll</span>
        <span class="hero__scroll-line" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = useScrollTo()
const localTime = ref('')

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jakarta',
  })
  const tick = () => (localTime.value = fmt.format(new Date()))
  tick()
  timer = setInterval(tick, 30_000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<style lang="scss">
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  overflow: hidden;

  &__grid {
    position: absolute;
    inset: 0;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    pointer-events: none;
    mask-image: linear-gradient(to bottom, #000 0%, transparent 85%);

    span {
      border-left: 1px solid var(--rule);
      opacity: 0.55;

      &:nth-child(n + 5) {
        display: none;
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(12, 1fr);

      span:nth-child(n + 5) {
        display: block;
      }
    }
  }

  &__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: calc(var(--header-h) + 3rem);
    padding-bottom: clamp(2rem, 5vw, 3.5rem);
  }

  &__kicker {
    color: var(--muted);
    margin-bottom: clamp(1rem, 3vw, 2rem);
  }

  &__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(4.25rem, 15vw, 14rem);
    line-height: 0.88;
    letter-spacing: -0.045em;
    font-variation-settings: 'opsz' 144;

    em {
      font-weight: 400;
      letter-spacing: -0.035em;
    }
  }

  &__hello {
    font-size: 0.32em;
    font-style: italic;
    letter-spacing: -0.01em;
    color: var(--muted);
    padding-bottom: 0.25em;
  }

  &__indent {
    padding-left: 0.6em;

    @media (min-width: 1100px) {
      padding-left: 1.4em;
    }
  }

  &__dot {
    color: var(--accent);
  }

  &__bottom {
    display: grid;
    gap: 2rem;
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);

    @media (min-width: 768px) {
      grid-template-columns: 1.3fr 1fr auto;
      align-items: end;
    }
  }

  &__lede {
    max-width: 34ch;
    font-size: clamp(1.05rem, 1.5vw, 1.3rem);
    line-height: 1.5;
    color: var(--muted);

    strong {
      color: var(--paper);
      font-weight: 500;
    }
  }

  &__meta {
    display: grid;
    gap: 0.5rem;

    div {
      display: flex;
      gap: 1rem;
    }

    dt {
      width: 7.5rem;
      color: var(--muted);
    }

    dd {
      color: var(--paper);
    }
  }

  &__cta {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-style: italic;
    color: var(--ink);
    background: var(--paper);
    text-decoration: none;
    border-radius: 999px;
    transition: background-color 0.4s var(--ease-out), color 0.4s;

    &:hover,
    &:focus-visible {
      background: var(--accent);
      color: var(--paper);
    }

    &:hover .hero__cta-arrow {
      transform: rotate(45deg);
    }
  }

  &__cta-arrow {
    display: inline-block;
    font-style: normal;
    transition: transform 0.5s var(--ease-out);
  }

  &__stamp {
    // Mobile: sits in flow at the top so the tall hero doesn't open with a void
    order: -1;
    align-self: flex-end;
    display: grid;
    place-items: center;
    width: clamp(112px, 30vw, 150px);
    aspect-ratio: 1;
    margin-bottom: auto;

    @media (min-width: 900px) {
      position: absolute;
      top: calc(var(--header-h) + 2.5rem);
      right: var(--gutter);
      width: clamp(130px, 13vw, 180px);
      margin-bottom: 0;
    }

    > * {
      grid-area: 1 / 1;
    }
  }

  &__stamp-ring {
    width: 100%;
    height: 100%;
    animation: spin 24s linear infinite;

    text {
      font-family: var(--font-mono);
      font-size: 12px;
      text-transform: uppercase;
      fill: var(--muted);
    }
  }

  &__stamp-logo {
    width: 30%;
    height: auto;
  }

  &__scroll {
    position: absolute;
    right: var(--gutter);
    bottom: clamp(2rem, 5vw, 3.5rem);
    display: none;
    align-items: center;
    gap: 0.75rem;
    color: var(--muted);
    text-decoration: none;
    writing-mode: vertical-rl;

    @media (min-width: 1100px) {
      display: inline-flex;
    }
  }

  &__scroll-line {
    position: relative;
    width: 1px;
    height: 56px;
    background: var(--rule);
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent);
      animation: drip 2.2s var(--ease-in-out) infinite;
    }
  }
}

@media (min-width: 1100px) {
  .hero__bottom {
    margin-right: 4rem;
  }
}

// Load choreography
.line-mask {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
  padding-right: 0.1em;
}

.rise {
  display: inline-block;
  animation: rise 1.2s var(--ease-out) both;
  animation-delay: var(--d, 0s);
}

.fade {
  animation: fade-up 1s var(--ease-out) both;
  animation-delay: var(--d, 0s);
}

@keyframes rise {
  from { transform: translateY(110%) rotate(2deg); }
  to { transform: none; }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes drip {
  0% { transform: translateY(-100%); }
  60%, 100% { transform: translateY(100%); }
}
</style>
