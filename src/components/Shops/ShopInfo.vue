<template>
  <div class="shopinfo-container">
    <div class="header">
      <a @click="$router.back(-1)"
         class="iconfont iconfontjiantou-zuo left"></a>
      <h1></h1>
      <a class="iconfont iconfontfenxiang share"
         @click="handleShare"></a>
      <a class="iconfont iconfontguanzhu-yiguanzhu is-collect"
         v-if="isCol"
         @click="handleCollect"></a>
      <a class="iconfont iconfontguanzhu-weiguanzhu"
         @click="handleCollect"
         v-else></a>
      <a class="iconfont iconfontshenglvehao more"
         href="#topPopover"></a>
      <TopPopover :popoverList="list" />

      <mt-actionsheet v-model="isShare"
                      :actions="shareList">
      </mt-actionsheet>

    </div>
    <div class="shop">
      <div class="info">
        <div class="left">
          <div class="name">{{ shop.name }}</div>
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
        <p class="img">
          <el-image style="width:100px;height:80px;"
                    :src="shop.img"
                    :preview-src-list="shop.imgList">
          </el-image>
        </p>
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
    <div class="navbar">
      <el-tabs v-model="activeNavName">
        <el-tab-pane label="优惠信息">
          <div v-if="shop.coupon.length !== 0">
            <h1>代金券</h1>
            <Coupon :shop="shop.coupon" />
          </div>
          <h1>到店吃套餐</h1>
          <SetMenu />
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
// 查问弹出菜单
import TopPopover from '../../components/Header/TopPopover.vue'
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
      list: [
        {
          icon: 'iconfont iconfontshouye',
          content: '首页'
        },
        {
          icon: 'iconfont iconfontsousuo',
          content: '搜索'
        },
        {
          icon: 'iconfont iconfontfangan',
          content: '我的订单'
        },
        {
          icon: 'iconfont iconfontguanzhu-weiguanzhu',
          content: '我的收藏'
        },
        {
          icon: 'iconfont iconfonteeb',
          content: '信息报错'
        },
        {
          icon: 'iconfont iconfonte',
          content: '举报商家'
        }
      ],
      isCol: false,
      isShare: false,
      shareList: [
        {
          name: '微信好友',
          method () {
            // console.log('微信好友')
          }
        },
        {
          name: '朋友圈',
          method () {
            // console.log('朋友圈')
          }
        },
        {
          name: 'QQ',
          method () {
            // console.log('QQ')
          }
        },
        {
          name: 'QQ空间',
          method () {
            // console.log('QQ空间')
          }
        },
        {
          name: '新浪微博',
          method () {
            // console.log('新浪微博')
          }
        },
        {
          name: '复制',
          method () {
            // console.log('复制')
          }
        },
        {
          name: '更多',
          method () {
            // console.log('更多')
          }
        }
      ],
      activeNavName: ''
    }
  },
  created () {
    this.getShop()
    // $(.header.star).
  },
  components: {
    TopPopover,
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
    },
    handleCollect () {
      this.isCol = !this.isCol
    },
    handleShare () {
      this.isShare = !this.isShare
    }
  }
}
</script>

<style lang="scss" scoped>
.shopinfo-container {
  padding-bottom: 50px;
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    display: flex;
    border-bottom: 1px solid #ccc;

    .is-collect {
      color: #007aff;
    }

    h1 {
      flex: 1;
    }

    a {
      color: #424242;
      margin: 0 5px;
      font-size: 20px;
    }

    #topPopover {
      height: 220px;
    }
  }
  .shop {
    padding: 10px;

    .info {
      display: flex;
      .left {
        font-size: 14px;
        flex: 1;
        & > * {
          margin: 5px 0px;
        }
        .name {
          font-size: 20px;
          font-weight: 600;
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
        margin-right: 20px;
        line-height: 20px;
        .distance {
          margin-left: 10px;
          color: #ccc;
        }
      }
      .tel {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        margin-right: 10px;
        flex: 1;
        float: right;
      }
    }
  }

  .navbar {
    .el-tabs__header {
      .el-tabs__nav-wrap {
        display: flex;
        .el-tabs__item {
          flex: 1;
        }
      }
    }
    .el-tabs__content {
      .el-tab-pane {
        padding: 10px;
      }
    }
  }
}
</style>
