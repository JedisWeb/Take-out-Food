<template>
  <Header class="header-container">
    <img src="/images/head.jpg"
         slot="left">
    <span class="center"
          slot="center">Jedis</span>
    <span slot="right"
          class="iconfont iconfontshezhi right"></span>
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
  height: 100px;
  line-height: 100px;
  background-color: #007aff;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  display: inline-block;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    float: left;
    margin: 20px;
  }

  .center {
    // flex: 1;
    font-size: 20px;
    float: left;
  }

  .right {
    float: right;
    font-size: 20px;
  }
}
</style>
