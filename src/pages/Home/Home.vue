<template>
  <div class="home-container">
    <HomeHeader />
    <Slider />
    <HomeCoupon />
    <!-- <Dropdown /> -->
    <ShopsList />
  </div>
</template>

<script>

import HomeHeader from '../../pages/Home/HomeHeader.vue'
import Slider from '../../pages/Home/HomeSlider.vue'
import HomeCoupon from '../../pages/Home/HomeCoupon.vue'
// import Dropdown from '../../components/Shops/ShopDropdown.vue'
import ShopsList from '../../components/Shops/ShopsList.vue'

export default {
  components: {
    HomeHeader,
    Slider,
    HomeCoupon,
    // Dropdown,
    ShopsList
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 50px 0;
}
</style>
