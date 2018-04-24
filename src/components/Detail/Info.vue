<template>
  <div class="info">
    <div class="hd">
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
    </div>
    <div class="price-panel">
      <dl>
        <dt>价格</dt>
        <dd class="price"><em>¥</em><span>{{price}}</span></dd>
      </dl>
      <dl>
        <dt>促销价</dt>
        <dd class="promo-price"><em>¥</em><span>{{promoPrice}}</span></dd>
      </dl>
      <dl>
        <dt>本店活动</dt>
        <dd class="active">{{active}}</dd>
      </dl>
    </div>
    <div class="key">
      <dl v-for="(key, kindex) in Object.keys(this.sort)" :key="kindex">
        <dt>{{str2txt[key]}}</dt>
        <dd>
          <ul>
            <li v-for="(item, index) in getSort[key]" :key="index" :class="index === sortIndex[key] ? 'selected' : ''" @click="handleSort(index, key)">
              {{item}}<i />
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>数量</dt>
        <dd class="account-wrap">
          <input class="account" v-model.number="account" />
          <div class="btn">
            <i class="iconfont" @click="add">&#xe9da;</i>
            <i class="iconfont" @click="substract">&#xe9d9;</i>
          </div>
        </dd>
      </dl>
    </div>
    <div class="action">
      <div class="buy" @click="buy">立即购买</div>
      <div class="basket" @click="addCart">加入购物车</div>
    </div>
    <div class="ser">
      <dl>
        <dt>服务承诺</dt>
        <dd><span>正品保证</span><span>极速退款</span><span>七天无理由退款</span></dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $red: #FF0036;
  @mixin flex {
    display: flex;
    align-items: center;
  }
  .info {
    width: 530px;
    padding-right: 10px;
    color: #666;
    font-size: 12px;
    .hd {
      padding: 20px 10px 12px;
      color: #000;
      p {
        color: $red;
        font-size: 14px;
      }
      h1 {
        font-size: 16px;
        font-weight: 700;
        padding-bottom: .2em;
      }
    }
    .price-panel {
      background-repeat: no-repeat;
      background-position: left 0;
      background: url("./img/bg.png");
      font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
      padding-bottom: 5px;
      padding-top: 5px;
      margin-right: 20px;
      height: 99px;
      dl {
        @include flex
      }
      dt {
        color: #999;
        text-align: left;
        width: 69px;
        margin-left: 8px;
        font-weight: 500;
        span {
          font-family: arial;
        }
      }
      em {
        font-family: arial;
        margin-right: 3px;
      }
      .price {
        span {
          font-size: 14px;
          text-decoration: line-through;
        }
      }
      .promo-price {
        em {
          font-size: 18px;
          color: $red;
        }
        span {
          font-size: 30px;
          font-weight: bolder;
          color: $red;
        }
      }
      .active {
        color: #b5621b;
        font-size: 13px;
      }
    }
    .key {
      margin: 15px 20px 24px 10px;
      min-height: 127px;
      dl {
        padding-bottom: 8px;
        @include flex;
      }
      dt {
        text-align: left;
        width: 66px;
        color: #838383;
        font-weight: 600;
      }
      dd {
        width: 420px;
      }
      ul {
        @include flex;
        li {
          text-align: center;
          margin: 2px 5px 2px 0;
          height: 32px;
          border: 1px solid #b8b7bd;
          padding: 0 9px;
          min-width: 10px;
          @include flex;
          cursor: pointer;
          font-weight: 500;
          position: relative;
        }
        li:hover {
          border-color: $red;
        }
        .selected {
          border-color: $red;
            i {
            background: url("./img/selected.png") no-repeat;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 12px;
            height: 12px;
            display: block;
          }
        }
      }
      .account-wrap {
        @include flex;
      }
      .account {
        width: 43px;
        height: 31px;
        padding: 3px 2px 0 3px;
        line-height: 26px;
        color: #666;
        border: 1px solid #a7a6ac;
        font-weight: 500;
      }
      .btn {
        margin-left: 5px;
        i {
          width: 16px;
          height: 12px;
          overflow: hidden;
          border: 1px solid #a7a6ab;
          display: block;
          line-height: 12px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          color: #878787;
        }
        i:first-child {
          margin-bottom: 5px;
        }
      }
    }
    .action {
      padding: 10px 0 0 66px;
      margin: 10px 0 0;
      @include flex;
      >div {
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      .buy {
        margin-right: 10px;
        width: 178px;
        background-color: #ffeded;
        border: 1px solid $red;
        color: $red;
      }
      .basket {
        width: 178px;
        background-color: $red;
        border: 1px solid $red;
        color: #fff;
      }
    }
    .ser {
      margin: 13px 20px 0;
      padding-top: 20px;
      dl {
        margin-right: 67px;
        @include flex;
      }
      dt {
        width: 66px;
        color: #999;
      }
      span {
        display: inline-block;
        padding-right: 20px;
        color: #666;
        cursor: pointer;
      }
    }
  }
</style>

<script>
import request from '@/utils/request'
export default {
  name: 'DetailInfo',
  props: ['title', 'subtitle', 'price', 'promoPrice', 'active', 'sort', 'shopid', 'gid'],
  data () {
    return {
      account: 1,
      select: {},
      str2txt: {
        size: '尺码',
        color: '颜色'
      },
      sortObj: {},
      sortIndex: {
        // size: -1,
        // color: -1
      }
    }
  },
  computed: {
    getSort: function () {
      let obj = {}
      Object.keys(this.sort).forEach(key => {
        obj[key] = this.sort[key]
      })
      return obj
    }
  },
  methods: {
    handleSort: function (index, key) {
      let val = this.sortIndex[key]
      if (index === val) {
        delete this.select[key]
        this.sortIndex[key] = -1
      } else {
        this.sortIndex = { ...this.sortIndex, [key]: index }
        this.select[key] = this.getSort[key][index]
      }
    },
    add: function () {
      this.account += 1
    },
    substract: function () {
      if (this.account > 1) {
        this.account -= 1
      } else {
        this.account = 0
      }
    },
    buy: function () {
      if (Object.keys(this.sort).length === Object.keys(this.select).length) {
        this.$emit('changeAccount', this.account)
        this.$emit('buy')
      }
    },
    addCart: function () {
      let select = this.select
      let account = this.account
      let shopid = this.shopid
      let gid = this.gid
      if (Object.keys(this.sort).length === Object.keys(select).length) {
        let uid = parseInt(localStorage.getItem('uid'))
        let data = { select, account, shopid, gid, uid }
        request({ url: '/api/addCart', method: 'post', data })
          .then(({ success }) => {
            if (success) {
              alert('已加入购物车')
              this.account = 1
              Object.keys(this.sortIndex).forEach(key => { this.sortIndex[key] = -1 })
            }
          })
        // this.$router.push('/cart')
      }
    }
  },
  watch: {
    account: function (newAccount, oldAccount) {
      if (isNaN(newAccount) || newAccount <= 0) {
        this.account = 1
      }
    }
  }
}
</script>
