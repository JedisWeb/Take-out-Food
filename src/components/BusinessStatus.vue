<template id="temp">
  <!-- <div> -->
  <div v-if="isOpen(s)"
       class="open">
    <span class="iconfont iconfonted"></span>
    <span>营业中</span>
  </div>
  <div v-else
       class="close">
    <span class="iconfont iconfonted1"></span>
    <span>休息中</span>
  </div>
  <!-- </div> -->
</template>

<script>

export default {
  props: ['shop'],
  data () {
    return {
      s: this.shop
    }
  },
  methods: {
    isOpen (shop) {
      let am = this.split(shop.openTime.am)
      let pm = this.split(shop.openTime.pm)
      return this.isScope(am) || this.isScope(pm)
    },
    split (str) {
      return str.split('-').map(item => item.split(':'));
    },
    isScope (arr) {
      let firstTime = arr[0]
      let lastTime = arr[1]
      let date = new Date()
      if (date.getHours() >= firstTime[0] && date.getHours() <= lastTime[0]) {
        if (date.getMinutes() > firstTime[1] || date.getMinutes() < lastTime[1]) {
          return true
        }
      }
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.open {
  display: inline-block;
  text-align: center;
  color: #007aff;
}

.close {
  display: inline-block;
  text-align: center;
  color: #ccc;
}
</style>
