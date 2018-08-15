<template>
  <v-alert
    @input="onClose"
    dismissible
    type="error"
    outline
    transition="scale-transition"
    :value="true"
  >
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: 'alert',
  props: ['text'],
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>
