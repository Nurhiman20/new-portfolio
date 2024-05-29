<template>
  <v-main>
    <v-container class="h-100">
      <section id="home">
        <v-row>
          <v-col cols="12" md="6" lg="6" class="py-0">
            <div class="d-flex h-100">
              <div class="vertical-center">
                <div class="border-bottom-title pb-3">
                  <p class="text-large">Hello,</p>
                  <p class="text-large">I'm Angga</p>
                </div>
                <div>
                  <p class="text-grey">Front-end Web Developer</p>
                  <v-btn
                    outlined
                    large
                    color="#578CE0"
                    @click="$vuetify.goTo('#contact', options)"
                    >Contact Me</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="py-0 hidden-sm-and-down">
            <div class="d-flex h-100">
              <div class="vertical-center mx-auto">
                <img src="@/assets/images/logo.png" alt="Logo" />
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-main>
</template>

<script setup>
useHead({
  title: "Angga Nurhiman | Portfolio",
  meta: [
    {
      name: "description",
      content:
        "I'm a front-end web developer living in Bandung, Indonesia. As a front-end web developer, I have experience using Vue.js. I like it when I can overcome problems with that technology, and also I'm interested in learning new things.",
    },
  ],
});
</script>
