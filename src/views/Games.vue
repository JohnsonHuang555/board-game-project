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
            :items="items"
            label="All"
            solo>
          </v-select>
        </div>
      </v-flex>
      <v-flex md3>
        <div class="select-area">
          <v-subheader>Sort By</v-subheader>
          <v-select
            :items="items"
            label="上架日期"
            solo>
          </v-select>
        </div>
      </v-flex>
      <v-flex md3>
        <v-text-field
          solo
          append-icon="search"
          placeholder="Search...">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout class="mb-2">
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
      <v-flex md3>
        <Game />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Game from '@/components/Game.vue'

export default {
  name: 'games',
  components: {
    Game
  },
  data () {
    return {
      items: [ 'Foo', 'Bar', 'Fizz' ]
    }
  }
}
</script>

<style lang="sass" scoped>
.page-title
  font-size: 28px

.select-area
  display: flex
//   justify-content: space-between
//   & .select-title
//     font-size: 14px
</style>
