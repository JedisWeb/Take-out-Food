<template>
  <div id="topPopover"
       class="mui-popover">
    <div class="mui-popover-arrow"></div>
    <div class="mui-scroll-wrapper">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont iconfontsaoyisao"></span>
            <span class="label-content">扫一扫</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont iconfontfukuanma"></span>
            <span class="label-content">付款码</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont iconfontea"></span>
            <span class="label-content">开发票</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont iconfonthuochepiao"></span>
            <span class="label-content">火车票</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont iconfontjipiao"></span>
            <span class="label-content">机票</span>
          </a>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#topPopover {
  position: fixed;
  top: 56px !important;
  right: 20px;
  width: 120px;
  height: 186px;

  .mui-popover-arrow {
    top: -25px;
    right: 20px;
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
        margin: 6px 14px;

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
