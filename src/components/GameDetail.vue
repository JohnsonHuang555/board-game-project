<template>
  <v-container grid-list-lg>
    <v-layout row wrap class="game elevation-3">
      <v-flex md4 offset-md1 class="mt-4 mb-4">
        <img class="elevation-3" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" width="100%" alt="game-img">
          <v-layout>
            <v-flex md6>
              <img class="elevation-3" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" width="100%" alt="game-img">
            </v-flex>
            <v-flex md6>
              <img class="elevation-3" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" width="100%" alt="game-img">
            </v-flex>
          </v-layout>
      </v-flex>
      <v-flex md6 class="mt-4 mb-4" style="padding: 0 20px">
        <h1>印加寶藏</h1>
        <div id="game-intro">
          <div class="game-intro-title">- 遊戲簡介</div>
          <div class="game-intro-content">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Proin ligula nisi, pharetra nec eros vitae, mollis
            placerat tellus. Donec vel quam hendrerit,
            venenatis turpis quis, aliquam sapien.
          </div>
        </div>
        <div id="game-detail">
          <div class="game-detail-title">- 桌遊資訊</div>
          <!-- For loop -->
          <div class="game-detail-content">
            <v-icon medium>event_available</v-icon>
            <span>上架時間</span>
            <span>2015-10-10</span>
          </div>
          <div class="game-detail-content">
            <v-icon medium>person</v-icon>
            <span>玩家人數</span>
            <span>2-5</span>
          </div>
          <div class="game-detail-content">
            <v-icon medium>access_time</v-icon>
            <span>遊玩歷時</span>
            <span>30分鐘</span>
          </div>
        </div>
        <v-btn large color="primary">ADD TO CART</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'gameDetail'
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
    font-size: 20px
    margin-bottom: 10px
  & .game-intro-content
    line-height: 40px
    font-size: 22px
    margin-bottom: 10px

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

h1
  font-weight: 500
  font-size: 28px
  margin-bottom: 20px
  letter-spacing: 2px
</style>
