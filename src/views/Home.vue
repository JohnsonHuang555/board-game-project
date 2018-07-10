<template>
  <v-container fluid>
    <v-jumbotron
      :gradient="gradient"
      dark
      src="https://s3.amazonaws.com/vuetify-docs/images/parallax/material2.jpg"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Gradient over Image</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
  })
}
</script>
