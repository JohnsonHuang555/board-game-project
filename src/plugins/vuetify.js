import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VCarousel,
  VGrid,
  VCard,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VCarousel,
    VGrid,
    VCard,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#EFF7F6', // 主色
    secondary: '#78A1BB', // 副色
    accent: '#FCFCFC', // 輔色
    error: '#E95858', // 桃紅
    success: '#78BB95', // 翠綠
    warning: '#FFC107',
    info: '#2196F3'
  },
})
