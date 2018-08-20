<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Confirm</v-card-title>
      <v-card-text>您確定要登出?.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="onLogout(false)">Cancel</v-btn>
        <v-btn color="green darken-1" flat @click.native="onLogout(true)">Log Out</v-btn>
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
