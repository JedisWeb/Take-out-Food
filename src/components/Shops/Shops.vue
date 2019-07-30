<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in shopsList"
          :key="index">
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
      this.axios.get('api/seller')
        .then(res => {
          if (res.body.status === 0) {
            // this.shopsList = res.body.message
            console.log(res)
          } else {
            mui.toast('数据加载失败', {
              duration: 1000
            })
          }
        }).catch(err => {
          // console.log(err)
          alert(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
