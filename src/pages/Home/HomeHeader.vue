<template>
  <div class="container">
    <span class="iconfont iconfontwaimai"
          slot="left"
          id="left"></span>
    <div class="mui-input-row mui-search"
         id="search">
      <input type="text"
             class="mui-input-clear"
             placeholder="张记黄焖鸡(外卖满20减2)"
             disabled>
      <span class="iconfont iconfontsousuo search-icon"></span>
    </div>
    <a class="iconfont iconfontjia"
       slot="right"
       id="right"
       href="#topPopover"></a>

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
  </div>

</template>

<script>
export default {

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
    }

    .search-icon {
      position: absolute;
      top: 0px;
      left: 12px;
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

  #topPopover {
    position: fixed;
    top: 56px !important;
    right: 20px;
    width: 140px;
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
          margin: 6px 24px;

          &:not(:last-child)::after {
            content: "";
            width: 100px;
            height: 1px;
            position: absolute;
            top: 33px;
            left: -4px;
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
}
</style>
