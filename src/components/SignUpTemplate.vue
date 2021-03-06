<template>
  <div class="card-content">
    <form @submit.prevent="onSignUp">
      <h1>Sign Up</h1>
      <v-text-field
        label="Email"
        prepend-icon="mail"
        type="email"
        :rules="[checkEmailFormat]"
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
      <v-text-field
        label="Extension"
        prepend-icon="phone"
        v-model="phoneNumber"
        counter
        type="number"
        maxlength="5"
        :rules="[countNumber]"
      ></v-text-field>
      <app-alert class="mt-3" v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>
      <v-btn color="primary" large type="submit" :disabled="loading" :loading="loading">
        SIGN UP
        </v-btn>
      <div class="sign-up">I've already have an account. <span @click="signIn">Sign in</span></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup-template',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match.': true
    },
    countNumber () {
      return this.phoneNumber.length > 5 ? 'Max 5 numbers' : true
    },
    checkEmailFormat () {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !pattern.test(this.email) ? 'Invalid email' : true
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
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
    signIn () {
      this.$emit('signIn', true)
    },
    onSignUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password, phoneNumber: this.phoneNumber })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
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
  margin-bottom: 40px
</style>
