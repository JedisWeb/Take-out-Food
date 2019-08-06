<template>
  <div class="person-container">
    <Header />
    <div>
      <ul>
        <li>
          <span class="iconfont iconfontguanzhu-yiguanzhu">
          </span>
          <span class="content">收藏</span>
        </li>
        <li>
          <span class="iconfont iconfontbianji">
          </span>
          <span class="content">评价</span>
        </li>
        <li>
          <span class="iconfont iconfonte2">
          </span>
          <span class="content">红包/卡券</span>
        </li>
        <li>
          <span class="iconfont iconfonte3">
            <mt-badge size="small"
                      color="#f00"
                      class="badge">3</mt-badge>
          </span>
          <span class="content">消息</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from './PersonHeader.vue'
export default {
  data () {
    return {
      list: [
        {
          icon: "iconfont iconfontguanzhu-yiguanzhu",
          content: "收藏"
        },
        {
          icon: "iconfont iconfontbianji",
          content: "评价"
        },
        {
          icon: "iconfont iconfonte2",
          content: "红包/卡券"
        },
        {
          icon: "iconfont iconfonte3",
          content: "消息"
        },
      ]
    }
  },
  components: {
    Header,
  }
}
</script>

<style lang="scss" scoped>
.person-container {
  padding: 100px 0 50px;

  ul {
    display: flex;
    background-color: #007aff;
    color: #fff;
    padding: 20px;
    li {
      flex: 1;
      float: left;
      display: flex;
      flex-flow: column wrap;
      text-align: center;
      &:last-child {
        .iconfont {
          position: relative;
        }
        .badge {
          position: absolute;
          top: 0px;
          right: 20px;
        }
      }
      .iconfont {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .content {
        font-size: 14px;
      }
    }
  }
}
</style>
