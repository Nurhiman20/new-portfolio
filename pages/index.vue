<template>
  <v-navigation-drawer v-model="drawer" rail color="#181818" dark expand-on-hover>
    <v-list-item
      class="px-2"
      prepend-avatar="@/assets/images/Ava.png"
      title="Angga Nurhiman"
      style="background-color: #070707"
    ></v-list-item>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        class="mt-6"
        link
        @click="scrollTo(item.to)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <section id="home">
      <v-container class="h-100">
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
                    color="primary"
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
      </v-container>
    </section>
    <section id="work" class="mt-n16">
      <v-container class="d-flex flex-column">
        <h1 class="text-large text-primary mb-4 mx-auto">What I've done</h1>
        <div class="d-flex flex-column justify-center mt-6">
          <v-carousel cycle hide-delimiter-background :show-arrows="false">
            <v-carousel-item
              v-for="(itemProject, indexProject) in projects"
              :key="indexProject"
            >
              <v-sheet
                color="#1D1D1D"
                height="100%"
                class="d-flex flex-column justify-center align-center"
              >
                <v-row>
                  <v-col cols="12" md="8" lg="8" class="px-12">
                    <div class="fill-height d-flex">
                      <v-img
                        :aspect-ratio="1366 / 625"
                        width="60"
                        :src="itemProject.image"
                      ></v-img>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" lg="4" class="px-4">
                    <h1>{{ itemProject.title }}</h1>
                    <p class="line-height-small">
                      {{ itemProject.description }}
                    </p>
                    <a v-if="itemProject.link" :href="itemProject.link" target="_blank">{{
                      itemProject.link
                    }}</a>
                  </v-col>
                  <v-col cols="12" md="12" lg="12" class="py-0 px-4" align="center">
                    <v-chip
                      class="mx-2"
                      color="#578CE0"
                      label
                      v-for="(stack, i) in itemProject.stacks"
                      :key="i"
                    >
                      {{ stack }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-container>
    </section>
    <section id="about-me">
      <v-container class="h-100 d-flex">
        <v-row>
          <v-col cols="12" md="6" lg="6" class="py-0 vertical-center">
            <div class="d-flex pa-4">
              <div class="mx-auto mb-6">
                <v-avatar size="30vh">
                  <img src="@/assets/images/foto.png" alt="Angga Nurhiman" />
                </v-avatar>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="py-0 vertical-center">
            <div class="d-flex flex-column">
              <div>
                <p class="text-large text-primary">About Me</p>
              </div>
              <div class="mt-3">
                <p class="line-height-small">
                  My name is Angga Nurhiman. I'm a front-end web developer living in
                  Bogor, Indonesia. As a front-end web developer, I have experience using
                  Vue.js. I like it when I can overcome problems with that technology, and
                  also I'm interested in learning new things.
                </p>
                <p class="line-height-small mt-2">
                  Besides working on the code, I also like to play football or futsal.
                  This activity keeps my body fit and makes my mind more relaxed.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="skills">
      <v-container class="d-flex h-100">
        <div class="vertical-center w-full">
          <p class="text-large text-primary">My Skills</p>
          <v-row class="mt-3">
            <v-col cols="12" md="7" lg="7" class="py-0 px-4">
              <div class="d-flex flex-column">
                <div class="mx-auto">
                  <h1>Most Used Tools</h1>
                </div>
                <div class="d-flex flex-row py-3">
                  <v-row>
                    <v-col
                      cols="3"
                      md="3"
                      lg="3"
                      class="py-0"
                      v-for="(mostUsed, index) in mostUsedSkills"
                      :key="index"
                    >
                      <div class="d-flex flex-column">
                        <v-avatar tile color="white" size="10vw" class="mx-auto">
                          <img
                            :src="mostUsed.src"
                            :alt="mostUsed.text"
                            style="max-height: 70%; max-width: 80%"
                          />
                        </v-avatar>
                        <p class="mx-auto skill-text">{{ mostUsed.text }}</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" lg="1" class="py-0"></v-col>
            <v-col cols="12" md="4" lg="4" class="py-0">
              <div class="d-flex flex-column">
                <div class="mx-auto">
                  <h1>Know The Basics</h1>
                </div>
                <div class="d-flex flex-row py-3">
                  <v-row>
                    <v-col
                      cols="3"
                      md="6"
                      lg="6"
                      class="py-0"
                      v-for="(knowBasic, index) in knowBasics"
                      :key="index"
                    >
                      <div class="d-flex flex-column">
                        <v-avatar tile color="white" size="10vw" class="mx-auto">
                          <img
                            :src="knowBasic.src"
                            :alt="knowBasic.text"
                            style="max-height: 70%; max-width: 70%"
                          />
                        </v-avatar>
                        <p class="mx-auto skill-text">{{ knowBasic.text }}</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <section id="contact">
      <v-container class="d-flex flex-column h-100 py-12">
        <p class="text-large text-primary mb-4">Let's talk</p>
        <v-row>
          <v-col cols="12" md="12" lg="12">
            <div class="d-flex flex-column justify-center">
              <v-icon color="#8D8D8D" size="120" class="mx-auto"
                >mdi-email-outline</v-icon
              >
              <p class="mx-auto">nurhimanangga@gmail.com</p>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="d-flex flex-column justify-center">
              <a
                href="https://github.com/Nurhiman20"
                target="_blank"
                class="d-flex flex-column mx-auto"
              >
                <v-icon color="#8D8D8D" size="120">mdi-github</v-icon>
                <p class="mx-auto">Github Profile</p>
              </a>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="d-flex flex-column justify-center">
              <a
                href="https://www.linkedin.com/in/nurhiman-a/"
                target="_blank"
                class="d-flex flex-column mx-auto"
              >
                <v-icon color="#8D8D8D" size="120">mdi-linkedin</v-icon>
                <p class="mx-auto">LinkedIn</p>
              </a>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="d-flex flex-column justify-center">
              <a
                href="https://gitlab.com/nurhiman_a"
                target="_blank"
                class="d-flex flex-column mx-auto"
              >
                <v-icon color="#8D8D8D" size="120">mdi-gitlab</v-icon>
                <p class="mx-auto">Gitlab Profile</p>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script setup>
import { useGoTo } from "vuetify";

import icImage from "@/assets/images/interconnectdata.png";
import makasiImage from "@/assets/images/makasipos.png";
import tciImage from "@/assets/images/tci.png";
import eatmoreImage from "@/assets/images/Eatmore2.png";
import mytreatsImage from "@/assets/images/MyTreats2.png";
import treadyImage from "@/assets/images/Tready.png";

import vueLogo from "@/assets/images/vue.svg";
import nuxtLogo from "@/assets/images/nuxt.png";
import vuetifyLogo from "@/assets/images/vuetify.svg";
import vuexLogo from "@/assets/images/vuex.png";
import piniaLogo from "@/assets/images/pinia.svg";
import bootstrapLogo from "@/assets/images/bootstrap.svg";
import htmlLogo from "@/assets/images/html.svg";
import cssLogo from "@/assets/images/css.svg";
import jsLogo from "@/assets/images/javascript.svg";
import tsLogo from "@/assets/images/typescript.svg";
import scssLogo from "@/assets/images/sass.svg";

import reactLogo from "@/assets/images/react.png";
import nodeLogo from "@/assets/images/nodejs.svg";
import tailwindLogo from "@/assets/images/tailwind.png";
import graphqlLogo from "@/assets/images/graphql.png";
import firebaseLogo from "@/assets/images/firebase.svg";

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

const drawer = ref(true);
const items = [
  { title: "Home", icon: "mdi-home-outline", to: "#home" },
  { title: "My Work", icon: "mdi-eye-outline", to: "#work" },
  { title: "About me", icon: "mdi-account-circle-outline", to: "#about-me" },
  { title: "Skills", icon: "mdi-cog-outline", to: "#skills" },
  { title: "Contact", icon: "mdi-email-outline", to: "#contact" },
];
const options = computed(() => {
  return {
    duration: 750,
    offset: 0,
    easing: "easeInOutQuad",
  };
});
const goTo = useGoTo();
const scrollTo = (to) => {
  goTo(to, options.value);
};

const projects = [
  {
    title: "InterconnectDATA",
    image: icImage,
    description:
      "InterconnectDATA is a big data analytic platform to provide millions of global business professionals with comprehensive data on private and public markets, assisting them to discover and create opportunities accurately.",
    link: "https://apps.interconnectdata.com/",
    stacks: [
      "Frontend",
      "Vue.js",
      "Nuxt",
      "Vuetify",
      "Vue Router",
      "Vuex",
      "HTML",
      "SASS (SCSS)",
      "Axios",
      "API Integration",
    ],
  },
  {
    title: "MakasiPOS Dashboard",
    image: makasiImage,
    description:
      "Makasi is an application used by various retail and non-retail businesses to facilitate buying and selling transactions and business operational processes.",
    link: "https://app.makasipos.com/",
    stacks: [
      "Frontend",
      "Vue.js",
      "Vuesax",
      "Vue Router",
      "Pinia",
      "HTML",
      "SASS (SCSS)",
      "Axios",
      "API Integration",
    ],
  },
  {
    title: "TCI Landing Page",
    image: tciImage,
    description: "Landing page for PT Teknologi Cakra Internasional",
    link: "https://teknologicakrainternasional.com/",
    stacks: ["Frontend", "Vue.js", "Bootstrap", "GSAP", "HTML", "SASS (SCSS)"],
  },
  {
    title: "Eatmore ERP",
    image: eatmoreImage,
    description:
      "This website is used to manage and integrate operational activities in a restaurant that is already an Eatmore merchant.",
    link: "https://app.makasipos.com/",
    stacks: [
      "Frontend",
      "Vue.js",
      "Vuetify",
      "Vue Router",
      "Vuex",
      "HTML",
      "SASS (SCSS)",
      "Axios",
      "API Integration",
    ],
  },
  {
    title: "MyTreats",
    image: mytreatsImage,
    description:
      "E-voucher and attractive offers marketplace that are connected with various merchants in Malaysia.",
    stacks: [
      "Frontend",
      "Vue.js",
      "Vuesax",
      "Vue Router",
      "Vuex",
      "HTML",
      "SASS (SCSS)",
      "Axios",
      "API Integration",
    ],
  },
  {
    title: "Tready",
    image: treadyImage,
    description: "Landing page for trading app.",
    stacks: ["Frontend", "Bootstrap", "HTML", "SASS (SCSS)"],
  },
];
const mostUsedSkills = [
  {
    src: vueLogo,
    text: "Vue.js",
  },
  {
    src: nuxtLogo,
    text: "NuxtJs",
  },
  {
    src: vuetifyLogo,
    text: "Vuetify",
  },
  {
    src: vuexLogo,
    text: "vuex",
  },
  {
    src: piniaLogo,
    text: "Pinia",
  },
  {
    src: bootstrapLogo,
    text: "Bootstrap",
  },
  {
    src: htmlLogo,
    text: "HTML",
  },
  {
    src: cssLogo,
    text: "CSS",
  },
  {
    src: jsLogo,
    text: "Javascript",
  },
  {
    src: tsLogo,
    text: "TypeScript",
  },
  {
    src: scssLogo,
    text: "Sass (Scss)",
  },
];
const knowBasics = [
  {
    src: reactLogo,
    text: "React",
  },
  {
    src: nodeLogo,
    text: "Node.js",
  },
  {
    src: tailwindLogo,
    text: "Tailwind",
  },
  {
    src: graphqlLogo,
    text: "GraphQL",
  },
  {
    src: firebaseLogo,
    text: "Firebase",
  },
];
</script>

<style lang="scss">
#home {
  img {
    width: 80%;
  }
}

.v-navigation-drawer--rail:not(.v-navigation-drawer--expand-on-hover)
  .v-list-item
  .v-avatar,
.v-navigation-drawer--rail.v-navigation-drawer--expand-on-hover:not(.v-navigation-drawer--is-hovering)
  .v-list-item
  .v-avatar {
  height: 45px;
  width: 45px;
  margin-left: -3px;
}
</style>
