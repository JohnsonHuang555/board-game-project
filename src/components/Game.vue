<template>
  <v-card class="elevation-3">
    <v-card-media
      :src="game.thumbnail"
      height="150px"
    >          
    </v-card-media>
    <v-card-title primary-title style="padding-top: 16px; position: relative;">
      <v-fab-transition>
        <v-btn
          v-show="isShowCheck"
          color="primary"
          dark
          small
          absolute
          top
          right
          fab
          @click="addToList"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-fab-transition>
        <v-btn
          v-show="!isShowCheck"
          color="success"
          dark
          small
          absolute
          top
          right
          fab
        >
          <v-icon>check</v-icon>
        </v-btn>
      </v-fab-transition>
      <div>
        <h3 class="card-title mb-1">{{ game.title }}</h3>
        <div class="card-pretext">{{ game.previewText }} ...</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" :to="'/games/' + gameInfo.id">MORE</v-btn>
    </v-card-actions>
    <app-snackbar :txtSnackbar="txtSnackbar" :color="'error'" @onDismissed="dismissedHandler" v-if="isShowSnackbar"/>
  </v-card>
</template>

<script>
import { auth } from 'firebase'
var _ = require('lodash')

export default {
  name: 'game',
  props: {
    gameInfo: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      isShowSnackbar: false,
      txtSnackbar: ''
    }
  },
  computed: {
    game () {
      return this.gameInfo
    },
    isShowCheck () {
      if (_.findIndex(this.$store.getters.user.rentCart, (o) => { return o.id == this.game.id }) === -1) 
        return true
      else 
        return false     
    }
  },
  methods: {
    addToList () {
      if (this.$store.getters.user.id === 0) {
        this.$router.push('/signin')
        return
      }

      if (!auth().currentUser.emailVerified) {
        this.isShowSnackbar = true
        this.txtSnackbar = '帳號未驗證，請至信箱激活'
        setTimeout(() => {
          this.isShowSnackbar = false
        }, 4000)
        return
      }
      
      if (this.$store.getters.user.rentCart.length > 5) {
        this.isShowSnackbar = true
        this.txtSnackbar = '租借總數不可超過五款'
        setTimeout(() => {
          this.isShowSnackbar = false
        }, 4000)
        return
      }

      this.$store.commit('addToList', this.game)
    },
    dismissedHandler () {
      this.isShowSnackbar = false
    }
  }
}
</script>

<style lang="sass" scoped>
.card-title
  font-size: 20px
  letter-spacing: 3px

.card-pretext
  font-size: 14px
  letter-spacing: 3px
</style>
