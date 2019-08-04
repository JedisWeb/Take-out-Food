<template>
  <div class="setmenu-container">
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
            <span v-if="item.appoinment">&nbsp;|&nbsp;免预约</span>
          </p>
          <p class="price">
            <span class="new-price">￥{{ item.nowPrice }}</span>
            <span class="discount">{{ item.nowPrice/item.originalPrice*100 }}折</span>
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
      shop: {},
      tuan: []
      // id:this.$routes.params.id
    }
  },
  created () {
    this.getShop()
  },
  methods: {
    getShop () {
      this.axios.get('/data/shops.json').then(res => {
        if (res.data.status === 0) {
          this.shop = res.data.message[8]
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
  ul {
    li {
      display: flex;
      position: relative;
      padding: 15px 0;

      &:not(:last-child)::after {
        // &::after {
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
        width: 190px;
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
            font-size: 14px;
          }
        }

        .explain {
          span {
            color: #888;
            font-size: 14px;
          }
        }

        .price {
          height: 20px;
          .new-price {
            color: #ec0;
            font-weight: 600;
            font-size: 16px;
          }

          .discount {
            border: 1px solid #ec2;
            color: #ec2;
            padding: 1px 3px;
            margin: 0 10px;
            font-size: 10px;
          }

          .original-price {
            text-decoration: line-through;
            color: #888;
            font-size: 14px;
          }
        }
      }

      .buy {
        width: 80px;
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
          font-size: 14px;
          color: #888;
          text-align: center;
        }
      }
    }
  }
}
</style>
