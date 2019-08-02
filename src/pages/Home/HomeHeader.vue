<template>
  <div class="container">
    <!-- Logo -->
    <span class="iconfont iconfontwaimai"
          slot="left"
          id="left"></span>
    <!-- 搜索框 -->
    <div class="mui-input-row mui-search"
         id="search">
      <input type="text"
             class="mui-input-clear"
             placeholder="张记黄焖鸡(外卖满20减2)"
             disabled>
      <span class="iconfont iconfontsousuo search-icon"></span>
    </div>
    <!-- 扫一扫 -->
    <a class="iconfont iconfontjia"
       slot="right"
       id="right"
       href="#topPopover"></a>
    <!-- 扫一扫弹出框 -->
    <TopPopover />
  </div>

</template>

<script>
import TopPopover from '../../components/Header/TopPopover.vue'
export default {
  components: {
    TopPopover
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #007aff;
  color: #fff;
  padding: 0 16px;
  text-align: center;

  .iconfont {
    color: #fff;
  }

  #search {
    height: 50px;
    line-height: 50px;
    display: inline-block;
    color: #424242;

    input {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      border-radius: 10px;
      text-indent: 1em;
      font-size: 14px;
    }

    .search-icon {
      position: absolute;
      top: 0px;
      left: 12px;
      color: #424242;
    }
  }

  #left {
    font-size: 34px;
    float: left;
  }
  #right {
    float: right;
    font-size: 28px;
    color: #fff;
  }
}
</style>
