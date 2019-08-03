<template>
  <div class="search-container">
    <mt-header title="搜索" />
    <!-- <Dropdown />
    <ShopsList /> -->
  </div>
</template>

<script>
import Dropdown from '../../components/Shops/ShopDropdown.vue'
import ShopsList from '../../components/Shops/ShopsList.vue'
export default {
  components: {
    Dropdown,
    ShopsList
  }
}
</script>

<style lang="scss" scoped></style>
