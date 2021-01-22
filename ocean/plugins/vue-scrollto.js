// plugins/vue-scrollto.js
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, { duration: 0 })

// nuxt.config.js
// {
//     ...
//     plugins: [{
//       src: '~plugins/vue-scrollto.js',
//       ssr: false
//     }]
//     ...
//   }
