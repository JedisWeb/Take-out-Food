<template>
  <div class="content-container">
    <!-- <mt-header fixed
               title="固定在顶部"></mt-header> -->
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

<style lang="stylus" scoped>
.content-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
