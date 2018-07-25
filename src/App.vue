<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content class="content">
        <router-view/>
      </v-content>
    </v-app>
<!--     
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700')

#app
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #283D3B
  background-color: #EFF7F6
  // background-color: #A1C181
  // text-align: center
  // color: #2c3e50

*
  box-sizing: border-box

.content
  margin-top: 64px

</style>
