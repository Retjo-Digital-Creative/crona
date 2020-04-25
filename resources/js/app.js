require('./bootstrap');
window.Vue = require('vue');

/*Progress Bar*/
import NProgress from 'nprogress'

import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'
import Hotline from './components/Hotline.vue'
import News from './components/News.vue'
import JawaTimur from './components/JawaTimur.vue'
import TermsOfService from './components/TermsOfService.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

let webName = 'Peduli Corona'
const routes = [
	{ path: '/', meta: {title: 'Peduli Corona - Coronavirus Global & Indonesia Live Data'}, component: Main },
	{ path: '/kontak', meta: {title: 'Kontak'}, component: Contact },
	{ path: '/hotline', meta: {title: 'Hotline'}, component: Hotline },
	{ path: '/news', meta: {title: 'Berita'}, component: News },
	{ path: '/404', meta: {title: '404'}, component: NotFound },
	{ path: '/jawatimur', meta: {title: 'Jawa Timur'}, component: JawaTimur },
	{ path: '/about', meta: {title: 'Tentang'}, component: About },
	{ path: '/tos', meta: {title: 'Terms of Service'}, component: TermsOfService },
	{ path: '*', redirect: '/404' }
]

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${webName}` // Set <title> for every components
  NProgress.start()
  NProgress.set(0.5)
  next()
})
router.afterEach(() => {
  setTimeout(() => NProgress.done(), 20)
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
