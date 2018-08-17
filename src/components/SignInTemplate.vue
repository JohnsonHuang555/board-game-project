<template>
  <div class="card-content">
    <form @submit.prevent="onSignIn">
      <h1>Log In</h1>
      <v-text-field
        label="Email"
        prepend-icon="mail"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        prepend-icon="lock"
        class="card-password"
        v-model="password"
        type="password"
      ></v-text-field>
      <div class="card-actions">
        <v-checkbox
          label="Remember me"
          v-model="checkbox"
        ></v-checkbox>
        <span class="forgot-password">Forgot password ?</span>
      </div>
      <app-alert class="mb-3" v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>
      <v-btn color="primary" large type="submit" :disabled="loading" :loading="loading">Login</v-btn>
      <div class="sign-up">Don't you have an account ? <span @click="signUp">Sign up</span></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signin-template',
  data () {
    return {
      checkbox: false,
      email:'',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    },
  },
  watch: {
    user (val) {
      if (val !== null && val !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    signUp () {
      this.$emit('signUp', false)
    },
    onSignIn () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style lang="sass" scoped>
$color_primary: #78A1BB

.card-content
  width: 100%
  & .card-actions
    display: flex
    justify-content: space-between
    margin-bottom: 30px
    & .forgot-password
      margin-top: 20px
      opacity: 0.7
      font-size: 16px
      cursor: pointer
    & .forgot-password:hover
      color: $color_primary
  & button
    margin-bottom: 20px
  & .sign-up
    font-size: 16px
    opacity: 0.7
    & span
      margin-left: 10px
      font-size: 20px
      color: $color_primary
      font-weight: 600
      cursor: pointer
    & span:hover
      opacity: 0.7

button
  margin: 0

h1
  font-weight: 500
  font-size: 36px
  margin-bottom: 60px
</style>
