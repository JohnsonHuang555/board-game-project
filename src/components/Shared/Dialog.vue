<template>
  <v-dialog :value="true" persistent max-width="350">
    <v-card>
      <v-card-title class="headline"><v-icon color="primary" class="mr-2">{{ dialogIcon }}</v-icon>{{ dialogTitle }}</v-card-title>
      <v-card-text v-if="dialogAction === 'logout'" class="card-text">{{ dialogContent }}</v-card-text>
      <v-card-text class="card-text" v-else-if="dialogAction === 'changePassword'">
        {{ dialogContent }}
        <v-text-field
          label="Email"
          v-model="email"
          :rules="[checkEmailFormat]"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="onAction(false)">Cancel</v-btn>
        <v-btn color="primary" outline @click.native="onAction(true)" :disabled="loading" :loading="loading">{{ dialogBtnConfirm }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'app-dialog',
  props: {
    dialogAction: {
      type: String,
      default: '',
      required: true
    },
    dialogIcon: {
      type: String,
      default: 'info',
      required: false
    },
    dialogContent: {
      type: String,
      default: '',
      required: false
    },
    dialogTitle: {
      type: String,
      default: 'Confirm',
      required: false
    },
    dialogBtnConfirm: {
      type: String,
      default: 'OK',
      required: true
    }
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    onAction (val) {
      this.$emit(this.dialogAction, { value: val, email: this.email})
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    checkEmailFormat () {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !pattern.test(this.email) ? 'Invalid email' : true
    }
  }
}
</script>

<style lang="sass" scoped>
.card-text
  font-size: 16px
</style>
