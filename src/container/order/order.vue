<template>
  <div class="order">
    <step-bar />
    <Address />
    <Table />
    <pay-info />
  </div>

</template>

<style lang="scss" scoped>
  .order {
    width: 990px;
    margin: 0 auto;
  }
</style>

<script>
import StepBar from '@/components/Order/Bar'
import Address from '@/components/Order/Address'
import Table from '@/components/Order/Table'
import PayInfo from '@/components/Order/PayInfo'

export default {
  name: 'order',
  components: {
    StepBar,
    Address,
    Table,
    PayInfo
  }
}
</script>
