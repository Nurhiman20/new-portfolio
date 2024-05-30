<template>
  <v-navigation-drawer
    v-model="drawer"
    rail
    color="#181818"
    dark
    permanent
    expand-on-hover
  >
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
                  <v-btn outlined large color="primary" @click="scrollTo('#contact')"
                    >Contact Me</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="py-0 hidden-sm-and-down">
            <div class="d-flex h-100">
              <div class="vertical-center mx-auto logo">
                <nuxt-img src="/images/logo.png" format="webp" alt="Logo" />
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
                class="d-flex flex-column justify-center align-center"
              >
                <v-row>
                  <v-col cols="12" md="8" lg="8" class="px-12">
                    <div class="d-flex flex-column w-100 project-image">
                      <nuxt-img
                        :src="itemProject.image"
                        alt="preview"
                        class="project-image w-100"
                      />
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" lg="4" class="px-4">
                    <h1 class="project-title">{{ itemProject.title }}</h1>
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
                  <v-img src="@/assets/images/foto.png" alt="Angga Nurhiman" />
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
                          <nuxt-img
                            :src="mostUsed.src"
                            :alt="mostUsed.text"
                            format="webp"
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
                          <nuxt-img
                            :src="knowBasic.src"
                            :alt="knowBasic.text"
                            format="webp"
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
    title: "Interactive Floor Plan for 10th World Water Forum",
    image: "/images/wwf.png",
    description:
      "Interactive floor plan application designed to facilitate users in navigating and understanding the layout of a specific area or building. This application allows users to view maps with interactive features such as zoom, panning, and clickable location markers for additional information.",
    link: "https://10thwwf.woodezig.id/",
    stacks: [
      "Frontend",
      "Vue.js",
      "Nuxt",
      "Vuetify",
      "Three.js",
      "HTML",
      "SASS (SCSS)",
      "API Integration",
    ],
  },
  {
    title: "Menara Ultra Landing Page",
    image: "/images/menara-ultra.png",
    description: "Landing page for PT Menara Ultra Indonesia",
    link: "https://www.menaraultra.net/",
    stacks: ["Frontend", "Vue.js", "Nuxt", "GSAP", "Vue Router", "HTML", "SASS (SCSS)"],
  },
  {
    title: "InterconnectDATA",
    image: "/images/interconnectdata.png",
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
    image: "/images/makasipos.png",
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
    image: "/images/tci.png",
    description: "Landing page for PT Teknologi Cakra Internasional",
    link: "https://teknologicakrainternasional.com/",
    stacks: ["Frontend", "Vue.js", "Bootstrap", "GSAP", "HTML", "SASS (SCSS)"],
  },
  {
    title: "Eatmore ERP",
    image: "/images/Eatmore2.png",
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
    image: "/images/MyTreats2.png",
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
    image: "/images/Tready.png",
    description: "Landing page for trading app.",
    stacks: ["Frontend", "Bootstrap", "HTML", "SASS (SCSS)"],
  },
];
const mostUsedSkills = [
  {
    src: "/images/vue.svg",
    text: "Vue.js",
  },
  {
    src: "/images/nuxt.png",
    text: "NuxtJs",
  },
  {
    src: "/images/vuetify.svg",
    text: "Vuetify",
  },
  {
    src: "/images/vuex.png",
    text: "vuex",
  },
  {
    src: "/images/pinia.svg",
    text: "Pinia",
  },
  {
    src: "/images/bootstrap.svg",
    text: "Bootstrap",
  },
  {
    src: "/images/html.svg",
    text: "HTML",
  },
  {
    src: "/images/css.svg",
    text: "CSS",
  },
  {
    src: "/images/javascript.svg",
    text: "Javascript",
  },
  {
    src: "/images/typescript.svg",
    text: "TypeScript",
  },
  {
    src: "/images/sass.svg",
    text: "Sass (Scss)",
  },
];
const knowBasics = [
  {
    src: "/images/react.png",
    text: "React",
  },
  {
    src: "/images/nodejs.svg",
    text: "Node.js",
  },
  {
    src: "/images/tailwind.png",
    text: "Tailwind",
  },
  {
    src: "/images/graphql.png",
    text: "GraphQL",
  },
  {
    src: "/images/firebase.svg",
    text: "Firebase",
  },
];
</script>

<style lang="scss">
#home {
  .logo {
    width: 80%;
    img {
      width: 80%;
    }
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

.project-title {
  line-height: 40px;
}

.project-image {
  @media only screen and (max-width: 600px) {
    height: 400px img {
      object-fit: contain;
      height: 100%;
    }
  }
}
</style>
