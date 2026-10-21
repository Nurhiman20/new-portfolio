<template>
  <NuxtLayout>
    <v-app id="app">
      <a href="#main" class="skip-link">Skip to content</a>
      <NuxtPage />
      <div class="grain" aria-hidden="true" />
    </v-app>
  </NuxtLayout>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

body,
html {
  margin: 0;
  padding: 0;
}
</style>
