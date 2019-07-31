<template>
  <div class="footer-container">
    <router-link to="/home"
                 tag="a"
                 class="is-active">
      <span class="iconfont iconfontshouye"></span>
      <span>首页</span>
    </router-link>
    <router-link to="/search"
                 tag="a">
      <span class="iconfont iconfontsousuo"></span>
      <span>搜索</span>
    </router-link>
    <router-link to="/order"
                 tag="a">
      <span class="iconfont iconfontxiangqing"></span>
      <span>订单</span>
    </router-link>
    <router-link to="/person"
                 tag="a">
      <span class="iconfont iconfontren-danren"></span>
      <span>个人</span>
    </router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 50px;
  // line-height: 50px;
  padding: 5px 0px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: #fff;

  a {
    flex: 1;
    color: #424242;
    text-align: center;

    span:nth-child(1) {
      display: inline-block;
      font-size: 24px;
      margin: 2px 0px;
    }

    span {
      font-size: 12px;
      display: flex;
      flex-flow: column wrap;
    }

    &.router-link-active {
      color: #007aff;
    }
  }
}
</style>
