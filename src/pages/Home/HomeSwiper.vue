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
      swiperPage1: [
        {
          icon: require("../../../static/images/home-swiper/icon_water ice_colou.png"),
          content: '美食'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_tea_coloured.png"),
          content: '外卖'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_rollup_coloured.png"),
          content: '超市/生鲜'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_sandwich_colour.png"),
          content: '酒店住宿'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_salad_coloured.png"),
          content: '民宿/公寓'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_pizza_coloured.png"),
          content: '摩拜'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_noodle_coloured.png"),
          content: '火车票/机票'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_milk_coloured.png"),
          content: '电影/演出'
        }
      ],
      swiperPage2: [
        {
          icon: require("../../../static/images/home-swiper/icon_lobster_coloure.png"),
          content: '休闲娱乐'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_kebabs_coloured.png"),
          content: '红包签到'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_juice_coloured.png"),
          content: '健身/游泳'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_doughnut_colour.png"),
          content: '免费领水果'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_icecream_colour.png"),
          content: '免费领福利'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_hotdog_coloured.png"),
          content: '周边游/游泳'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_fries_coloured.png"),
          content: '景点/门票'
        },
        {
          icon: require("../../../static/images/home-swiper/icon_drumsticks_colo.png"),
          content: '手机充值'
        }
      ],
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

<style lang="scss" scope>
.swiper-container {
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