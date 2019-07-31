<template>
  <div class="shops-container">
    <ul>
      <li v-for="(item, index) in shopsList"
          :key="index">
        <img :src="item.img"
             alt="">
        <div class="info">
          <h1 class="name">{{item.name}}</h1>
          <div class="star">
            <el-rate v-model="item.star"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="{value}">
            </el-rate>
            <span class="perCons">￥{{ item.perCons }}/人</span>
          </div>
          <div class="address">
            <span class="area">{{ item.area }}</span>
            <span class="type">{{ item.type }}</span>
            <span class="distance">{{ item.distance }}km</span>
          </div>
          <div class="tuan"><span class="icon">团</span><span>{{ item.tuan }}</span></div>
          <div class="coupon"
               v-show="item.coupon != ''"><span class="icon">券</span><span>{{ item.coupon }}</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shopsList: []
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
    }
  }
}
</script>

<style lang="scss" scoped>
.shops-container {
  width: 100%;
  color: #424242;
  ul {
    margin: 20px 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    li {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 40px;
      }

      &::after {
        content: "";
        clear: both;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        position: absolute;
        bottom: -20px;
        left: 0px;
      }

      &:last-child::after {
        width: 0px;
      }

      img {
        width: 80px;
        height: 70px;
        float: left;
        margin-right: 10px;
        flex: 1;
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
          display: inline-block;

          &::after {
            content: "";
            clear: both;
            display: block;
          }
          .el-rate {
            display: inline-block;
            vertical-align: middle;

            .el-rate__icon {
              margin-right: none !important;
            }
          }
          .perCons {
            margin-left: 20px;
          }
        }

        .address {
          display: flex;

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
          display: inline-block;
          width: 250px;
          height: 20px;
          line-height: 20px;
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
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          .icon {
            background-color: #f40;
          }
        }
      }
    }
  }
}
</style>
