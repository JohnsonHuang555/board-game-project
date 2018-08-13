<template>
  <div id="app">
    <v-app>
      <Header v-if="isShow"/>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  data () {
    return {
      isShow: true
    }
  },
  mounted () {
    // 當直接輸入網址時判斷是否為登入頁面
    if (this.$router.currentRoute.name === 'signin') {
      this.isShow = false
    }
  },
  watch: {
    // 當切換路由時判斷是否為登入頁面
    '$route' (to) {
      if (to.name === 'signin') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700')
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css')

#app
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #283D3B
  background-color: #EFF7F6

// @font-face
//     font-family: custom-serif
//     src: 'Noto Sans TC'
//     unicode-range: U+4E00-9FFF

// @font-face
//     font-family: custom-serif
//     src: 'Lato'
//     unicode-range: U+00-024F

*
  box-sizing: border-box

.container
  @media only screen and (min-width: 1904px)
    max-width: 1185px
</style>
