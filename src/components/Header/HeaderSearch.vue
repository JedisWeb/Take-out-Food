<template>
  <div class="header-container">
    <slot name="left"
          id="left"></slot>
    <slot name="center"
          id="center">
      <h1></h1>
    </slot>
    <slot name="right"
          id="right"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  // border-bottom: 1px solid #888;
  display: flex;
  padding: 0 20px;
  color: #424242;
  background-color: #fff;
  vertical-align: middle;
  text-align: center;

  .iconfont {
    font-size: 26px;
  }

  #left {
    float: left;
  }

  #center {
    position: relative;
    flex: 1;
  }

  #right {
    float: right;
  }
}
</style>
