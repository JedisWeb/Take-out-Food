<template>
  <div class="shopinfo-container">
    <Header />

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
            <span>&nbsp;&nbsp;{{ shop.openTime.am }}&nbsp;&nbsp;</span>

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
    <img :src="shop.img"
         class="bg-img">
    <div class="navbar">
      <el-tabs v-model="activeNavName">
        <el-tab-pane label="优惠信息">
          <div v-if="shop.coupon.length !== 0">
            <Coupon :shop="shop.coupon" />
          </div>
          <div v-if="shop.tuan.length !== 0">
            <SetMenu />
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户评论">
        </el-tab-pane>
        <el-tab-pane label="商家信息">
          <ul>
            <li v-for="n in 100"
                :key="n">---3----{{ n }}</li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
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
    // $(.header.star).
  },
  components: {
    Header,
    BusinessStatus,
    Coupon,
    SetMenu
  },
  methods: {
    getShop () {
      this.axios.get('/data/shops.json').then(res => {
        if (res.data.status === 0) {
          this.shop = res.data.message[this.id]
          // console.log(this.shop)
        }
      }).catch(err => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shopinfo-container {
  padding: 50px 0;

  .shop {
    padding: 10px;
    margin: 0 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #ccc;

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

  .bg-img {
    width: 100%;
    height: 50%;
    position: absolute;
    top: -150px;
    left: 0;
    opacity: 0.1;
    z-index: -1;
  }

  .navbar {
    .el-tabs__header {
      margin: -15px !important;
    }
    .el-tabs__content {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      .el-tab-pane {
        padding: 0 10px;
      }
    }
  }
}
</style>
