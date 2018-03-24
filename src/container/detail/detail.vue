<template>
  <div>
    <detail-header />
    <div class="main">
      <gallery :imgList="item.imgList"/>
      <detail-info v-bind="item.info" :shopid="item.shopid" :itemid="item.itemid"/>
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
  created () {
    this.setItem(this.$route.params)
  },
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
        },
        shopid: 'lilbetter',
        itemid: 0
      }, {
        imgList: [
          require('@/components/Detail/img/mi1.jpg'),
          require('@/components/Detail/img/mi2.jpg'),
          require('@/components/Detail/img/mi3.jpg'),
          require('@/components/Detail/img/mi4.jpg'),
          require('@/components/Detail/img/mi5.jpg')
        ],
        info: {
          title: 'xiaomi小米官方旗舰店移动电源2 10000充电宝超薄便携大容量金属',
          subtitle: '双向快充 双USB输出',
          price: '89',
          promoPrice: '79',
          active: '满150元,包邮',
          sort: {
            color: ['白色', '黑色']
          }
        },
        shopid: 'xiaomi',
        itemid: 0
      }]
    }
  },
  methods: {
    setItem: function (params) {
      let { id } = params
      if (id > this.infoList.length - 1) {
        id = 0
      }
      this.item = this.infoList[id]
    }
  },
  watch: {
    '$route.params' (newParams) {
      this.setItem(newParams)
    }
  },
  components: {
    DetailHeader,
    Gallery,
    DetailInfo
  }
}
</script>
