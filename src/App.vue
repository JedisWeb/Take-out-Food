<template>
  <div class="content-container">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding-bottom: 50px;
}
</style>
