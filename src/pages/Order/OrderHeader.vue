<template>
  <Header class="header-container">
    <span class="center"
          slot="center">我的订单</span>
    <span slot="right"
          class="iconfont iconfontsousuo right"></span>
  </Header>
</template>

<script>
import Header from '../../components/Header/HeaderSearch.vue'
export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #007aff;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  display: flex;

  .center {
    flex: 1;
  }

  .right {
    float: right;
    font-size: 20px;
  }
}
</style>
