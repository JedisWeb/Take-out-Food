<template id="temp">
  <div id="topPopover"
       class="mui-popover">
    <div class="mui-popover-arrow"></div>
    <div class="mui-scroll-wrapper">
      <ul>
        <li v-for="(popover, index) in list"
            :key="index">
          <a href="javascript:void(0)">
            <span :class="popover.icon"></span>
            <span class="label-content">{{ popover.content }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['popoverList'],
  data () {
    return {
      list: this.popoverList
    }
  }
}
</script>

<style lang="scss" scoped>
#topPopover {
  position: absolute;
  top: 50px !important;
  right: 20px;
  width: 130px;
  height: 186px;

  .mui-popover-arrow {
    left: 97px !important;
  }

  .mui-scroll-wrapper {
    margin: 0;
    text-align: center;

    ul {
      display: inline-block;
      li {
        height: 30px;
        line-height: 30px;
        text-align: left;
        font-size: 18px;
        position: relative;
        margin: 6px 0px;

        &:not(:last-child)::after {
          content: "";
          width: 100px;
          height: 1px;
          position: absolute;
          top: 33px;
          left: -8px;
          background-color: #ccc;
        }
        a {
          color: #424242;
          .iconfont {
            font-size: 20px;
          }

          .label-content {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
