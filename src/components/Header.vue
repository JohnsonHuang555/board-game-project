<template>
  <v-toolbar
    fixed
    app
    class="secondary"
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
      homeTitle: 'ECS',
      menuItems: [
        { title: 'HOME', to: '/' },
        { title: 'GAMES', to: '/games' },
        { title: 'CART', to: '/cart' },
        { title: 'ABOUT', to: '/about' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

