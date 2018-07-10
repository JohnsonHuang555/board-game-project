<template>
  <div>
    <v-toolbar
    fixed
    class="primary"
    dark>
      <img src="../../public/img/icons/safari-pinned-tab.svg" alt="LOGO" width="50" height="50">
      <v-toolbar-title>
        ECS
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <span class="router">Home</span>
        </v-btn> 
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.router
  font-size: 18px
</style>

