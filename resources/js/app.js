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

import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import Main from './components/Main.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'
import Hotline from './components/Hotline.vue'
import JawaTimur from './components/JawaTimur.vue'
import News from './components/News.vue'
import App from './components/App.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Main},
	{ path: '/kontak', component: Contact },
	{ path: '/hotline', component: Hotline },
	{ path: '/404', component: NotFound },
	{ path: '*', redirect: '/404' },
	{ path: '/jawatimur', component: JawaTimur }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

const app = new Vue({
    router,
    el: '#app',
    components: { App }
});
