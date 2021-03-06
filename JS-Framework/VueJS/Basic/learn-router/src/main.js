import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'

// use that package
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash }
        }
        // return { x: 0, y: 700 }
    },
})

router.beforeEach((to, from, next) => {
    console.log('Global route guards')
    next();
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})