<template>
  <div class="pay">
    <div class="wrap">
      <div class="shadow">
        <div class="realPay">
          <span class="title">实付款：</span>
          <span class="icon">￥</span>
          <span class="price">{{sum}}</span>
        </div>
        <div class="confirmAddr">
          <div>
            <span class="title">寄送至：</span>
            <span>{{data.address}}</span>
          </div>
          <div>
            <span class="title">收货人：</span>
            <span>{{`${data.name}&nbsp;${data.phone}`}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="submitWrapper">
      <span class="return"  @click="clear"><i class="iconfont">&#xe60c;</i>返回购物车</span>
      <button class="submit" @click="submit">提交订单</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pay {
    margin-top: 15px;
    text-align: right;
    font-size: 12px;
    .wrap {
      display: inline-block;
      border: 1px solid #f40;
      .shadow {
        border: 3px solid #fff0e8;
        min-width: 230px;
        padding: 10px 10px 10px 20px;

        .title {
          font-weight: 700;
          color: #333;
        }

        .realPay {
          .icon {
            font-size: 26px;
            color: #999;
          }
          .price {
            color: #f40;
            font: 700 26px tahoma;
          }
        }
        .confirmAddr {
          line-height: 1.6;
          margin-top: 10px;
          padding-bottom: 10px;
        }
      }
    }
    .submitWrapper {
      // display: inline-block;
      padding: 0 0 5px 5px;
      .submit {
        width: 182px;
        height: 39px;
        vertical-align: middle;
        line-height: 39px;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        background: #f40;
        color: #fff;
      }
      .return {
        color: #36c;
        text-decoration: none;
        margin-right: 50px;
        line-height: 34px;
        cursor: pointer;
        .iconfont {
          color: #36c;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'PayInfo',
  props: ['sum', 'data'],
  methods: {
    clear: function () {
      localStorage.setItem('checkList', [])
      this.$router.push('/cart')
    },
    submit: function () {
      this.$emit('submit')
    }
  }
}
</script>
