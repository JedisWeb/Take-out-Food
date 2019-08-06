<template>
  <div class="shopinfo-container">
    <Header :name="shop.name" />
    <img :src="shop.img"
         class="bg-img">
    <div class="shop">
      <div class="name">{{ shop.name }}</div>
      <div class="info">
        <p class="img">
          <el-image :src="shop.img"
                    :preview-src-list="shop.imgList">
          </el-image>
        </p>
        <div class="right">
          <p class="star">
            <el-rate v-model="shop.star"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}分"
                     id="rate">
            </el-rate>
          </p>
          <p class="comment">
            <span>
              ￥{{ shop.perCons }}/人
            </span>
            <span>
              {{ shop.commentNum }}人评
            </span>
          </p>
          <p class="time">
            <BusinessStatus :shop="shop"></BusinessStatus>
            <span>&nbsp;{{ shop.openTime.am }}&nbsp;</span>

            <span>{{ shop.openTime.pm }}</span>
          </p>
        </div>
      </div>
      <p class="position">
        <span class="iconfont iconfonte1 gps"></span>
        <span class="address">
          {{ shop.address }}
          <span class="distance">
            距您{{ shop.distance }}km
          </span>
        </span>
        <span class="iconfont iconfontdianhua tel"></span>
      </p>
    </div>
    <div>
      <p id="navbar">
        <a class="is-active"
           href="#prefrencetial">优惠</a>
        <a href="#recommend">菜品</a>
        <a href="#comment">评价</a>
      </p>
    </div>
    <div id="prefrencetial">
      <Coupon v-if="shop.coupon.length !== 0"
              :shop="shop.coupon" />
      <SetMenu v-if="shop.tuan.length !== 0" />
    </div>
    <div id="recommend">
      <Recommend />
    </div>
    <div id="comment">
      <Comment :num="shop.commentNum" />
      <Question />
    </div>
    <Nearby />
    <MoreShop />
  </div>
</template>

<script>
import Header from './ShopHeader.vue'
// 营业状态
import BusinessStatus from '../BusinessStatus.vue'
// 代金券
import Coupon from '../CouponComp.vue'
// 套餐
import SetMenu from './ShopSetMenu.vue'
// 推荐菜
import Recommend from './ShopRecommend.vue'
// 餐厅评价
import Comment from './ShopComment.vue'
// 问答
import Question from './ShopQuestion.vue'
// 附近吃喝玩乐
import Nearby from './ShopNearby.vue'
// 更多商家
import MoreShop from './ShopMore.vue'
export default {
  data () {
    return {
      id: this.$route.params.id,
      shop: {},
      activeNavName: ''
    }
  },
  created () {
    this.getShop()
  },
  mounted () {
    $('#navbar>a').on('click', e => {
      console.log(e)
      e = e || window.event
      let target = e.target || e.srcElement
      console.log(target)
      if (target.hasClass('is-active')) {
        // target.removeClass('is-active')
      } else {
        target.addClass('is-active')
      }
    })
  },
  components: {
    Header,
    BusinessStatus,
    Coupon,
    SetMenu,
    Recommend,
    Comment,
    Question,
    Nearby,
    MoreShop,
  },
  methods: {
    getShop () {
      this.axios.get('/data/shops.json').then(res => {
        if (res.data.status === 0) {
          this.shop = res.data.message[this.id]
        }
      }).catch(err => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shopinfo-container {
  padding: 50px 0px;

  .bg-img {
    width: 100%;
    height: 50%;
    position: absolute;
    top: -150px;
    left: 0;
    opacity: 0.3;
    z-index: -1;
  }

  .shop {
    padding: 10px;
    margin: 0 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #aaa;

    .name {
      font-size: 20px;
      font-weight: 600;
    }

    .info {
      display: flex;
      .img {
        flex: 1;
        display: inline-block;
        margin: 10px 10px 10px 0;
      }

      .right {
        font-size: 14px;
        flex: 2;
        & > * {
          margin: 10px 0px;
        }

        .star {
          display: flex;
          flex-flow: row nowrap;
          #rate {
            display: flex;
            flex-flow: row nowrap;
          }
          span {
            color: #888;
          }
        }
        .comment {
          display: flex;
          span {
            flex: 1;
          }
        }

        .time {
          color: #888;
          margin: 10px 0;
        }
      }
    }

    .position {
      margin-top: 5px;
      display: flex;
      .address {
        flex: 1;
        line-height: 20px;
        font-size: 14px;
        .distance {
          margin-left: 10px;
          color: #ccc;
        }
      }
      .tel {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        margin-right: 10px;
      }
    }
  }

  #navbar {
    margin: 20px 0;
    a {
      font-size: 18px;
      margin: 0 10px;
      position: relative;
    }
    .is-active {
      color: #f40;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 1px;
        background-color: #f40;
      }
    }
  }
}
</style>
