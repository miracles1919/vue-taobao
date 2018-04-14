<template>
  <div>
    <h2 class="head">确认订单信息</h2>
    <div class="th">
      <div class="td">店铺宝贝</div>
      <div class="td">商品属性</div>
      <div class="td">单价</div>
      <div class="td">数量</div>
      <div class="td">优惠方式</div>
      <div class="td">小计</div>
    </div>
    <div class="info">
      <p class="shop">店铺: 阿茶与阿古</p>
      <div class="item">
        <div class="detail">
          <img src="./img/mi.jpg"/>
          <div>
            <p class="title">阿茶与阿古2018春装新款搭配款拼条复古翻边韩风休闲小脚裤</p>
            <span class="delivery">发货时间：卖家承诺15天</span>
          </div>
        </div>
        <div class="sku">
          <p>颜色：浅灰色</p>
          <p>尺码：S</p>
        </div>
        <div class="price">165.00</div>
        <div class="number">1</div>
        <div class="promotion">无优惠</div>
        <div class="simple-price">165.00</div>
      </div>
    </div>
    <div class="orderPay">
      <span>店铺合计(含运费)</span>
      <span class="price"><span>￥</span><em>165</em></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .head {
    line-height: 25px;
    color: #333;
    font-weight: 700;
    font-size: 14px;
  }
  .th {
    margin-top: 15px;
    color: #6C6C6C;
    display: flex;
    .td {
      display: inline-block;
      height: 27px;
      line-height: 24px;
      text-align: center;
      border-bottom: 3px solid #b2d1ff;
      font-size: 12px;
      margin-left: 1px;
      vertical-align: bottom;
      &:first-child {
        width: 255px;
        margin-left: 0;
      }
      &:nth-child(2),
      &:nth-child(5) {
        width: 180px;
      }
      &:nth-child(3),
      &:nth-child(4) {
        width: 120px;
      }
      &:nth-child(6) {
        width: 130px;
      }
    }
  }
  .info {
    font-size: 12px;
    .shop {
      padding-bottom: 5px;
      margin-top: 25px;
      border-bottom: 1px dotted #80b2ff;
      height: 28px;
    }
    .item {
      border-bottom: 1px dotted #ddd;
      background-color: #fbfcff;
      display: flex;
      >div {
        padding: 10px 0;
        margin-left: 1px;
      }
      .detail {
        width: 255px;
        padding-left: 10px;
        display: flex;
        margin-left: 0;
        img {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .title {
          color: #3c3c3c;
          width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .delivery {
          color: #6c6c6c;
          margin-top: 16px;
          display: block;
        }
      }
      .sku {
        color: #6c6c6c;
        width: 180px;
      }
      .price,
      .number,
      .promotion {
        color: #3c3c3c;
        text-align: center;
        width: 120px;
      }
      .promotion {
        width: 180px;
      }
      .simple-price {
        width: 130px;
        font-weight: 800;
        color: #f40;
        text-align: right;
        padding-right: 10px;
      }
    }
  }
  .orderPay {
    background-color: #f2f7ff;
    padding: 3px 10px 3px 0;
    text-align: right;
    color: #333;
    height: 51px;
    line-height: 45px;
    font-size: 12px;
    .price {
      color: #f40;
      font-family: verdana,arial;
      margin-left: 10px;
      font-size: 16px;
      font-weight: bolder;
      vertical-align: middle;
      span {
        color: #f40;
      }
      em {
        font-style: normal;
      }
    }
  }
</style>

<script>
export default {
  name: 'Table'
}
</script>
