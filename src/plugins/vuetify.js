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
  VAlert,
  VAvatar,
  VMenu,
  VDialog,
  VProgressCircular,
  VSnackbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import { Scroll } from 'vuetify/es5/directives'

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
    VAlert,
    VAvatar,
    VMenu,
    VDialog,
    VProgressCircular,
    VSnackbar,
    transitions
  },
  directives: {
    Scroll
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
