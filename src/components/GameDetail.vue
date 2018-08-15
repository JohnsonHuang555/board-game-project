<template>
  <v-container grid-list-lg>
    <v-layout row wrap class="game elevation-3">
      <v-flex md4 offset-md1 class="mt-4 mb-4">
        <div class="thumbnail">
          <img class="elevation-3" :src="game.thumbnail" alt="game-img">
        </div>
        <!-- <v-layout style="margin-bottom: 20px;">
          <v-flex md6>
            <img class="elevation-3" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" width="100%" alt="game-img">
          </v-flex>
          <v-flex md6>
            <img class="elevation-3" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" width="100%" alt="game-img">
          </v-flex>
        </v-layout> -->
        <div class="game-detail-frame">
          <div id="game-detail">
            <div class="game-detail-content">
              <v-icon medium>event_available</v-icon>
              <span>上架時間</span>
              <span>{{ game.time }}</span>
            </div>
            <div class="game-detail-content">
              <v-icon medium>person</v-icon>
              <span>玩家人數</span>
              <span>{{ game.players }}</span>
            </div>
            <div class="game-detail-content">
              <v-icon medium>access_time</v-icon>
              <span>遊玩歷時</span>
              <span>{{ game.duration }}</span>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex md6 class="mt-4 mb-4" style="padding: 0 20px">
        <h1>
          <v-icon>local_offer</v-icon>
          {{ game.title }}
        </h1>
        <div id="game-intro">
          <div class="game-intro-title">- 遊戲簡介</div>
          <div class="game-intro-content">
            {{ game.description }}
          </div>
        </div>
        
        <v-btn large color="primary" @click="addToList" :disabled="isDisableAddToList">ADD TO CART</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
var _ = require('lodash')

export default {
  name: 'gameDetail',
  props: ['id'],
  computed: {
    game () {
      return this.$store.getters.loadedGame(this.id)
    }
  },
  data () {
    return {
      isDisableAddToList: false
    }
  },
  methods: {
    addToList () {
      if (_.findIndex(this.$store.state.user.rentCart, (o) => { return o.id == this.game.id }) === -1) {
          this.$store.commit('addToList', this.game)
          this.isDisableAddToList = true
        } else {
          alert('已在租借清單中')
          return
        }
    }
  }
}
</script>

<style lang="sass" scoped>
*
  // border: 1px solid #000
button
  margin: 0

.game
  background-color: #fefefe
  border-radius: .2em

#game-intro  
  & .game-intro-title
    font-size: 22px
    margin-bottom: 10px
  & .game-intro-content
    line-height: 40px
    font-size: 20px
    margin-bottom: 20px

#game-detail
  display: flex
  flex-direction: column
  margin-bottom: 20px
  & .game-detail-title
    font-size: 20px
    margin-bottom: 20px
  & .game-detail-content
    display: flex
    align-content: center
    margin-bottom: 10px
    & i
      margin-right: 10px
    & span
      font-size: 18px
      margin-right: 10px

.game-detail-frame
  display: flex
  justify-content: center

.thumbnail
  margin-bottom: 30px
  display: flex
  justify-content: center

img
  max-height: 40vh
  max-width: 100%

h1
  font-weight: 500
  font-size: 28px
  margin-bottom: 20px
  letter-spacing: 2px
</style>
