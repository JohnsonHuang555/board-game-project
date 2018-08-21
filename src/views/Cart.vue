<template>
  <v-container grid-list-lg>
    <v-layout class="mb-4">
      <v-flex md10 xs8>
        <div class="page-title">租借清單</div>
      </v-flex>
      <v-flex md2 xs4 class="cart-count">
        <div>共 {{ games.length }} 筆</div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12>
        <v-alert
          :value="games.length === 0"
          type="info"
          color="error"
          transition="scale-transition">
          No Data Found
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout class="game elevation-3 mb-4" row wrap v-for="game in games" :key="game.id">
      <v-flex md12>
        <v-layout row wrap>
          <v-flex md3 xs12>
            <img :src="game.thumbnail" :alt="game.title">
          </v-flex>
          <v-flex md5 xs12 class="game-info vertically-placed">
            <div>
              <div class="game-title">{{ game.title }}</div>
              <div class="game-content">{{ game.previewText }}...</div>
            </div>
          </v-flex>
          <v-flex md3 xs12 class="vertically-placed">
            <div class="game-deadline">租借期限 {{ convertTimes() }}</div>
          </v-flex>
          <v-flex md1 xs12 class="vertically-placed">
            <v-icon color="error" style="cursor: pointer" @click="removeGame(game)">clear</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12 class="rent-setting">
        <v-subheader>租借天數</v-subheader>
        <v-select
          :items="days"
          class="select-days"
          :item-value="days.text"
          label="7"
          v-model="rentDays"
          :disabled="games.length === 0 "
          solo>
        </v-select>
        <v-btn
          color="primary"
          :disabled="games.length === 0"
          @click="rentGames">
          租借
        </v-btn>
      </v-flex>
    </v-layout>
    <app-snackbar :txtSnackbar="txtSnackbar" @onDismissed="dismissedHandler" v-if="isShowSnackbar"/>
  </v-container>
</template>

<script>
import { database } from 'firebase'
var moment = require('moment')

export default {
  name: 'cart',
  data () {
    return {
      days: [
        { text: '7' , value: 7 },
        { text: '14' , value: 14 },
        { text: '30' , value: 30 }
      ],
      rentDays: 7,
      txtSnackbar: 'Rent successfully',
      isShowSnackbar: false
    }
  },
  computed: {
    games () {
      return this.$store.state.user.rentCart
    },
  },
  methods: {
    removeGame (game) {
      this.$store.commit('removeGame', game)
    },
    convertTimes () {
      var vm = this
      const now = moment()
      return moment(now, "YYYY-MM-DD").add(vm.rentDays, 'days').format("YYYY-MM-DD")
    },
    rentGames () {
      if (this.games.length === 0) {
        return
      }

      const rentedGames = {
        games: this.games,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
      }

      database().ref('rent-games/' + this.$store.getters.user.id).set(rentedGames)
        .then(() => {
          this.isShowSnackbar = true
          this.$store.dispatch('clearRentCart')
          setTimeout(() => {
            this.isShowSnackbar = false
          }, 4000)
        })
        .catch((error) => {
          this.isShowSnackbar = false
          console.log(error)
        })
    },
    dismissedHandler () {
      this.isShowSnackbar = false
    }
  }
}
</script>

<style lang="sass" scoped>
*
  // border: 1px solid #000

.page-title
  font-size: 28px

.cart-count
  font-size: 18px
  display: flex
  align-items: flex-end
  justify-content: flex-end

img
  display: block
  max-height: 150px
  max-width: 100%

.vertically-placed
  display: flex
  align-items: center

.game-info
  padding: 10px

.game-title
  font-size: 20px
  margin-bottom: 10px

.game-content
  font-size: 14px

.game-deadline
  font-size: 18px

.game
  background: #fff

.rent-setting
  display: flex
  justify-content: flex-end
  & .select-days
    max-width: 150px
    margin-right: 15px

button
  margin: 0
  height: 48px
  width: 120px
</style>
