import '@babel/polyfill'
import Vue from 'vue'
import { initializeApp, auth } from 'firebase'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false
// Vue.config.silent = true
Vue.component('app-alert', AlertCmp)

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
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user, 'user')
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadedGames')
  }
}).$mount('#app')
