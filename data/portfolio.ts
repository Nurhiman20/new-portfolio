export interface Project {
  title: string
  image: string
  description: string
  link?: string
  stacks: string[]
}

export interface Skill {
  // Without a logo the skill renders its initials instead
  src?: string
  text: string
}

export const navItems = [
  { title: 'Work', to: '#work' },
  { title: 'About', to: '#about-me' },
  { title: 'Skills', to: '#skills' },
  { title: 'Contact', to: '#contact' },
]

export const contact = {
  email: 'nurhimanangga@gmail.com',
  socials: [
    { title: 'GitHub', handle: 'Nurhiman20', href: 'https://github.com/Nurhiman20' },
    { title: 'LinkedIn', handle: 'nurhiman-a', href: 'https://www.linkedin.com/in/nurhiman-a/' },
    { title: 'GitLab', handle: 'nurhiman_a', href: 'https://gitlab.com/nurhiman_a' },
  ],
}

export const projects: Project[] = [
  {
    title: 'Suzuki Aftersales — Landing Page & Admin Dashboard',
    image: '/images/suzuki-aftersales.png',
    description:
      "Aftersales portal for Suzuki Indonesia vehicle owners and its admin dashboard. The landing page helps owners find owner's manuals, browse vehicle categories, quick-access services, service locations, and news & updates. The admin dashboard manages master data (vehicles, dealers, distributors, users), content (home banners, news, FAQ & help), and documents (manuals and bulletins), with multi-language support and end-to-end tests.",
    link: 'https://aftersales.suzuki.co.id/',
    stacks: [
      'Frontend',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Pinia',
      'Vue Router',
      'Vue I18n',
      'ApexCharts',
      'Playwright',
      'HTML',
      'JavaScript',
      'Axios',
      'API Integration',
    ],
  },
  {
    title: 'Beach Padel Club — Landing Page & Admin Dashboard',
    image: '/images/beachpadelclub.png',
    description:
      "Marketing landing page and admin CMS for Beach Padel Club, Southeast Asia's largest padel court by the sea. The landing page promotes the court-booking mobile app with FAQ, testimonials, a contact form, and email verification / password reset flows. The admin dashboard manages locations, courts, coaches, bookings, users, and promotions, with role-based access, analytics charts, a rich-text editor, and Firebase push notifications.",
    link: 'https://www.beachpadelclub.id/',
    stacks: [
      'Frontend',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Pinia',
      'Vue Router',
      'Chart.js',
      'Firebase',
      'HTML',
      'JavaScript',
      'API Integration',
    ],
  },
  {
    title: 'Interactive Floor Plan for 10th World Water Forum',
    image: '/images/wwf.png',
    description:
      'Interactive floor plan application designed to facilitate users in navigating and understanding the layout of a specific area or building. This application allows users to view maps with interactive features such as zoom, panning, and clickable location markers for additional information.',
    link: 'https://10thwwf.woodezig.id/',
    stacks: ['Frontend', 'Vue.js', 'Nuxt', 'Vuetify', 'Three.js', 'HTML', 'SASS (SCSS)', 'API Integration'],
  },
  {
    title: 'Menara Ultra Landing Page',
    image: '/images/menara-ultra.png',
    description: 'Landing page for PT Menara Ultra Indonesia',
    link: 'https://www.menaraultra.net/',
    stacks: ['Frontend', 'Vue.js', 'Nuxt', 'GSAP', 'Vue Router', 'HTML', 'SASS (SCSS)'],
  },
  {
    title: 'InterconnectDATA',
    image: '/images/interconnectdata.png',
    description:
      'InterconnectDATA is a big data analytic platform to provide millions of global business professionals with comprehensive data on private and public markets, assisting them to discover and create opportunities accurately.',
    link: 'https://apps.interconnectdata.com/',
    stacks: ['Frontend', 'Vue.js', 'Nuxt', 'Vuetify', 'Vue Router', 'Vuex', 'HTML', 'SASS (SCSS)', 'Axios', 'API Integration'],
  },
  {
    title: 'MakasiPOS Dashboard',
    image: '/images/makasipos.png',
    description:
      'Makasi is an application used by various retail and non-retail businesses to facilitate buying and selling transactions and business operational processes.',
    link: 'https://app.makasipos.com/',
    stacks: ['Frontend', 'Vue.js', 'Vuesax', 'Vue Router', 'Pinia', 'HTML', 'SASS (SCSS)', 'Axios', 'API Integration'],
  },
  {
    title: 'MakasiPOS Mobile Apps',
    image: '/images/makasipos-mobile.png',
    description:
      'Flutter point of sales app for Makasi merchants. I set up the project foundation (theming, GetX state management and routing, reusable widgets) and built registration with phone/email OTP, login and forgot-PIN flows; the order flow from order details and manual transactions to cash/digital payment, receipts, and pay-later (kasbon) transactions; online order handling with status updates and preparation countdown; cash recap for opening/closing the cashier; discount, voucher, customer, and employee management; outlet switching; and merchant personal data, bank account, and disbursement.',
    stacks: ['Mobile', 'Flutter', 'Dart', 'GetX', 'Hive', 'API Integration'],
  },
  {
    title: 'TCI Landing Page',
    image: '/images/tci.png',
    description: 'Landing page for PT Teknologi Cakra Internasional',
    link: 'https://teknologicakrainternasional.com/',
    stacks: ['Frontend', 'Vue.js', 'Bootstrap', 'GSAP', 'HTML', 'SASS (SCSS)'],
  },
  {
    title: 'Eatmore ERP',
    image: '/images/Eatmore2.png',
    description:
      'This website is used to manage and integrate operational activities in a restaurant that is already an Eatmore merchant.',
    link: 'https://app.makasipos.com/',
    stacks: ['Frontend', 'Vue.js', 'Vuetify', 'Vue Router', 'Vuex', 'HTML', 'SASS (SCSS)', 'Axios', 'API Integration'],
  },
  {
    title: 'MyTreats',
    image: '/images/MyTreats2.png',
    description:
      'E-voucher and attractive offers marketplace that are connected with various merchants in Malaysia.',
    stacks: ['Frontend', 'Vue.js', 'Vuesax', 'Vue Router', 'Vuex', 'HTML', 'SASS (SCSS)', 'Axios', 'API Integration'],
  },
  {
    title: 'Tready',
    image: '/images/Tready.png',
    description: 'Landing page for trading app.',
    stacks: ['Frontend', 'Bootstrap', 'HTML', 'SASS (SCSS)'],
  },
]

export const mostUsedSkills: Skill[] = [
  { src: '/images/vue.svg', text: 'Vue.js' },
  { src: '/images/nuxt.png', text: 'NuxtJs' },
  { src: '/images/vuetify.svg', text: 'Vuetify' },
  { src: '/images/vuex.png', text: 'Vuex' },
  { src: '/images/pinia.svg', text: 'Pinia' },
  { src: '/images/tailwind.png', text: 'Tailwind' },
  { src: '/images/bootstrap.svg', text: 'Bootstrap' },
  { src: '/images/html.svg', text: 'HTML' },
  { src: '/images/css.svg', text: 'CSS' },
  { src: '/images/javascript.svg', text: 'JavaScript' },
  { src: '/images/typescript.svg', text: 'TypeScript' },
  { src: '/images/sass.svg', text: 'Sass (SCSS)' },
]

export const knowBasics: Skill[] = [
  { src: '/images/react.png', text: 'React' },
  { src: '/images/nodejs.svg', text: 'Node.js' },
  { src: '/images/graphql.png', text: 'GraphQL' },
  { src: '/images/firebase.svg', text: 'Firebase' },
]

export const mobileSkills: Skill[] = [
  { src: '/images/dart.svg', text: 'Dart' },
  { src: '/images/flutter.svg', text: 'Flutter' },
  { text: 'Provider' },
  { text: 'GetX' },
]

export const pad = (n: number) => String(n).padStart(2, '0')
