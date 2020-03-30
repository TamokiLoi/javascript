import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// use that package
Vue.use(VueResource);

// set url for http-root
Vue.http.options.root = 'https://vue-ytb-form-cd90b.firebaseio.com/';

// set interceptor
Vue.http.interceptors.push((request, next) => {
    console.log(request)
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(response => {
        response.json = () => {
            return {
                data: response.body
            }
        }
    });
})

new Vue({
    el: '#app',
    render: h => h(App)
})