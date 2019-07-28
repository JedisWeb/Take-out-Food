<template>
  <div class="footer-container">
    <router-link to="/home"
                 tag="span">
      <span><i class="iconfont iconfontshouye"></i>首页</span>
    </router-link>
    <router-link to="/search"
                 tag="span">
      <span><i class="iconfont iconfontsousuo"></i>搜索</span>
    </router-link>
    <router-link to="/order"
                 tag="span">
      <span><i class="iconfont iconfontxiangqing"></i>订单</span>
    </router-link>
    <router-link to="/person"
                 tag="span">
      <span><i class="iconfont iconfontren-danren"></i>个人</span>
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
  border-top: 1px solid #ccc;
  line-height: 50px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 0px;
  bottom: 0px;

  a {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
  }
}
</style>
