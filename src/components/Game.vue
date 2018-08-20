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
  </v-card>
</template>

<script>
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
      if (this.$store.getters.user === null) {
        this.$router.push('/signin')
        return
      }

      this.$store.commit('addToList', this.game)
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
