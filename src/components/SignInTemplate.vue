<template>
  <div class="card-content">
    <form @submit.prevent="onSignIn">
      <h1>Log In</h1>
      <v-text-field
        label="Email"
        prepend-icon="mail"
        v-model="email"
        :rules="[checkEmailFormat]"
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
          v-model="isRememberMe"
        ></v-checkbox>
        <span class="forgot-password" @click="onForgotPassword">Forgot password ?</span>
      </div>
      <app-alert class="mb-3" v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>
      <v-btn color="primary" large type="submit" :disabled="loading" :loading="loading">Login</v-btn>
      <div class="sign-up">Don't you have an account ? <span @click="signUp">Sign up</span></div>
    </form>
    <app-dialog :dialogAction="'changePassword'" :dialogContent="'請輸入您的信箱'" :dialogBtnConfirm="'Submit'" @changePassword="changePasswordHandler" v-if="isShowDialog"/>
    <app-snackbar :txtSnackbar="txtSnackbar" :color="colorSnackbar" @onDismissed="dismissedHandler" v-if="isShowSnackbar"/>
  </div>
</template>

<script>
import { auth } from 'firebase'

export default {
  name: 'signin-template',
  data () {
    return {
      isRememberMe: false,
      email:'',
      password: '',
      isShowDialog: false,
      isShowSnackbar: false,
      colorSnackbar: '',
      txtSnackbar: ''
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
    checkEmailFormat () {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !pattern.test(this.email) ? 'Invalid email' : true
    }
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
      this.setCookie("RememberMe")
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    setCookie (cname) {
      var d = new Date()
      d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000))
      var expires = "expires=" + d.toUTCString()
      document.cookie = cname + "=" + this.isRememberMe + ";" + expires + ";path=/"
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    },
    changePasswordHandler (obj) {
      if (obj.value) {
        this.$store.commit('setLoading', true)
        auth().sendPasswordResetEmail(obj.email).then(() => {
          this.$store.commit('setLoading', false)
          this.isShowDialog = false
          this.isShowSnackbar = true
          this.txtSnackbar = "Submit successfully"
          this.colorSnackbar = "success"
        }).catch((error) => {
          this.$store.commit('setLoading', false)
          this.isShowSnackbar = true
          this.txtSnackbar = error.message
          this.colorSnackbar = "error"
          console.log(error)
        })

        setTimeout(() => {
          this.isShowSnackbar = false
        }, 4000)
      } else {
        // 按下 Cancel
        this.isShowDialog = false
      }      
    },
    onForgotPassword () {
      this.isShowDialog = true
    },
    dismissedHandler () {
      this.isShowSnackbar = false
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
