<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <router-link to="/" tag="li" class="nav-link"><a>HOME</a></router-link>
        <!-- <router-link to="" class="nav-link"><a>GAMES</a></router-link>
        <router-link to="" class="nav-link"><a>CART</a></router-link> -->
        <router-link to="/about" tag="li" class="nav-link"><a>ABOUT</a></router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.main-header
  position: fixed
  top: 0
  left: 0
  width: 100%
  background: #78A1BB
  height: 64px

.main-nav
  height: 100%

.nav-links
  list-style: none
  maring: 0
  padding: 0
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.nav-link
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  margin: 0 1rem
  padding: 0.3rem
  & a
    display: block
    text-decoration: none
    color: white
  & a:hover, & a:active
    color: #ff0000
</style>

