<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="wrap">
      <SectionLabel index="04" label="Contact" meta="Say hello" />

      <h2 id="contact-title" class="contact__title reveal">
        Let's <em>talk</em><span class="contact__dot">.</span>
      </h2>
      <p class="contact__intro reveal">
        Have a project in mind, or just want to say hi? My inbox is open.
      </p>

      <div class="contact__email reveal">
        <a :href="`mailto:${contact.email}`" class="contact__email-link link-underline">{{ contact.email }}</a>
        <button type="button" class="contact__copy mono" @click="copyEmail">
          {{ copied ? 'Copied ✓' : 'Copy' }}
        </button>
      </div>

      <ul class="contact__socials">
        <li v-for="(social, i) in contact.socials" :key="social.title" class="reveal" :style="{ '--delay': `${i * 80}ms` }">
          <a :href="social.href" target="_blank" rel="noopener" class="social">
            <span class="mono social__idx">{{ pad(i + 1) }}</span>
            <span class="social__name">{{ social.title }}</span>
            <span class="mono social__handle">@{{ social.handle }}</span>
            <span class="social__arrow" aria-hidden="true">↗</span>
            <span class="sr-only">(opens in new tab)</span>
          </a>
        </li>
      </ul>
    </div>

    <footer class="site-footer wrap">
      <p class="mono">© {{ year }} Angga Nurhiman</p>
      <p class="mono">Built with Nuxt &amp; Vuetify</p>
      <a href="#home" class="mono site-footer__top" @click.prevent="scrollTo('#home')">Back to top ↑</a>
    </footer>

    <v-snackbar v-model="toast.show" :timeout="2400" location="bottom" class="toast">
      {{ toast.text }}
    </v-snackbar>
  </section>
</template>

<script setup lang="ts">
import { contact, pad } from '~/data/portfolio'

const scrollTo = useScrollTo()
const year = new Date().getFullYear()
const copied = ref(false)
const toast = reactive({ show: false, text: '' })

let resetTimer: ReturnType<typeof setTimeout> | undefined

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contact.email)
    copied.value = true
    toast.text = 'Email address copied to clipboard'
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 2400)
  } catch {
    toast.text = "Couldn't copy — please select the address manually"
  }
  toast.show = true
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<style lang="scss">
.contact {
  padding-bottom: 0;

  &__title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(4.5rem, 17vw, 16rem);
    line-height: 0.85;
    letter-spacing: -0.05em;
    font-variation-settings: 'opsz' 144;

    em {
      font-weight: 400;
    }
  }

  &__dot {
    color: var(--accent);
  }

  &__intro {
    margin-top: 2rem;
    max-width: 36ch;
    font-size: 1.15rem;
    color: var(--muted);
  }

  &__email {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
    margin-top: clamp(2.5rem, 5vw, 4rem);
  }

  &__email-link {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.5rem, 5.2vw, 4.25rem);
    line-height: 1.15;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
    background-size: 100% 2px;

    &:hover,
    &:focus-visible {
      background-size: 0 2px;
    }
  }

  &__copy {
    min-height: 44px;
    padding: 0.6rem 1.1rem;
    color: var(--paper);
    background: none;
    border: 1px solid var(--rule-strong);
    border-radius: 999px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;

    &:hover {
      background: var(--paper);
      color: var(--ink);
      border-color: var(--paper);
    }
  }

  &__socials {
    list-style: none;
    margin-top: clamp(3rem, 7vw, 6rem);
    border-top: 1px solid var(--rule-strong);
  }
}

.social {
  display: grid;
  grid-template-columns: 2.5rem 1fr auto;
  align-items: baseline;
  gap: 1rem;
  padding-block: 1.25rem;
  border-bottom: 1px solid var(--rule-strong);
  text-decoration: none;
  color: var(--paper);

  &__idx {
    color: var(--muted);
  }

  &__name {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.6rem, 3.5vw, 2.75rem);
    line-height: 1.1;
    transition: transform 0.5s var(--ease-out), color 0.3s;
  }

  &__handle {
    display: none;
    color: var(--muted);
  }

  &__arrow {
    font-size: 1.5rem;
    transition: transform 0.5s var(--ease-out), color 0.3s;
  }

  &:hover,
  &:focus-visible {
    .social__name {
      transform: translateX(0.75rem);
      color: var(--accent);
      font-style: italic;
    }

    .social__arrow {
      transform: rotate(45deg);
      color: var(--accent);
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 4rem 1fr auto 2rem;

    &__handle {
      display: block;
    }
  }
}

.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 2rem;
  padding-block: clamp(3rem, 6vw, 5rem) 2rem;
  color: var(--muted);

  &__top {
    color: var(--paper);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }
}
</style>
