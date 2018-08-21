<template>
  <v-dialog :value="true" persistent max-width="350">
    <v-card>
      <v-card-title class="headline"><v-icon color="primary" class="mr-2">info</v-icon> Confirm</v-card-title>
      <v-card-text class="card-text">您確定要登出?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="onLogout(false)">Cancel</v-btn>
        <v-btn color="primary" outline @click.native="onLogout(true)">Log Out</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'app-dialog',
  methods: {
    onLogout (val) {
      this.$emit('logout', val)
    }
  }
}
</script>

<style lang="sass" scoped>
.card-text
  font-size: 16px
</style>
