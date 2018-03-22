<template>
  <div>
    <detail-header />
    <div class="main">
      <gallery />
      <detail-info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    width: 990px;
    margin: 0 auto;
    display: flex;
  }
</style>

<script>
import DetailHeader from '@/components/Detail/Header'
import Gallery from '@/components/Detail/Gallery'
import DetailInfo from '@/components/Detail/Info'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    Gallery,
    DetailInfo
  }
}
</script>
