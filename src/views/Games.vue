<template>
  <v-container grid-list-lg>
    <v-btn
      color="error"
      dark
      fixed
      right
      bottom
      fab
      >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
    <v-layout>
      <v-flex md3>
        <div class="page-title">桌遊清單</div>
      </v-flex>
      <v-flex md3>
        <div class="select-area">
          <v-subheader>Type</v-subheader>
          <v-select
            :items="types"
            label="All"
            v-model="orderbyType"
            solo>
          </v-select>
        </div>
      </v-flex>
      <v-flex md3>
        <div class="select-area">
          <v-subheader>Sort By</v-subheader>
          <v-select
            :items="sortBy"
            label="請選擇排序方式"
            v-model="orderbySortby"
            solo>
          </v-select>
        </div>
      </v-flex>
      <v-flex md3>
        <v-text-field
          solo
          v-model="queryString"
          append-icon="search"
          placeholder="Search...">
        </v-text-field>
      </v-flex>
    </v-layout>
    <!-- <v-layout class="mb-2" row wrap> -->
    <transition-group name="list-complete" tag="div" class="layout row wrap">
      <v-flex md3 v-for="(game, i) in games" :key="i" class="list-complete-item">
        <Game :gameInfo="game"/>
      </v-flex>
    </transition-group>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
import Game from '@/components/Game.vue'
var moment = require('moment')

export default {
  name: 'games',
  components: {
    Game
  },
  data () {
    return {
      types: [ 'All', '派對', '策略', '家庭' ],
      sortBy: [ '上架日期', '人氣' ],
      queryString: '',
      orderbyType: '',
      orderbySortby: ''
    }
  },
  computed: {
    games () {
      var data = this.$store.getters.loadedGames
      var tempGames = []
      if (this.orderbySortby === '上架日期') {
        tempGames = data.slice().sort((itemA, itemB) => {
          return moment(itemA.time) < moment(itemB.time)
        })
      } else if (this.orderbySortby === '人氣') {
        tempGames = data.slice().sort((itemA, itemB) => {
          return itemA.star < itemB.star
        })
      } else {
        tempGames = data
      }

      return tempGames.filter((item) => {
        return item.title.toLowerCase().indexOf(this.queryString.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.page-title
  font-size: 28px

.select-area
  display: flex

.list-complete-item
  transition: all 0.5s

.list-complete-enter, .list-complete-leave-to
  opacity: 0
  transform: translateY(30px)

.list-complete-leave-active 
  position: absolute
  
</style>
