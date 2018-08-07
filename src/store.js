import Vue from 'vue'
import Vuex from 'vuex'
var moment = require('moment')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedGames: [
      {
        id: '1',
        title: 'BANG',
        previewText: 'BANG! Armed & Dangerous為玩家提供了許多驚喜，也有許多危險卡',
        description: `BANG! 是一個以美國西部牛仔槍戰為背景的紙牌遊戲。 因非常契合經典電影無間道，所以又叫西部無間。
          子彈版合集包含了：基本第三版、日正當中(第一套限量版擴充集) 、道奇市(全新卡片及角色，並且可以讓8人同時遊戲)、
          一大票幫手(第二套限量版擴充集)……。 而純基本版目前發行至第四版。 每位玩家皆有各自扮演的人物及身分，為了不同的目標而奮戰，
          是非常知名的嘴炮遊戲，歡樂性十足。`,
        thumbnail: 'https://media.taaze.tw/showLargeImage.html?sc=62100003746&width=587&height=546',
        time: '2018/01/20',
        star: 4
      },
      {
        id: '2',
        title: '印加寶藏',
        previewText: '你和你富有冒險精神的夥伴們，前往古老的印加神廟中，尋找稀有',
        description: `你和你富有冒險精神的夥伴們，前往古老的印加神廟中，尋找稀有的綠松石、黑曜石與黃金。遊戲中的每個
        回合，你都必須決定是要進一步地深入探索神廟，或者是要安全地返回營地，將已經到手的寶物好好收藏保管。越往神廟的深處探索
        ，就表示已經到手的寶物有可能因為神廟內發生的種種危機，而被迫拋棄，例如：巨型蜘蛛、甦醒的木乃伊、地底竄出的烈火與
        擁有劇毒的蛇……都將讓你只能丟下一切逃命。但是傳聞中無價的古印加神器就在這裡，只有能克服心理恐懼的人才有機會得到它！‍
        你究竟有多勇敢？要有多少的寶物才能夠滿足你？玩過印加寶藏後你才會知道！`,
        thumbnail: 'https://pic.pimg.tw/merrich999/1438921426-2198007271.jpg?v=1438921428',
        time: '2018/04/06',
        star: 3
      },
      {
        id: '3',
        title: '地城寵物',
        previewText: '在《地城寵物》中，你將經營一家面向地城領主的寵物商店。遊戲結束時',
        description: `一開始你只有自己的家人、一些金幣和一個又髒又舊的籠子。整局遊戲會進行5-6回合，每個回合你會派遣自己
        的家人去購買寵物、寵物籠子和食物等。沒有外出購物的小魔怪們則會幫忙照顧這些寵物，取悅它們，清洗他們的籠子以及觀察
        它們的生長情況。`,
        thumbnail: 'http://bghut.com/images/201707/goods_img/6250_G_1500636597469.jpg',
        time: '2018/05/15',
        star: 1
      },
      {
        id: '4',
        title: '璀璨寶石',
        previewText: '在「璀璨寶石」這款遊戲中，你扮演文藝復興時期的富商',
        description: `璀璨寶石桌上遊戲，擁有優雅華麗的美術風格，引領玩家進入文藝復興的歐洲地區，擁有最多的寶石將會吸引貴族前往投資。
        利用手上的資源獲取礦脈、運輸方式以及工匠，工匠將會把你手上的原石冶煉成完美無瑕的寶石！挑選你的寶石，購買發展卡，
        從而為你贏得紅利和聲望，紅利可以讓你購買到更具價值的發展卡，貴族的來訪可以讓你獲得更多的聲望，而聲望將決定最終的贏家！`,
        thumbnail: 'http://bghut.com/images/201411/goods_img/4421_G_1416551550970.jpg',
        time: '2018/10/10',
        star: 5
      }
    ],
    loadedNews: [
      {
        content: '桌遊開團囉~~ 趕快一起來玩吧，開團日期為2018-05-05',
        date: '2018-05-01'
      },
      {
        content: '新桌遊上架囉，預計下周要開箱唷。想嘗鮮的朋友記得別錯過唷',
        date: '2018-05-01'
      },
      {
        content: '本週桌遊因颱風攪局所以暫停一次QQ',
        date: '2018-04-12'
      },
      {
        content: '桌遊開團囉~~ 一起放鬆一下吧，開團日期為2018-03-15',
        date: '2018-03-10'
      },
      {
        content: '新桌遊上架囉，預計下周要開箱唷。想嘗鮮的朋友記得別錯過唷',
        date: '2018-03-01'
      },
      {
        content: '本週桌遊因忘記把桌遊帶來所以暫停一次><"',
        date: '2018-02-10'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedGames (state) {
      return state.loadedGames
    },
    originGames (state) {
      return state.loadedGames
    },
    featuredGames (state, getters) {
      return getters.loadedGames.slice(0, 5)
    },
    newGames (state, getters) {
      var tempGames = []
      tempGames = getters.originGames.sort((itemA, itemB) => {
        return moment(itemA.time) < moment(itemB.time)
      })

      return tempGames.slice(0, 4)
    },
    hotGames (state, getters) {
      var tempGames = []
      tempGames = getters.originGames.sort((itemA, itemB) => {
        return itemA.star < itemB.star
      })

      return tempGames.slice(0, 4)
    },
    loadedNews (state) {
      return state.loadedNews
    },
    featuredNews (state, getters) {
      return getters.loadedNews.slice(0, 5)
    }
  }
})
