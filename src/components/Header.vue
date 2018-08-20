<template>
  <div>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      temporary
      class="drawer"
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in menuItems"
          exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list v-if="userIsAuthenticated">
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.id"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ user.account }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click="onSettings(subItem)"
            >
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
      :clipped-left="clipped"
      class="primary"
      dark>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="pl-3">
        <router-link to="/" tag="span" style="cursor: pointer">ECS</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="pr-3 hidden-xs-only">
        <v-btn
          flat
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          exact
          router>
          {{ item.title }}
        </v-btn>
        <v-menu max-width="150" offset-x v-if="userIsAuthenticated">
          <v-btn
            slot="activator"
            flat
            class="account-avatar"
            >
            <v-avatar>
              <v-icon dark medium>account_circle</v-icon>
            </v-avatar>
            {{ user.account }}
            <v-icon dark>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="item in accountSettings"
              :key="item.id"
              @click="onSettings(item)"
            >
              <v-list-tile-action>
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <app-dialog @logout="logoutHandler" v-if="isShowDialog"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      homeTitle: 'ECS',
      accountSettings: [
        { id: 1, title: 'Profile', icon: 'person'},
        { id: 2, title: 'Log Out', icon: 'exit_to_app'}
      ],
      items: [
        {
          id: 1,
          action: 'account_circle',
          items: [
            { id: 1, title: 'Profile', action: 'person'},
            { id: 2, title: 'Log Out', action: 'exit_to_app'}
          ]
        }
      ],
      isShowDialog: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { title: 'HOME', to: '/', icon: 'home' },
        { title: 'GAMES', to: '/games' , icon: 'games'},
        { title: 'ABOUT', to: '/about', icon: 'info' },
        { title: 'SIGN IN', to: '/signin', icon: 'input' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: 'HOME', to: '/', icon: 'home' },
          { title: 'GAMES', to: '/games', icon: 'games' },
          { title: 'CART', to: '/cart', icon: 'shopping_cart' },
          { title: 'ABOUT', to: '/about', icon: 'info' },
        ]
      }

      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user.id !== 0 && this.$store.getters.user.account !== ""
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    onSettings (item) {
      if (item.id === 1)
        this.$router.push('/profile')
      else
        this.isShowDialog = true
    },
    logoutHandler (val) {
      this.isShowDialog = false
      if (val) {
        this.onLogout()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
nav
  z-index: 999

.drawer
  z-index: 1000 !important

.account-avatar
  text-transform: none !important
  font-size: 16px
</style>

