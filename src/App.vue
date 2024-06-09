<template>
  <div id="app">
    <HomeSection>

    </HomeSection>
  </div>

</template>

<script>
import HomeSection from './components/HomeSection.vue'
import './assets/reset.css'

  export default {
    name: 'App',
    components: {
      HomeSection
    }
  }
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
// @import '@/assets/main.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
