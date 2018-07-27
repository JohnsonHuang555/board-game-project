<template>
  <v-card class="elevation-3">
    <v-card-media
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      height="150px"
    >          
    </v-card-media>
    <v-card-title primary-title style="padding-top: 16px; position: relative;">
      <v-btn
        color="success"
        dark
        small
        absolute
        top
        right
        fab
      >
        <v-icon>check</v-icon>
      </v-btn>
      <div>
        <h3 class="card-title mb-1">印加寶藏</h3>
        <div class="card-pretext">在一個神秘的古老遺跡，傳言古代寶藏就埋藏在這裡，冒險者們來到這裡準備成為大富翁... ...</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="secondary">MORE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'game'
}
</script>

<style lang="sass" scoped>
.card-title
  font-size: 20px

.card-pretext
  font-size: 14px
</style>
