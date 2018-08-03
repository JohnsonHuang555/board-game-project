<template>
  <v-container>
    <v-layout class="mb-4">
      <v-flex md10>
        <div class="page-title">租借清單</div>
      </v-flex>
      <v-flex md2 class="cart-count">
        <div>共 3 筆</div>
      </v-flex>
    </v-layout>
    <v-layout class="game elevation-3 mb-4">
      <v-flex md12>
        <v-layout>
          <v-flex md3>
            <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="Game">
          </v-flex>
          <v-flex md5 class="game-info vertically-placed">
            <div>
              <div class="game-title">印加寶藏</div>
              <div class="game-content">在一個神秘的古老遺跡，傳言古代寶藏就埋藏在這裡，冒險者們來到這裡準備成為大富翁...</div>
            </div>
          </v-flex>
          <v-flex md3 class="vertically-placed">
            <div class="game-deadline">租借期限 2017-10-10</div>
          </v-flex>
          <v-flex md1 class="vertically-placed">
            <v-icon color="error">clear</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="game elevation-3 mb-4">
      <v-flex md12>
        <v-layout>
          <v-flex md3>
            <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="Game">
          </v-flex>
          <v-flex md5 class="game-info vertically-placed">
            <div>
              <div class="game-title">印加寶藏</div>
              <div class="game-content">在一個神秘的古老遺跡，傳言古代寶藏就埋藏在這裡，冒險者們來到這裡準備成為大富翁...</div>
            </div>
          </v-flex>
          <v-flex md3 class="vertically-placed">
            <div class="game-deadline">租借期限 2017-10-10</div>
          </v-flex>
          <v-flex md1 class="vertically-placed">
            <v-icon color="error">clear</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="game elevation-3 mb-4">
      <v-flex md12>
        <v-layout>
          <v-flex md3>
            <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="Game">
          </v-flex>
          <v-flex md5 class="game-info vertically-placed">
            <div>
              <div class="game-title">印加寶藏</div>
              <div class="game-content">在一個神秘的古老遺跡，傳言古代寶藏就埋藏在這裡，冒險者們來到這裡準備成為大富翁...</div>
            </div>
          </v-flex>
          <v-flex md3 class="vertically-placed">
            <div class="game-deadline">租借期限 2017-10-10</div>
          </v-flex>
          <v-flex md1 class="vertically-placed">
            <v-icon color="error">clear</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12 class="rent-setting">
        <v-subheader>租借天數</v-subheader>
        <v-select
          class="select-days"
          :items="days"
          label="7天"
          solo>
        </v-select>
        <v-btn color="primary">租借</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      days: ['7天', '14天' , '30天']
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
  justify-content: center
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
