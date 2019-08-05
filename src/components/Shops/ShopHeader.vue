<template>
  <Header class="header-container">
    <a @click="$router.back(-1)"
       class="iconfont iconfontjiantou-zuo left"
       slot="left"></a>
    <h1 slot="center"></h1>
    <span slot="right"
          class="right">
      <a class="iconfont iconfontfenxiang share"
         @click="handleShare"></a>
      <a class="iconfont iconfontguanzhu-yiguanzhu is-collect"
         v-if="isCol"
         @click="handleCollect"></a>
      <a class="iconfont iconfontguanzhu-weiguanzhu"
         @click="handleCollect"
         v-else></a>
      <a class="iconfont iconfontshenglvehao more"
         href="#topPopover"></a>
      <TopPopover :popoverList="list" />

      <mt-actionsheet v-model="isShare"
                      :actions="shareList">
      </mt-actionsheet>
    </span>
  </Header>
</template>

<script>
import Header from '../Header/HeaderSearch.vue'
// 查问弹出菜单
import TopPopover from '../../components/Header/HeaderTopPopover.vue'
export default {
  data () {
    return {
      isCol: false,
      isShare: false,
      list: [
        {
          icon: 'iconfont iconfontshouye',
          content: '首页'
        },
        {
          icon: 'iconfont iconfontsousuo',
          content: '搜索'
        },
        {
          icon: 'iconfont iconfontfangan',
          content: '我的订单'
        },
        {
          icon: 'iconfont iconfontguanzhu-weiguanzhu',
          content: '我的收藏'
        },
        {
          icon: 'iconfont iconfonteeb',
          content: '信息报错'
        },
        {
          icon: 'iconfont iconfonte',
          content: '举报商家'
        }
      ],
      shareList: [
        {
          name: '微信好友',
          method () {
            // console.log('微信好友')
          }
        },
        {
          name: '朋友圈',
          method () {
            // console.log('朋友圈')
          }
        },
        {
          name: 'QQ',
          method () {
            // console.log('QQ')
          }
        },
        {
          name: 'QQ空间',
          method () {
            // console.log('QQ空间')
          }
        },
        {
          name: '新浪微博',
          method () {
            // console.log('新浪微博')
          }
        },
        {
          name: '复制',
          method () {
            // console.log('复制')
          }
        },
        {
          name: '更多',
          method () {
            // console.log('更多')
          }
        }
      ],
    }
  },
  components: {
    Header,
    TopPopover,
  },
  methods: {
    handleCollect () {
      this.isCol = !this.isCol
    },
    handleShare () {
      this.isShare = !this.isShare
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: transparent;

  .is-collect {
    color: #007aff;
  }

  a {
    color: #424242;
    margin: 0 5px;
    font-size: 20px;
  }

  h1 {
    flex: 1;
  }

  #topPopover {
    height: 220px;
  }
}
</style>
