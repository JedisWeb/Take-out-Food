<template>
  <div class="shops-container">
    <!-- <mt-spinner type="fading-circle"></mt-spinner> -->
    <!-- <mt-loadmore :top-method="loadTop"
                 @top-status-change="handleTopChange"
                 :bottom-method="loadBottom"
                 @bottom-status-change="handleBottomChange"
                 :auto-fill="false"
                 ref="loadmore"> -->
    <ul class="mui-table-view mui-iframe-wrapper">
      <router-link to="/home"
                   tag="li"
                   v-for="(shop, index) in shopsList"
                   :key="index"
                   class="mui-table-view-cell">
        <div class="img">
          <img :src="shop.img"
               alt=""
               v-lazy.shops-container="shop.img">
          <div v-if="isOpen(shop)"
               class="open">
            <span class="iconfont iconfonted"></span>
            <span>营业中</span>
          </div>
          <div v-else
               class="close">
            <span class="iconfont iconfonted1"></span>
            <span>休息中</span>
          </div>
        </div>
        <div class="info">
          <h1 class="name">{{shop.name}}</h1>
          <div class="star">
            <el-rate v-model="shop.star"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}">
            </el-rate>
            <span class="perCons">￥{{ shop.perCons }}/人</span>
          </div>
          <div class="address">
            <span class="area">{{ shop.area }}</span>
            <span class="type">{{ shop.type }}</span>
            <span class="distance">{{ shop.distance }}km</span>
          </div>
          <div class="tuan"><span class="icon">团</span><span>{{ shop.tuan }}</span></div>
          <div class="coupon"
               v-if="shop.coupon != ''"><span class="icon">券</span><span>{{ shop.coupon }}</span></div>
          <div class="take-out"
               v-if="shop.takeOut"><span class="icon">外</span>外卖配送</div>
        </div>
      </router-link>
    </ul>
    </mt-loadmore>
  </div>
</template>

<script>

export default {
  data () {
    return {
      shopsList: [],
      loading: false
    }
  },
  created () {
    this.getShopsList()
  },
  methods: {
    getShopsList () {
      this.axios.get('/data/shops.json')
        .then(res => {
          // console.log(res)
          if (res.data.status === 0) {
            this.shopsList = res.data.message
          } else {
            mui.toast('数据加载失败', {
              duration: 1000
            })
          }
        }).catch(err => {
          // console.log(err)
        })
    },
    isOpen (shop) {
      let am = this.split(shop.openTime.am)
      let pm = this.split(shop.openTime.pm)
      return this.isScope(am) || this.isScope(pm)
    },
    split (str) {
      return str.split('-').map(item => item.split(':'));
    },
    isScope (arr) {
      let firstTime = arr[0]
      let lastTime = arr[1]
      let date = new Date()
      if (date.getHours() >= firstTime[0] && date.getHours() <= lastTime[0]) {
        if (date.getMinutes() > firstTime[1] || date.getMinutes() < lastTime[1]) {
          return true
        }
      }
      return false;
    },
    handleTopChange (status) {
      this.loading = status
    },
    loadTop () {
      this.handleTopChange('loading')
      this.getShopsList()
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
        this.loading = false
      }, 1000)
      // console.log(this.shopsList)
    },
    handleBottomChange (status) {
      this.allLoaded = status
    },
    loadBottom () {
      this.handleTopChange('loading')
      this.getShopsList()
      setTimeout(() => {
        this.$refs.loadmore.onBottomLoaded();
        this.allLoaded = false;// 若数据已全部获取完毕
      }, 1000)
      // console.log(this.shopsList)
    }
  }
}
</script>

<style lang="scss" scoped>
.shops-container {
  height: 100%;
  width: 100%;
  color: #424242;
  ul {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 40px;

    li {
      padding: 20px 15px;
      display: flex;
      position: relative;

      &:not(:last-child)::after {
        content: "";
        clear: both;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        position: absolute;
        bottom: 0px;
        left: 0px;
      }

      .img {
        flex: 1;
        display: flex;
        flex-flow: column wrap;
        text-align: center;
        font-size: 14px;
        margin-right: 10px;

        img {
          width: 80px;
          height: 70px;
          margin-bottom: 20px;
        }

        .open {
          display: inline-block;
          text-align: center;
          color: #007aff;
        }

        .close {
          color: #ccc;
        }
      }

      .info {
        width: 250px;
        display: inline-block;
        flex: 3;

        & > *:not(:last-child) {
          margin-bottom: 10px;
        }

        .name {
          font-family: "PingFang SC";
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .star {
          &::after {
            content: "";
            clear: both;
            display: block;
          }
          .el-rate {
            display: inline-block;
            vertical-align: middle;

            .el-rate__item {
              width: 18px;
              margin-right: -6px !important;
            }
          }
          .perCons {
            margin-left: 20px;
          }
        }

        .address {
          display: flex;
          font-size: 16px;
          height: 20px;
          line-height: 20px;

          & > * {
            flex: 1;
          }
        }

        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          color: #fff;
          text-align: center;
          line-height: 20px;
          margin-right: 10px;
          font-size: 14px;
          border-radius: 1px;
        }

        .tuan {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          .icon {
            background-color: #007aff;
          }
        }

        .coupon {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          .icon {
            background-color: #f40;
          }
        }

        .take-out {
          .icon {
            background-color: orange;
          }
        }
      }
    }
  }
}
</style>
