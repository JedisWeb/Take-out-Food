<template>
  <div class="shop-dropdowns-container">
    <el-dropdown size="small"
                 @command="handleAllFoods"
                 :hide-on-click="true">
      <span class="el-dropdown-link">
        {{ allFoodsValue }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in allFoodsList"
                          :key="index"
                          :command="item.title">
          {{ item.title }} ( {{ item.num }} )
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="small"
                 @command="handleNearby"
                 :hide-on-click="true">
      <span class="el-dropdown-link">
        全城
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-cascader :options="nearbyList"
                     :show-all-levels="false"
                     placeholder="试试搜索:"
                     filterable
                     clearable
                     size="mini"></el-cascader>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="small"
                 @command="handleSord"
                 :hide-on-click="true">
      <span class="el-dropdown-link">
        {{ sortValue }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in sortList"
                          :key="index"
                          :command="item">
          {{ item }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="small"
                 @command="handleScreen">
      <span class="el-dropdown-link">
        筛选
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <ul>
          <li>
            <span>只看免预约</span>
            <mt-switch></mt-switch>
          </li>
          <li>
            <span>节假日可用</span>
            <mt-switch></mt-switch>
          </li>
          <li>
            <span>只看新片</span>
            <mt-switch></mt-switch>
          </li>
          <li>

          </li>
          <li></li>
          <li>
            <mt-button type="default"
                       size="normal">重置</mt-button>
            <mt-button type="primary"
                       plain>完成</mt-button>
          </li>

        </ul>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
export default {
  data () {
    return {
      allFoodsValue: '全部美食',
      allFoodsList: [
        { title: '全部美食', num: 24266 },
        { title: '小吃快餐', num: 748 },
        { title: '面包甜点', num: 622 },
        { title: '川湘菜', num: 583 },
        { title: '生日蛋糕', num: 481 },
        { title: '聚餐宴请', num: 453 },
        { title: '火锅', num: 313 },
        { title: '其他美食', num: 210 },
        { title: '烧烤烤肉', num: 158 },
        { title: '西餐', num: 144 },
        { title: '饮品店', num: 134 },
        { title: '小龙虾', num: 121 },
        { title: '中式烧烤/烤串', num: 107 },
        { title: '特色菜', num: 72 },
        { title: '江河湖海鲜', num: 71 },
        { title: '香锅烤鱼', num: 63 },
        { title: '日韩料理', num: 48 },
        { title: '自助餐', num: 36 },
        { title: '日本菜', num: 32 },
        { title: '汤/粥/炖菜', num: 28 },
        { title: '生鲜蔬果', num: 21 },
        { title: '京菜鲁菜', num: 11 },
        { title: '食品保健', num: 88 },
        { title: '粤菜', num: 8 },
        { title: '东北菜', num: 5 },
        { title: '江浙菜', num: 4 },
        { title: '西北菜', num: 4 },
        { title: '云贵菜', num: 4 },
        { title: '蒙餐', num: 2 },
        { title: '徽菜', num: 1 },
        { title: '东南亚菜', num: 1 }],


      nearbyList: [
        {
          label: '附近',
          children: [
            { label: '全城' },
            { label: '附近' },
            { label: '1km' },
            { label: '3km' },
            { label: '5km' },
            { label: '10km' }
          ]
        },
        {
          label: '推荐商圈',
          children: [
            { label: '风华路(51)' },
            { label: '万达(209)' },
            { label: '华洋堂(79)' },
            { label: '闸口(40)' },
            { label: '襄州(70)' }
          ]
        },
        {
          label: '樊城区',
          children: [
            { label: '全部(1109)' },
            { label: '沃尔玛(57)' },
            { label: '风华路(51)' },
            { label: '万达(209)' },
            { label: '人民广场(115)' },
            { label: '华洋堂(79)' },
            { label: '沿江大道(38)' },
            { label: '火车站(65)' },
            { label: '家乐福(65)' },
            { label: '天元四季城(103)' },
            { label: '绿地缤纷城(19)' },
            { label: '泛悦mall(102)' },
            { label: '新五中(20)' },
            { label: '天贸城(18)' }
          ]
        },
        {
          label: '襄城区',
          children: [
            { label: '全部(329)' },
            { label: '鱼梁洲(11)' },
            { label: '鼓楼(114)' },
            { label: '檀溪路(50)' },
            { label: '闸口(40)' },
            { label: '胜利街(13)' },
            { label: '隆中(28)' },
            { label: '康城（影视城）(6)' },
            { label: '襄城武商(36)' }
          ]
        },
        {
          label: '襄州区',
          children: [
            { label: '全部(395)' },
            { label: '二汽(75)' },
            { label: '襄州(70)' },
            { label: '民发世界城(113)' },
            { label: '时代天街(56)' },
            { label: '铁四院/天润未来城(25)' },
            { label: '刘集机场(6)' }
          ]
        },
        {
          label: '老河口',
          children: [
            { label: '全部(103)' },
            { label: '城南(14)' },
            { label: '老河口市中心城区(62)' },
            { label: '城东(2)' },
            { label: '汉江商业广场(8)' },
            { label: '武商购物中心(12)' }
          ]
        },
        {
          label: '枣阳市',
          children: [
            { label: '全部(167)' },
            { label: '中心商业区(23)' },
            { label: '东园(20)' },
            { label: '南城(23)' },
            { label: '汽车站(12)' },
            { label: '万象城(38)' },
            { label: '汉城(26)' },
            { label: '北关(4)' },
            { label: '枣阳火车站(0)' }
          ]
        },
        {
          label: '宜城市',
          children: [
            { label: '全部(93)' },
            { label: '前进路(3)' },
            { label: '楚都公园/情侣路(29)' },
            { label: '中华大道(17)' },
            { label: '紫盖山(21)' },
            { label: '新天地商业广场(11)' },
            { label: '襄大商业广场(7)' }
          ]
        },
        {
          label: '南漳县',
          children: [
            { label: '全部(78)' },
            { label: '南漳县中心城区(62)' },
            { label: '水镜庄风景区(1)' },
          ]
        },
        {
          label: '谷城县',
          children: [
            { label: '全部(135)' },
            { label: '世纪广场(14)' },
            { label: '影院街(13)' },
            { label: '群兴购物广场(14)' },
            { label: '城内餐饮一条街(7)' },
            { label: '旺恒国际商业广场(14)' },
          ]
        },
        {
          label: '保康县',
          children: [
            { label: '全部(25)' },
            { label: '保康县中医院(2)' },
            { label: '沿河公园(6)' },
            { label: '康乐福百货(3)' },
          ]
        }
      ],
      sortValue: '智能排序',
      sortList: ['智能排序', '离我最近', '好评优先', '销量最高'],
      screenList: [],
    };
  },
  methods: {
    handleAllFoods (command) {
      this.allFoodsValue = command;
    },
    handleNearby (command) { },
    handleSord (command) {
      this.sortValue = command;
    },
    handleScreen (command) {

    }
  }
}
</script>

<style lang="scss" scoped>
.shop-dropdowns-container {
  display: flex;
  justify-content: space-around;

  &.el-dropdown-menu {
    width: 500px;
    height: 300px;
  }
}
</style>
