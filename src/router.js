import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Games from './views/Games.vue'
import Cart from './views/Cart.vue'
import SignIn from './views/SignIn.vue'
import GameDetail from './components/GameDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },    
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/games/:id',
      name: 'gameDetail',
      props: true,
      component: GameDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
  ]
})
