import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SocialSharing from 'vue-social-sharing'

//style
import './assets/style/aplication.scss'

//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(SocialSharing)
library.add(faFacebook)
library.add(faTwitter)
library.add(faInstagram)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
