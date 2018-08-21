<template>
  <v-container grid-list-lg>
    <v-fab-transition>
      <v-btn
        color="error"
        dark
        fixed
        right
        bottom
        fab
        @click="$vuetify.goTo(target, options)"
        v-if="scrollSettings.offsetTop > 300">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-layout row wrap v-scroll="onScroll">
      <v-flex md3 xs12>
        <div class="page-title">桌遊清單</div>
      </v-flex>
      <v-flex md3 xs12>
        <div class="select-area">
          <v-subheader>Type</v-subheader>
          <v-select
            :items="types"
            :item-value="types.text"
            v-model="filterbyType"
            solo>
          </v-select>
        </div>
      </v-flex>
      <v-flex md3 xs12>
        <div class="select-area">
          <v-subheader>Sort By</v-subheader>
          <v-select
            :items="sortBy"
            :item-value="sortBy.text"
            v-model="orderbySortby"
            solo>
          </v-select>
        </div>
      </v-flex>
      <v-flex md3 xs12>
        <v-text-field
          solo
          v-model="queryString"
          append-icon="search"
          placeholder="Search...">
        </v-text-field>
      </v-flex>
    </v-layout>
    <transition-group name="list-complete" tag="div" class="layout row wrap">
      <v-flex
        md3 xs12
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
      filterbyType: 0,
      orderbySortby: 0,
      scrollSettings: {
        offsetTop: 0,
        type: 'number',
        number: 0,
        offset: 0,
        duration: 300,
        easing: 'easeInOutCubic'
      }
    }
  },
  watch: {
    filterbyType (val) {
      this.$store.commit('setFilterby', val)
    }
  },
  mounted () {
    this.filterbyType = this.filterbyTypeFromVuex
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
      if (this.filterbyTypeFromVuex === '' || this.filterbyTypeFromVuex === 0) {
        return filterGames
      } else {
        return filterGames.filter((item) => {
          return item.type === this.filterbyTypeFromVuex
        })
      }

    },
    filterbyTypeFromVuex () {
      return this.$store.getters.filterbyType
    },
    target () {
      const value = this.scrollSettings[this.scrollSettings.type]
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.scrollSettings.duration,
        offset: this.scrollSettings.offset,
        easing: this.scrollSettings.easing
      }
    }
  },
  methods: {
    onScroll () {
      this.scrollSettings.offsetTop = window.pageYOffset || document.documentElement.scrollTop
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
