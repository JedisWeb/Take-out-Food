<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item, index) in bannerList"
           :key="index">
        <img :src="item"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      bannerList: ['/images/banner/1.png',
        '/images/banner/2.png',
        '/images/banner/3.png',
        '/images/banner/4.png']
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      autoplay: true, // 自动滚动
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
