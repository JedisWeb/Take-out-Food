<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <ul>
          <li v-for="(item, index) in swiperPage1"
              :key="index">
            <img :src="item.icon"
                 alt="">
            <span class="content">{{ item.content }}</span>
          </li>
        </ul>
      </div>
      <div class="swiper-slide">
        <ul>
          <li v-for="(item, index) in swiperPage2"
              :key="index">
            <img :src="item.icon"
                 alt="">
            <span class="content">{{ item.content }}</span>
          </li>
        </ul>
      </div>
      <div class="swiper-slide">
        <ul>
          <li v-for="(item, index) in swiperPage3"
              :key="index">
            <img :src="item.icon"
                 alt="">
            <span class="content">{{ item.content }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      swiperPage1: [],
      swiperPage2: [],
      swiperPage3: [],
    }
  },
  created () {
    this.getPage()
  },
  methods: {
    getPage () {
      this.axios.get('/data/swiperPage1.json').then(res => {
        if (res.data.status === 0) {
          this.swiperPage1 = res.data.message
        } else {
          mui.toast('数据加载失败', {
            duration: 1000
          })
        }
      })
      this.axios.get('/data/swiperPage2.json').then(res => {
        if (res.data.status === 0) {
          this.swiperPage2 = res.data.message
        } else {
          mui.toast('数据加载失败', {
            duration: 1000
          })
        }
      })
      this.axios.get('/data/swiperPage3.json').then(res => {
        if (res.data.status === 0) {
          this.swiperPage3 = res.data.message
        } else {
          mui.toast('数据加载失败', {
            duration: 1000
          })
        }
      })
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      // loop: true, // 循环模式选项
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
  color: #424242;
  ul {
    display: inline-block;
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    li {
      width: 85px;
      display: flex;
      flex: 1;
      flex-flow: column wrap;
      float: left;
      text-align: center;

      img {
        width: 40px;
        height: 40px;
        margin: 10px auto;
      }

      .iconfont {
        display: inline-block;
        margin: 10px 0;

        &::before {
          font-size: 40px;
        }
      }
    }
  }
}
</style>