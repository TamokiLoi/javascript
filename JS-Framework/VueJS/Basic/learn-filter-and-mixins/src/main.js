import Vue from 'vue'
import App from './App.vue'

Vue.filter('toUpperCase', function(value) {
    return value.toUpperCase();
});

Vue.mixin({
    created() {
        console.log('global mixin - created hook');
    },
})

new Vue({
    el: '#app',
    render: h => h(App),
    created() {
        console.log('vue origin')
    },
})