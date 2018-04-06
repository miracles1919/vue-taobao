<template>
  <div class="order">
    <step-bar />
    <Address />
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

export default {
  name: 'order',
  components: {
    StepBar,
    Address
  }
}
</script>
