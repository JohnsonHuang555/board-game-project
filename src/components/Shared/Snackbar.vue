<template>
  <v-snackbar
    :value="true"
    bottom="bottom"
    right="right"
    :color="color"
    class="snackbar-text"
    :timeout="timeout">
      {{ txtSnackbar }}
    <v-btn
      flat
      @click="onDismissed">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'snackbar',
  data () {
    return {
      timeout: 4000,
    }
  },
  props: {
    txtSnackbar: {
      type: String,
      default: "",
      required: true
    },
    color: {
      type: String,
      default: "success",
      required: true
    }
  },
  methods: {
    onDismissed () {
      this.$emit('onDismissed')
    }
  }
}
</script>
