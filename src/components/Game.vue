<template>
  <v-card class="elevation-3">
    <v-card-media
      :src="game.thumbnail"
      height="150px"
    >          
    </v-card-media>
    <v-card-title primary-title style="padding-top: 16px; position: relative;">
      <v-btn
        color="primary"
        dark
        small
        absolute
        top
        right
        fab
      >
        <v-icon>add</v-icon>
      </v-btn>
      <div>
        <h3 class="card-title mb-1">{{ game.title }}</h3>
        <div class="card-pretext">{{ game.previewText }} ...</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" to="/games/1">MORE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'game',
  props: {
    gameInfo: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    game () {
      return this.gameInfo
    }
  }
}
</script>

<style lang="sass" scoped>
.card-title
  font-size: 20px

.card-pretext
  font-size: 14px
</style>
