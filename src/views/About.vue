<template>
  <v-container grid-list-lg>
    <v-layout class="mb-3">
      <v-flex md12>
        <div class="page-title">所有消息</div>
      </v-flex>
    </v-layout>
    <v-layout class="mb-3">
      <v-flex md12>
        <v-data-table
          :headers="headers"
          :items="news"
          class="elevation-1"
        >
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
              <span class="table-title" slot="activator">
                {{ props.header.text }}
              </span>
              <span>
                {{ props.header.text }}
              </span>
            </v-tooltip>
          </template>
          <template slot="items" slot-scope="props">
            <td style="width: 20%" class="table-content">{{ props.item.date }}</td>
            <td class="table-content">{{ props.item.content }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-layout class="mb-3">
      <v-flex md12>
        <div class="page-title">活動照片</div>
      </v-flex>
    </v-layout>
    <v-layout class="mb-3" row wrap>
      <v-flex md4 xs12>
        <div class="highlight elevation-3">
          <span class="highlight-date">2017-10-12</span>
          <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="100%" width="100%" alt="highlight">
        </div>
      </v-flex>
      <v-flex md4 xs12>
        <div class="highlight elevation-3">
          <span class="highlight-date">2017-11-12</span>
          <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="100%" width="100%" alt="highlight">
        </div>
      </v-flex>
      <v-flex md4 xs12>
        <div class="highlight elevation-3">
          <span class="highlight-date">2017-12-12</span>
          <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="100%" width="100%" alt="highlight">
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      headers: [
        { text: '發佈日期', align: 'left', sortable: false, value: 'date' },
        { text: '內容', value: 'content', sortable: false }
      ],
      // news: [
      //   { date:'2017-11-11', content: '桌遊開團囉~~ 2018-10-10123' },
      //   { date:'2017-11-11', content: '桌遊開團囉~~ 2018-10-10' },
      //   { date:'2017-11-11', content: '桌遊開團囉~~ 2018-10-10' },
      //   { date:'2017-11-11', content: '桌遊開團囉~~ 2018-10-10' },
      //   { date:'2017-11-11', content: '桌遊開團囉~~ 2018-10-10' }
      // ]
    }
  },
  computed: {
    news () {
      return this.$store.getters.loadedNews
    }
  }
}
</script>

<style lang="sass" scoped>
.page-title
  font-size: 28px

.table-title
  font-size: 20px

.table-content
  font-size: 16px

.highlight
  height: 250px
  position: relative
  & .highlight-date
    font-size: 28px
    color: white
    position: absolute
    top: 10px
    left: 10px
    font-weight: 600
</style>
