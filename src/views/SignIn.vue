<template>
  <v-container class="card-container">
    <v-layout class="card elevation-3">
      <v-flex class="left" md6>
        <img src="../assets/dice.svg" width="512" height="512" alt="dice">
      </v-flex>
      <v-flex class="right" md4 offset-md1>
        <transition name="component-fade" mode="out-in">
          <SignInTemplate @signUp="signHandler" v-if="isSignIn"/>
          <SignUpTemplate @signIn="signHandler" v-else/>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SignInTemplate from '@/components/SignInTemplate.vue'
import SignUpTemplate from '@/components/SignUpTemplate.vue'

export default {
  name: 'signin',
  components: {
    SignInTemplate,
    SignUpTemplate
  },
  data () {
    return {
      isSignIn: true
    }
  },
  methods: {
    signHandler (val) {
      this.isSignIn = val
    }
  }
}
</script>

<style lang="sass" scoped>
$color_white: #fefefe

.card-container
  height: 100%
  display: flex
  justify-content: center
  align-items: center

.card
  height: 600px
  border-radius: 10px
  background-color: $color_white
  & .left
    display: flex
    justify-content: center
    align-items: center
    background-color: #DDECF1
  & .right
    display: flex
    justify-content: center
    align-items: center

h1
  font-weight: 500
  font-size: 36px
  margin-bottom: 60px

.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .1s ease

.component-fade-enter, .component-fade-leave-to
  opacity: 0

</style>

