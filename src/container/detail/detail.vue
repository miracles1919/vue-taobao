<template>
  <div>
    <detail-header :shop="shop"/>
    <div class="main">
      <gallery :imgList="imgList"/>
      <detail-info
        v-bind="info"
        :shopid="shopid"
        :gid="gid"
        @buy="buy"
        @changeAccount="changeAccount"
      />
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
import request from '@/utils/request'
export default {
  name: 'Detail',
  mounted () {
    let { id } = this.$route.params
    this.getDetail(id)
  },
  data () {
    return {
      details: {},
      imgList: [],
      info: {
        title: '',
        subtitle: '',
        price: 0,
        promoPrice: 0,
        active: '',
        sort: {
          size: [],
          color: []
        }
      },
      shopid: '',
      shop: '',
      gid: '',
      account: 1
    }
  },
  methods: {
    getDetail: function (id) {
      request({ url: `/api/detail/${id}` })
        .then(result => {
          let { success, imgList, info, shopid, gid, shop } = result
          if (success) {
            this.imgList = imgList
            this.info = info
            this.shopid = shopid
            this.gid = gid
            this.shop = shop
          } else {
            this.$router.push('/home')
          }
        })
    },
    buy: function () {
      let { title, price, sort } = this.info
      let checkList = [{
        shopid: this.shopid,
        shop: this.shop,
        itemList: [{
          gid: this.gid,
          title,
          price,
          select: sort,
          img: this.imgList[0],
          num: this.account
        }]
      }]
      localStorage.setItem('checkList', JSON.stringify(checkList))
      this.$router.push('/order')
    },
    changeAccount: function (num) {
      this.account = num
    }
  },
  watch: {
    '$route.params' (newParams) {
      let { id } = newParams
      this.getDetail(id)
    }
  },
  components: {
    DetailHeader,
    Gallery,
    DetailInfo
  }
}
</script>
