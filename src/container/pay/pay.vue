<template>
  <div class="bg">
    <div class="pay">
      <span class="price">
        支付<em>{{price.toFixed(2)}}</em>元
      </span>
      <p class="label">支付密码：</p>
      <div class="pwdWrap"><input class="pwd" type="password" v-model="password"/></div>
      <button class="sure" @click="pay">确认付款</button>
      <button @click="cancel">放弃付款</button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'Pay',
  data () {
    return {
      password: '',
      price: 0
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
    this.price = sum
  },
  methods: {
    pay: function () {
      if (this.password === '123456') {
        let checkList = JSON.parse(localStorage.getItem('checkList'))
        let uid = localStorage.getItem('uid')
        if (checkList.length > 0) {
          let payList = []

          checkList.forEach(({ itemList }) => {
            itemList.forEach(({ gid, select }) => {
              payList.push({ gid, select, uid })
            })
          })

          request({
            url: '/api/pay',
            method: 'post',
            data: { payList }
          })
            .then(({ success }) => {
              if (success) {
                alert('支付成功')
                localStorage.setItem('checkList', '')
                this.$router.push('/cart')
              }
            })
        }
      } else {
        alert('支付密码错误')
      }
    },
    cancel: function () {
      localStorage.setItem('checkList', '')
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg {
    display: flex;
  }
  .pay {
    margin: 0 auto;
    margin-top: 50px;
    background: #fff;
    .price {
      min-width: 150px;
      padding: 10px 0;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      em {
        font-size: 16px;
        color: #ff8208;
        font-weight: 700;
        font-style: normal;
        margin-right: 3px;
        margin-left: 3px;
      }
    }

    .label {
      width: 170px;
      height: 29px;
      font-size: 12px;
    }

    .pwdWrap {
      padding-bottom: 15px;

      .pwd {
        width: 182px;
        padding: 2px 5px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #ccc;
        border-top-color: #a6a6a6;
        font-size: 12px;
        color: #595959;
        vertical-align: middle;
      }
    }

    button {
      display: inline-block;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      font-size: 14px;
      font-family: inherit;
      font-weight: 700;
      border-radius: 2px;
      height: 32px;
      padding: 0 20px;
    }
    .sure {
      color: #fff;
      border: 1px solid #0ae;
      background-color: #0ae;
    }
  }
</style>
