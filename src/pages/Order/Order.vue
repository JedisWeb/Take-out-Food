<template>
  <div class="order-container">
    <Header />
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="all">全部</mt-tab-item>
        <mt-tab-item id="pay">待付款</mt-tab-item>
        <mt-tab-item id="use">待使用</mt-tab-item>
        <mt-tab-item id="comment">待评价</mt-tab-item>
        <mt-tab-item id="refund">退款/售后</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="all">
          <!-- <mt-cell v-for="n in 20"
                   :key="n"
                   :title="'全部 ' + n" /> -->
          <ShopList />
        </mt-tab-container-item>
        <mt-tab-container-item id="pay">
          <mt-cell v-for="n in 20"
                   :key="n"
                   :title="'待付款 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="use">
          <mt-cell v-for="n in 20"
                   :key="n"
                   :title="'待使用 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="comment">
          <mt-cell v-for="n in 20"
                   :key="n"
                   :title="'待评价 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="refund">
          <mt-cell v-for="n in 20"
                   :key="n"
                   :title="'退款/售后 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Header from './OrderHeader.vue'
import ShopList from '../../components/Shops/ShopsList.vue'
export default {
  data () {
    return {
      selected: 'all'
    }
  },
  components: {
    Header,
    ShopList,
  }
}
</script>

<style lang="scss" scoped>
.order-container {
  padding: 50px 0;
}
</style>
