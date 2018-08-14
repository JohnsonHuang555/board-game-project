import '@babel/polyfill'
import Vue from 'vue'
import { initializeApp } from 'firebase'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
// Vue.config.silent = true

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    initializeApp({
      apiKey: "AIzaSyB_IMKohcElAvNnAPi1PbGbyn44TCb87Xk",
      authDomain: "rent-app-e75f5.firebaseapp.com",
      databaseURL: "https://rent-app-e75f5.firebaseio.com",
      projectId: "rent-app-e75f5",
      storageBucket: "rent-app-e75f5.appspot.com",
    })
  }
}).$mount('#app')
