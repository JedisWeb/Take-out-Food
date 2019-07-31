<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in shopsList"
          :key="index">
        <img :src="item.img"
             alt="">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shopsList: []
    }
  },
  created () {
    this.getShopsList()
  },
  methods: {
    getShopsList () {
      this.axios.get('/data/shops.json')
        .then(res => {
          console.log(res)
          if (res.data.status === 0) {
            this.shopsList = res.data.message
          } else {
            mui.toast('数据加载失败', {
              duration: 1000
            })
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  ul {
    li {
      img {
        width: 120px;
        height: 100px;
      }
    }
  }
}
</style>
