<template>
  <div class="home-container">
    <HomeHeader />
    <Swiper />
    <HomeCoupon />
    <Shops />
  </div>
</template>

<script>

import HomeHeader from '../../pages/Home/HomeHeader.vue'
import Swiper from '../../pages/Home/HomeSwiper.vue'
import HomeCoupon from '../../pages/Home/HomeCoupon.vue'
import Shops from '../../components/Shops/Shops.vue'

export default {
  components: {
    HomeHeader,
    Swiper,
    HomeCoupon,
    Shops
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>
