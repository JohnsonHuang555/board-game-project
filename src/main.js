import '@babel/polyfill'
import Vue from 'vue'
import { initializeApp, auth } from 'firebase'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import AlertCmp from './components/Shared/Alert.vue'
import DialogCmp from './components/Shared/Dialog.vue'
import SnackbarCmp from './components/Shared/Snackbar.vue'

Vue.config.productionTip = false
// Vue.config.silent = true
Vue.component('app-alert', AlertCmp)
Vue.component('app-dialog', DialogCmp)
Vue.component('app-snackbar', SnackbarCmp)

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
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadedGames')
    this.$store.dispatch('loadedNews')
  },
  methods: {
    getCookies (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
    }
  }
}).$mount('#app')
