<template>
  <div class="recommend-container">
    <p class="title">
      <span class="left">推荐菜</span>
      <span class="right">查看更多<span class="iconfont iconfontjiantou-you"></span></span>
    </p>
    <p class="daz">
      <span class="iconfont iconfontdazhongdianping"></span>
      <span>大众点评·网友推荐（8）</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['shop']
}
</script>

<style lang="scss" scoped>
.recommend-container {
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
  .daz {
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    .iconfont {
      color: #f40;
      font-size: 20px;
      margin-right: 5px;
    }

    &:last-child {
      font-size: 14px;
      font-weight: 700;
    }
  }
}
</style>
