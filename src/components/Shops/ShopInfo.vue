<template>
  <div>
    <header id="header"
            class="mui-bar mui-bar-nav">
      <a class="mui-icon mui-icon-arrowleft mui-pull-left"></a>
      <h1 class="mui-title">导航栏</h1>
      <a class="mui-icon mui-icon-more mui-pull-right"></a>
      <a class="mui-icon mui-icon-star mui-pull-right"></a>
      <a class="mui-icon mui-icon-extra mui-icon-extra-share mui-pull-right"></a>
    </header>
    {{ shop.addres }}
    {{ shop.area }}
    {{ shop.commentNum }}
    {{ shop.coupon }}
    {{ shop.distance }}
    <img :src="shop.img"
         alt="">
    {{ shop.name }}
    {{ shop.perCons }}
    {{ shop.star }}
    {{ shop.takeOut }}
    {{ shop.tel }}
    {{ shop.tuan }}
    {{ shop.type }}

  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      shop: {}
    }
  },
  created () {
    this.getShop()
  },
  methods: {
    getShop () {
      this.axios.get('/data/shops.json').then(res => {
        if (res.data.status === 0) {
          this.shop = res.data.message[this.id]
          console.log(this.shop)
        }
      }).catch(err => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
