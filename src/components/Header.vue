<template>
  <v-toolbar
    fixed
    app
    class="primary"
    dark>
    <v-toolbar-title class="pl-3">
      <router-link to="/" tag="span" style="cursor: pointer">ECS</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="pr-3">
      <v-btn
        flat
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        exact
        router>
        {{ item.title }}
      </v-btn>      
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      homeTitle: 'ECS'
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { title: 'HOME', to: '/' },
        { title: 'GAMES', to: '/games' },
        { title: 'CART', to: '/cart' },
        { title: 'ABOUT', to: '/about' },
        { title: 'SIGN IN', to: '/signin' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: 'HOME', to: '/' },
          { title: 'GAMES', to: '/games' },
          { title: 'CART', to: '/cart' },
          { title: 'ABOUT', to: '/about' },
        ]
      }

      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
}
</script>

<style lang="sass" scoped>
nav
  z-index: 999
</style>

