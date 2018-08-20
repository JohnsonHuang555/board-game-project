import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
var moment = require('moment')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedGames: [],
    loadedNews: [],
    user: {
      id: 0,
      account: '',
      rentCart: []
    },
    loading: false,
    error: null,
  },
  mutations: {
    setLoadedGames (state, payload) {
      state.loadedGames = payload
    },
    setLoadedNews (state, payload) {
      state.loadedNews = payload
    },
    addToList (state, payload) {
      state.user.rentCart.push(payload)
    },
    removeGame (state, payload) {
      const index = state.user.rentCart.indexOf(payload)
      state.user.rentCart.splice(index, 1)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadedGames ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('games').once('value')
        .then((data) => {
          const games = []
          const obj = data.val()
          for (let key in obj) {
            games.push({
              id: key,
              title: obj[key].title,
              previewText: obj[key].previewText,
              description: obj[key].description,
              thumbnail: obj[key].thumbnail,
              time: obj[key].time,
              star: obj[key].star,
              type: obj[key].type,
              players: obj[key].players,
              duration: obj[key].duration,
            })
          }
          commit('setLoadedGames', games)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', true)
          }
        )
    },
    loadedNews ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('news').once('value')
        .then((data) => {
          let news = []
          const obj = data.val()
          for (let key in obj) {
            news.push({
              id: key,
              content: obj[key].content,
              date: obj[key].date
            })
          }

          news = news.slice().sort((itemA, itemB) => {
            return moment(itemA.time, "YYYY-MM-DD") < moment(itemB.time, "YYYY-MM-DD")
          })

          commit('setLoadedNews', news)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', true)
          }
        )
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              account: user.email,
              rentCart: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
            setTimeout(() => {
              commit('setLoading', false)
              commit('setError', error)
            }, 3000);
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              account: user.email,
              rentCart: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error, 'ddd')
            setTimeout(() => {
              commit('setLoading', false)
              commit('setError', error)              
            }, 2000);
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, account: payload.email, rentCart: []})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', { id: 0, account: '', rentCart: [] })
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedGames (state) {
      return state.loadedGames
    },
    featuredGames (state, getters) {
      return getters.loadedGames.slice(0, 5)
    },
    loadedNews (state) {
      return state.loadedNews
    },
    featuredNews (state, getters) {
      return getters.loadedNews.slice(0, 5)
    },
    loadedGame (state) {
      return (gameId) => {
        return state.loadedGames.find((game) => {
          return game.id === gameId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
