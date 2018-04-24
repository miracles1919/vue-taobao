<template>
  <div class="order">
    <step-bar />
    <div class="wrap">
      <Address :list="addressList" :index="addressIndex" @onCheck="addressCheck"/>
    </div>
    <Table :shopList="shopList" :sum="sum"/>
    <pay-info
      :sum="sum"
      :data="addressList[addressIndex]"
      v-if="addressList[addressIndex]"
      @submit="submit"
    />
  </div>

</template>

<style lang="scss" scoped>
  .order {
    width: 990px;
    margin: 0 auto;
  }
  .wrap {
    margin-top: 10px;
    margin-bottom: 30px;
  }
</style>

<script>
import StepBar from '@/components/Order/Bar'
import Address from '@/components/Order/Address'
import Table from '@/components/Order/Table'
import PayInfo from '@/components/Order/PayInfo'

export default {
  name: 'order',
  data () {
    return {
      shopList: [],
      sum: 0,
      addressList: [{
        address: '浙江省 宁波市 江北区 慈城镇 慈湖人家86幢226号106室',
        name: '鲁杰',
        phone: '15726940632'
      }, {
        address: '浙江省 杭州市 余杭区 仓前街道 文一西路海创科技中心4幢3楼蕃蕃数据',
        name: '鲁杰',
        phone: '15726940632'
      }],
      addressIndex: 0
    }
  },
  mounted: function () {
    this.shopList = JSON.parse(localStorage.getItem('checkList'))
    let sum = 0
    this.shopList.forEach(({ itemList }) => {
      itemList.forEach(({ price, num }) => {
        sum += price * num
      })
    })
    this.sum = sum
  },
  methods: {
    addressCheck: function (index) {
      this.addressIndex = index
    },
    submit: function () {
      if (this.shopList.length > 0 && this.addressIndex !== -1) {
        this.$router.push('/pay')
      }
    }
  },
  components: {
    StepBar,
    Address,
    Table,
    PayInfo
  }
}
</script>
