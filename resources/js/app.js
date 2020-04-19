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
import TermOfService from './components/TermOfService.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Main },
	{ path: '/kontak', component: Contact },
	{ path: '/hotline', component: Hotline },
	{ path: '/news', component: News },
	{ path: '/404', component: NotFound },
	{ path: '/jawatimur', component: JawaTimur },
	{ path: '/about', component: About },
	{ path: '/tos', component: TermOfService },
	{ path: '*', redirect: '/404' }
]

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title // Set <title> for every components
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
