<template>
  <div class="home-container">
    <HomeHeader />
    <Swiper />
    <HomeCoupon />
    <Dropdown />
    <ShopsList />
  </div>
</template>

<script>

import HomeHeader from '../../pages/Home/HomeHeader.vue'
import Swiper from '../../pages/Home/HomeSwiper.vue'
import HomeCoupon from '../../pages/Home/HomeCoupon.vue'
import Dropdown from '../../components/Shops/ShopDropdown.vue'
import ShopsList from '../../components/Shops/ShopsList.vue'

export default {
  components: {
    HomeHeader,
    Swiper,
    HomeCoupon,
    Dropdown,
    ShopsList
  },
  created () {
    let str = ''
    for (let i = 1; i <= 17; i++) {
      str += "\"/images/shops/10/10." + i + ".png\"" + ",\n"
    }
    console.log(str)
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>
