// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import colors from 'vuetify/lib/util/colors'


export default function (Vue, { router, head, appOptions, isClient }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  })


  const opts = { 
    rtl: true,
    theme: {
      themes: {
        light: {
          primary: "64ffda", //colors.teal.lighten3,
          secondary: "#9b27af",
          accent: colors.indigo.base, // #3F51B5
        },
      },
    },
   } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // gist chat
  head.script.push({
    src: '~/gist.js'
  })

  // Sweet Alert
  head.script.push({
    src: 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'
  })
}
