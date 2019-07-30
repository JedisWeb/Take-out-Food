<template>
  <div class="home-container">

    <swiper />
  </div>
</template>

<script>

import swiper from '../../pages/Home/HomeSwiper.vue'
export default {
  components: {
    swiper
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>
