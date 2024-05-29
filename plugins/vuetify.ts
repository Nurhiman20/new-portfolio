// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  
  const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#E6EEF4',
      'background-2': '#F3F3F3',
      'background-3': '#E6E6E6',
      surface: '#F3F3F3',
      primary: '#04578F',
      'primary-darken-1': '#3700B3',
      secondary: '#B2B2B2',
      'secondary-darken-1': '#018786',
      error: '#E5111E',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      white: '#ffff'
    },
  }

  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    }
  })
  app.vueApp.use(vuetify)
})
