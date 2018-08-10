<template>
  <v-container grid-list-lg>
    <v-layout row wrap class="mb-5">
      <v-flex md7 xs12>
        <v-carousel class="elevation-4">
          <v-carousel-item
            v-for="(game, i) in games"
            :key="i"
            :src="game.thumbnail">
            <div class="carousel-title">
              {{ game.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex md5 xs12>
        <div class="news-header">
          <div class="news-title">最新消息</div>
          <div style="font-size: 14px">日期<v-icon small style="margin-left: 5px">sort</v-icon></div>
        </div>
        <div v-for="(newsInfo, i) in news" :key="i" class="news-content elevation-3">
          <!-- 桌遊開團囉 2018-01-01dsfsf dffewfew fewfwf dsfsfdsff dfdfdsfs fdggsdsfdfs gfgfgreg ggggreg regre gregre -->
          {{ newsInfo.content}}
          <span class="date">{{ newsInfo.date }}</span>
        </div>
        <span class="more">
          More
          <v-icon small>arrow_forward</v-icon>
        </span>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-5">
      <v-flex md4>
        <div class="type elevation-3">
          <div class="type-words">
            <div class="cn">派對</div>
            <div class="en">Party Game</div>
          </div>
          <img src="../assets/party-type.svg" alt="Party Games">
        </div>
      </v-flex>
      <v-flex md4>
        <div class="type elevation-3">
          <div class="type-words">
            <div class="cn">策略</div>
            <div class="en">Strategy Game</div>
          </div>
          <img src="../assets/strategy-type.svg" alt="Strategy Games">
        </div>
      </v-flex>
      <v-flex md4>
        <div class="type elevation-3">
          <div class="type-words">
            <div class="cn">家庭</div>
            <div class="en">Family Game</div>
          </div>
          <img src="../assets/family-type.svg" alt="Family Games">
        </div>
      </v-flex>
    </v-layout>
    <div class="new-games">
      <div class="new-games-title">新貨報到</div>
      <img src="../assets/new-games.svg" alt="New Games" height="35px" width="35px">
    </div>
    <!-- 跑 foreach -->
    <v-layout row wrap class="mb-5">
      <v-flex v-for="(game, i) in newGames" :key="i" md3>
        <Game :gameInfo="game"/>
      </v-flex>
    </v-layout>
    <div class="new-games">
      <div class="new-games-title">人氣榜</div>
      <img src="../assets/hot-games.svg" alt="New Games" height="35px" width="35px">
    </div>
    <!-- 跑 foreach -->
    <v-layout row wrap class="mb-5">
      <v-flex v-for="(game, i) in hotGames" :key="i" md3>
        <Game :gameInfo="game"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Game from '@/components/Game.vue'
var moment = require('moment')

export default {
  name: 'home',
  components: {
    Game
  },
  data () {
    return {

    }
  },
  computed: {
    games () {
      return this.$store.getters.featuredGames
    },
    news () {
      return this.$store.getters.featuredNews
    },
    hotGames () {
      let games = []
      let data = this.$store.getters.loadedGames

      games = data.slice(0, 4).sort((itemA, itemB) => {
        return itemA.star < itemB.star
      })

      return games
    },
    newGames () {
      let games = []
      let data = this.$store.getters.loadedGames

      games = data.slice(0, 4).sort((itemA, itemB) => {
        return moment(itemA.time, "YYYY-MM-DD HH:mm") < moment(itemB.time, "YYYY-MM-DD HH:mm")
      })
      
      return games
    }
  }
}
</script>

<style lang="sass" scoped>
$color_white: #fefefe
$border_radius: .2em

.carousel-title
  position: absolute
  bottom: 25px
  background-color: rgba(0,0,0, .5)
  color: white
  font-size: 18px
  padding: 18px
  left: 50%
  transform: translate(-50%, -50%)

.news-header
  width: 100%
  display: flex
  align-items: flex-end
  justify-content: space-between
  margin-bottom: 15px
  & .news-title
    font-size: 24px

.news-content
  font-size: 16px
  padding: 22px
  position: relative
  border-radius: $border_radius
  background-color: $color_white
  margin-bottom: 15px
  & .date
    position: absolute
    right: 10px
    bottom: 6px
    font-size: 14px

.more
  float: right
  cursor: pointer
  & i:hover
    color: #78A1BB

.more:hover
  color: #78A1BB

.type
  display: flex
  height: 200px
  justify-content: space-between
  padding: 20px
  background-color: $color_white
  border-radius: $border_radius
  cursor: pointer
  & img
    max-width: 60%

.type:hover
  opacity: 0.7

.type-words
  & .cn
    font-size: 24px
    margin-bottom: 15px
  & .en
    font-size: 20px

.new-games
  display: flex
  align-items: flex-end
  margin-bottom: 15px
  & .new-games-title
    font-size: 26px
    margin-right: 10px

</style>
