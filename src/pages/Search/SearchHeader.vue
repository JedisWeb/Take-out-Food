<template>
  <Search class="header-container">
    <!-- <span class="iconfont iconfontjiantou-zuo"
          id="left"
          slot="left"
          @click="$router.back(-1)"></span> -->
    <a class="iconfont iconfonte1"
       id="left"
       slot="left"></a>
    <span slot="center"
          id="search">
      <input type="text"
             class="mui-input-clear"
             placeholder="阳光蛋糕"
             disabled>
      <span class="iconfont iconfontsousuo search-icon"></span>
    </span>
    <span slot="right"
          id="right">搜索</span>
  </Search>
</template>

<script>
import Search from '../../components/Header/HeaderSearch.vue'
export default {
  components: {
    Search,
  },
  created () {
    $(window).scrollTop(100)
    console.log($(window).scrollTop())
    // console.log('000000000000')
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: inline-block;
  text-align: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;

  #search {
    width: 260px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    color: #424242;
    position: relative;

    input {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      border-radius: 20px;
      border: none;
      text-indent: 1em;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #eee;
    }

    .search-icon {
      position: absolute;
      top: 0px;
      left: 12px;
      color: #424242;
      font-size: 14px;
    }
  }
  #right {
    color: #007aff;
    font-size: 16px;
  }
}
</style>
