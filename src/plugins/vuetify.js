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
  VSelect,
  VSubheader,
  VTextField,
  VDataTable,
  VTooltip,
  VCheckbox,
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
    VSelect,
    VSubheader,
    VTextField,
    VDataTable,
    VTooltip,
    VCheckbox,
    transitions
  },
  theme: {
    primary: '#78A1BB',
    secondary: '#EFF7F6',
    accent: '#78A1BB',
    error: '#E95858',
    success: '#78BB95',
    warning: '#FFC107',
    info: '#2196F3'
  },
})
