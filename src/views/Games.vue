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
            :item-value="types.text"
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
            :item-value="sortBy.text"
            v-model="orderbySortby"
            label="All"
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
    <transition-group name="list-complete" tag="div" class="layout row wrap">
      <v-flex md3
        v-for="game in games"
        :key="game.id"
        class="list-complete-item">
        <Game :gameInfo="game"/>
      </v-flex>
    </transition-group>
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
      // types: [ 'All', 'Party', 'Strategy', 'Family' ],
      types: [
        { text: 'All', value: 0},
        { text: 'Party', value: 1},
        { text: 'Strategy', value: 2},
        { text: 'Family', value: 3},
      ],
      sortBy: [
        { text: 'All', value: 0},
        { text: 'AddedDate', value: 1},
        { text: 'Popularity', value: 2},
      ],
      queryString: '',
      orderbyType: '',
      orderbySortby: ''
    }
  },
  computed: {
    games () {
      let loadedGames = this.$store.getters.loadedGames
      let tempGames = []
      if (this.orderbySortby === 1) {
        tempGames = loadedGames.slice().sort((itemA, itemB) => {
          return moment(itemA.time) < moment(itemB.time)
        })
      } else if (this.orderbySortby === 2) {
        tempGames = loadedGames.slice().sort((itemA, itemB) => {
          return itemA.star < itemB.star
        })
      } else {
        tempGames = loadedGames
      }

      let filterGames = tempGames.filter((item) => {
        return item.title.toLowerCase().indexOf(this.queryString.toLowerCase()) !== -1
      })

      // 做類型篩選
      if (this.orderbyType === '' || this.orderbyType === 0) {
        return filterGames
      } else {
        return filterGames.filter((item) => {
          return item.type === this.orderbyType
        })
      }

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
  display: inline-block

.list-complete-enter, .list-complete-leave-to
  opacity: 0
  transform: translateY(30px)

.list-complete-leave-active 
  position: absolute
  
</style>
