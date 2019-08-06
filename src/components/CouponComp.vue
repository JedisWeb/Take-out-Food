<template>
  <div class="coupon-container">
    <!-- <h1>代金券</h1> -->
    <ul>
      <li v-for="(item, index) in list"
          :key="index">
        <div class="left">
          <h3 class="cash-coupon">{{ item[1] }}元代金券</h3>
          <p class="explain">
            <span>周一至周日</span>|
            <span>全场通用</span>|
            <span>不限张数</span>|
            <span>免预约</span>
          </p>
          <p>
            <span class="price">￥{{ item[0] }}</span>
            <span class="discount">{{ item | handleDiscount }}折</span>
          </p>
        </div>
        <div class="right">
          <button type="button">抢购</button>
          <p class="half-year-sell">半年售{{ Math.floor(Math.random() * 100) }}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  props: ['shop'],
  data () {
    return {
      s: this.shop,
      list: []
    }
  },
  created () {
    let reg = /\d+(\.\d+)?/g
    this.s.map((item) => {
      this.list.push(item.match(reg))
    })
    // console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
.coupon-container {
  margin: 0 10px;
  ul {
    li {
      position: relative;
      display: flex;
      margin: 10px 0px;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0px 0px 5px #aaa;
      .left {
        flex: 1;

        & > * {
          margin: 10px 0;
        }

        .explain {
          font-size: 12px;
          color: #888;

          span {
            margin: 0 5px;
          }
        }

        .price {
          color: #ec0;
          font-weight: 600;
        }

        .discount {
          border: 1px solid #ec2;
          border-radius: 14px;
          color: #ec2;
          padding: 3px;
          margin-left: 10px;
          font-size: 12px;
          // background-color: #f40;
        }
      }
      .right {
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
