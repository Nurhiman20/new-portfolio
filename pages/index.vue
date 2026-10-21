<template>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <WorkList />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
const description =
  "I'm a front-end web developer living in Bogor, Indonesia. As a front-end web developer, I have experience using Vue.js. I like it when I can overcome problems with that technology, and also I'm interested in learning new things."

useHead({
  title: 'Angga Nurhiman | Portfolio',
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: 'Angga Nurhiman — Front-end Web Developer' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/images/logo.png' },
  ],
})

useReveal()
</script>
