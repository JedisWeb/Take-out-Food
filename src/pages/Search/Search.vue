<template>
  <div class="search-container">
    <Header />
    <Banner />
    <Dropdown />
    <ShopsList />
  </div>
</template>

<script>
import Header from './SearchHeader.vue'
import Banner from './SearchBanner.vue'
import Dropdown from '../../components/Shops/ShopDropdown.vue'
import ShopsList from '../../components/Shops/ShopsList.vue'
export default {
  components: {
    Header,
    Banner,
    Dropdown,
    ShopsList,
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  padding: 50px 0;
}
</style>
