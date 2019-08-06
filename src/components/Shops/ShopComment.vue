<template>
  <div class="comment-container">
    <p class="title">
      <span class="left">餐厅评价</span>
      <span class="right">更多评价（{{ commentNum }}）
        <span class="iconfont iconfontjiantou-you"></span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data () {
    return {
      commentNum: this.num
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-container {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px #aaa;

  & > * {
    margin: 10px 0;
  }
  .title {
    height: 16px;
    line-height: 16px;
    .left {
      font-weight: 700;
    }
    .right {
      float: right;
      font-size: 12px;

      .iconfont {
        font-size: 12px;
      }
    }
  }
}
</style>