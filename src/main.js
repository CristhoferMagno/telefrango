/**
 * Navite modules
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCVw4eIRWs6hPOLYEzjfNVhstjHeay7-I8',
  },
})

Vue.use(VueRouter);
Vue.use(VueResource);

/**
 * My modules
 */
import App from './App.vue'
import { routes } from './routes.js'

/**
 * js/css
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/css/style.css';

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
