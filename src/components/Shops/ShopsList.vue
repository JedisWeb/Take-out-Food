<template>
  <div class="shops-container">
    <ul class="mui-table-view">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   :bottomAllLoaded="allLoaded"
                   :auto-fill="false"
                   ref="loadmore">
        <router-link :to="'/home/shopslist/' + shop.id"
                     tag="li"
                     v-for="(shop, index) in shopsList"
                     :key="index"
                     class="mui-table-view-cell">
          <div class="img">
            <img :src="shop.img"
                 alt=""
                 v-lazy.shops-container="shop.img">
            <BusinessStatus :shop="shop" />
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
            <div class="tuan"><span class="icon">团</span><span>{{ shop.tuan[0].title }} &nbsp; {{ shop.tuan[1].title }}</span></div>
            <div class="coupon"
                 v-if="shop.coupon != ''">
              <span class="icon">券</span>
              <span v-for="(item, index) in shop.coupon"
                    :key="index">{{ item }} &nbsp;</span>
            </div>
            <div class="take-out"
                 v-if="shop.takeOut"><span class="icon">外</span>外卖配送</div>
          </div>
        </router-link>
      </mt-loadmore>
    </ul>
  </div>

</template>

<script>
import BusinessStatus from '../BusinessStatus'
export default {
  data () {
    return {
      shopsList: [],
      allLoaded: false
    }
  },
  created () {
    this.getShopsList()
  },
  components: {
    BusinessStatus
  },
  methods: {
    getShopsList () {
      this.axios.get('/data/shops.json')
        .then(res => {
          // console.log(res)
          if (res.data.status === 0) {
            this.shopsList = this.shopsList.concat(res.data.message)
            console.log('List.length:' + this.shopsList.length)
          } else {
            mui.toast('数据加载失败', {
              duration: 1000
            })
          }
        }).catch(err => {
          // console.log(err)
        })
    },
    loadTop () {
      setTimeout(() => {
        this.getShopsList()
        this.$refs.loadmore.onTopLoaded();//结束加载
      }, 1500)
    },
    loadBottom () {
      setTimeout(() => {
        this.getShopsList()
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();//结束加载
      }, 1500)
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

    li {
      padding: 15px 10px;
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
          margin: 0 auto;
          margin-bottom: 20px;
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
          color: #888;

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
          font-size: 14px;

          .icon {
            background-color: #007aff;
          }
        }

        .coupon {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;

          .icon {
            background-color: #f40;
          }
        }

        .take-out {
          font-size: 14px;
          .icon {
            background-color: orange;
          }
        }
      }
    }
  }
}
</style>
