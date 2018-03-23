<template>
  <div>
    <detail-header />
    <div class="main" v-for="(item, index) in infoList" :key="index">
      <gallery :imgList="item.imgList"/>
      <detail-info v-bind="item.info"/>
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
  data () {
    return {
      infoList: [{
        imgList: [
          require('@/components/Detail/img/tshirt1.jpg'),
          require('@/components/Detail/img/tshirt2.jpg'),
          require('@/components/Detail/img/tshirt3.jpg'),
          require('@/components/Detail/img/tshirt4.jpg'),
          require('@/components/Detail/img/tshirt5.jpg')
        ],
        info: {
          title: 'Lilbetter男士短袖 时尚圆领印花体恤简约宽松上衣帅气半袖T恤男',
          subtitle: '领券满199减10 299减20',
          price: '99',
          promoPrice: '89',
          active: '满9.9元,包邮',
          sort: {
            size: ['165/S', '170/M', '175/L'],
            color: ['白色', '黑色']
          }
        }
      }]
    }
  },
  components: {
    DetailHeader,
    Gallery,
    DetailInfo
  }
}
</script>
