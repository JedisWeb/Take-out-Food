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
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      swiperPage1: [],
      swiperPage2: [],
      swiperPage3: [
        {
          icon: require("../../../static/images/home-swiper/icon_cupcake_coloure.png"),
          content: '丽人/美发'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_crab_coloured.png"),
          content: '医学美容'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_coffee_coloured.png"),
          content: '亲子/乐园'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_cake_coloured.png"),
          content: '结婚/摄影'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_burger_coloured.png"),
          content: '学习培训'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_bread_coloured.png"),
          content: '生活服务'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_beer_coloured.png"),
          content: '家居/装修'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_egg_coloured.png"),
          content: '医疗/牙科'
        }
      ]
    }
  },
  created () {
    this.getPage()
    // let str = this.swiperPage3.reduce((pre, cur) => pre + cur))
    //   console.log(str)
  },
  methods: {
    getPage () {
      this.axios.get('/data/swiperPage1.json').then(res => {
        this.swiperPage1 = res.data.message
      })
        .catch(err => {
        })
      this.axios.get('/data/swiperPage2.json').then(res => {
        this.swiperPage2 = res.data.message
      })
        .catch(err => {
        })
      this.axios.get('/data/swiperPage3.json').then(res => {
        this.swiperPage3 = res.data.message
      })
        .catch(err => {
        })
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
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
      margin: 0 1px;

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