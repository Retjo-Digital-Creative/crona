/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

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

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

