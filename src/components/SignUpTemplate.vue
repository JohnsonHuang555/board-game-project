<template>
  <div class="card-content">
    <h1>Sign Up</h1>
    <v-text-field
      label="Email"
      prepend-icon="mail"
      v-model="email"
    ></v-text-field>
    <v-text-field
      label="Password"
      prepend-icon="lock"
      v-model="password"
      type="password"
    ></v-text-field>
    <v-text-field
      label="Confirm Password"
      prepend-icon="vpn_key"
      v-model="confirmPassword"
      type="password"
      :rules="[comparePasswords]"
    ></v-text-field>

    <v-btn color="primary" large @click="onSignUp">SIGN UP</v-btn>
    <div class="sign-up">I've already have an account. <span @click="signIn">Sign in</span></div>
  </div>
</template>

<script>
export default {
  name: 'signup-template',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match.': true
    }
  },
  methods: {
    signIn () {
      this.$emit('signIn', true)
    },
    onSignUp () {

    }
  }
}
</script>


<style lang="sass" scoped>
.card-content
  width: 100%

.sign-up
  font-size: 16px
  opacity: 0.7
  & span
    margin-left: 10px
    font-size: 20px
    color: #78A1BB
    font-weight: 600
    cursor: pointer
  & span:hover
    opacity: 0.7

button
  margin: 30px 0

h1
  font-weight: 500
  font-size: 36px
  margin-bottom: 60px
</style>
