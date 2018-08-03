<template>
  <v-container class="card-container">
    <v-layout class="card elevation-3">
      <v-flex class="left" md6>
        <img src="../assets/dice.svg" width="512" height="512" alt="dice">
      </v-flex>
      <v-flex class="right" md4 offset-md1>
        <div class="card-content">
          <h1>Log In</h1>
          <v-text-field
            label="Email"
            prepend-icon="mail"
          ></v-text-field>
          <v-text-field
            label="Password"
            prepend-icon="lock"
            class="card-password"
          ></v-text-field>
          <div class="card-actions">
            <v-checkbox
              label="Remember me"
              v-model="checkbox"
            ></v-checkbox>
            <span class="forgot-password">Forgot password ?</span>
          </div>
          <v-btn color="primary" large>Login</v-btn>
          <div class="sign-up">Don't you have an account ? <span>Sign up</span></div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      checkbox: false,
    }
  }
}
</script>

<style lang="sass" scoped>
$color_primary: #78A1BB
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
    & .card-content
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

