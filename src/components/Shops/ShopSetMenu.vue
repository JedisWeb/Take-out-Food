<template>
  <div class="setmenu-container">
    <h1>到店吃套餐</h1>
    <ul>
      <li class="mui-table-view-cell"
          v-for="(item, index) in tuan"
          :key="index">
        <div class=img>
          <img :src="item.img"
               v-lazy.shops-container="item.img">
        </div>
        <div class="content">
          <p class="title">{{ item.title }}</p>
          <p class="foods">
            <span v-for="(f, index) in item.foods"
                  :key="index">{{ f.food }}、</span>
          </p>
          <p class="explain">
            <span>{{ item.explain }}</span>
            <span v-if="!item.appoinment">&nbsp;|&nbsp;免预约</span>
          </p>
          <p class="price">
            <span class="new-price">￥{{ item.nowPrice }}</span>
            <span class="discount">{{ [item.nowPrice,item.originalPrice] | handleDiscount }}折</span>
            <span class="original-price">￥{{ item.originalPrice }}</span>
          </p>
          <p></p>
        </div>
        <div class="buy">
          <button type="button">抢购</button>
          <p class="half-year-sell">半年售{{ item.sell }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      shop: {},
      tuan: [],
    }
  },
  created () {
    this.getShop()
  },
  methods: {
    getShop () {
      this.axios.get('/data/shops.json').then(res => {
        if (res.data.status === 0) {
          this.shop = res.data.message[this.id]
          this.tuan = this.shop.tuan
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
.setmenu-container {
  width: 100%;
  padding: 10px 10px 0 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ccc;
  ul {
    li {
      display: flex;
      position: relative;
      padding: 15px 0;

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
        margin-right: 10px;
        img {
          width: 90px;
          height: 80px;
        }
      }

      .content {
        width: 180px;
        & > :not(:last-child) {
          margin-bottom: 4px;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .foods {
          span {
            color: #888;
            font-size: 12px;
          }
        }

        .explain {
          span {
            color: #888;
            font-size: 12px;
          }
        }

        .price {
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          display: flex;
          flex-flow: row nowrap;
          .new-price {
            color: #ec0;
            font-weight: 600;
            font-size: 16px;
          }

          .discount {
            height: 14px;
            line-height: 14px;
            border: 1px solid #ec2;
            color: #ec2;
            padding: 1px 2px;
            margin: 2px 5px;
            font-size: 10px;
            text-align: center;
          }

          .original-price {
            text-decoration: line-through;
            color: #888;
            font-size: 12px;
          }
        }
      }

      .buy {
        width: 70px;
        text-align: center;
        button {
          background-color: #ec2;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          margin: 10px 0;
          border: none;
        }
        .half-year-sell {
          font-size: 12px;
          color: #888;
          text-align: center;
        }
      }
    }
  }
}
</style>
