<template>
  <div class="header-container">
    <Search>
      <!-- Logo -->
      <span class="iconfont iconfontwaimai"
            id="left"
            slot="left"></span>
      <!-- <span id="left"
            slot="left">襄阳</span> -->
      <!-- 搜索框 -->
      <span slot="center"
            id="search">
        <input type="text"
               class="mui-input-clear"
               placeholder="张记黄焖鸡(外卖满20减2)"
               disabled>
        <span class="iconfont iconfontsousuo search-icon"></span>
      </span>
      <!-- 扫一扫 -->
      <span slot="right">
        <a class="iconfont iconfontjia"
           id="right"
           href="#topPopover"></a>
        <!-- 扫一扫弹出框 -->
        <TopPopover :popoverList="list" />

      </span>
    </Search>
  </div>

</template>

<script>

import TopPopover from '../../components/Header/HeaderTopPopover.vue'
import Search from '../../components/Header/HeaderSearch.vue'
export default {
  data () {
    return {
      list: [
        {
          icon: 'iconfont iconfontsaoyisao',
          content: '扫一扫'
        },
        {
          icon: 'iconfont iconfontfukuanma',
          content: '付款码'
        },
        {
          icon: 'iconfont iconfontea',
          content: '开发票'
        },
        {
          icon: 'iconfont iconfonthuochepiao',
          content: '火车票'
        },
        {
          icon: 'iconfont iconfontjipiao',
          content: '机票'
        }
      ]
    }
  },
  components: {
    Search,
    TopPopover
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #007aff;
  color: #fff;
  text-align: center;
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .iconfont {
    color: #fff;
  }

  #search {
    height: 50px;
    line-height: 50px;
    display: inline-block;
    color: #424242;
    position: relative;

    input {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      border-radius: 10px;
      text-indent: 1em;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .search-icon {
      position: absolute;
      top: 0px;
      left: 12px;
      color: #424242;
      font-size: 14px;
    }
  }

  #left {
    font-size: 26px;
    float: left;
  }
  #right {
    float: right;
    font-size: 26px;
    color: #fff;
  }
}
</style>
