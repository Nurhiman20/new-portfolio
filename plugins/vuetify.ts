// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {

  const editorialDark = {
    dark: true,
    colors: {
      background: '#0E0E0C',
      'background-2': '#161614',
      'background-3': '#1F1F1C',
      surface: '#161614',
      'on-surface': '#EDEAE3',
      'on-background': '#EDEAE3',
      primary: '#578CE0',
      secondary: '#9B988F',
      error: '#E5111E',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      white: '#ffff'
    },
  }

  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'editorialDark',
      themes: {
        editorialDark,
      },
    }
  })
  app.vueApp.use(vuetify)
})
