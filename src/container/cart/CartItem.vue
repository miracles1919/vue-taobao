<template>
  <div class="order">
    <div class="head">
      <checkbox />
      &nbsp;&nbsp;
      <span class="shop_icon"/>
      店铺：
      <span class="shop">小米官方旗舰店</span>
    </div>
    <div class="content">
      <ul>
        <li class="td_chk">
          <checkbox wrapStyle="text-align: right;padding-right: 15px"/>
        </li>
        <li class="td_item">
          <img src="./img/mi.jpg" />
          <div class="info">
            <div class="basic">xiaomi小米官方旗舰店移动电源2 10000充电宝超薄便携大容量金属</div>
            <div class="icons">
              <img src="./img/card.png" />
              <img src="./img/7.png" />
              <img src="./img/guarantee.png" />
            </div>
          </div>
        </li>
        <li class="td_info">
          <p class="line">颜色：黑色</p>
          <p class="line">尺码：M</p>
        </li>
        <li class="td_price">
          <div><em>￥79.00</em></div>
        </li>
        <li class="td_account">
          <div class="warp">
            <span>-</span>
            <input value="1" />
            <span>+</span>
          </div>
        </li>
        <li class="td_sum">
          <em>￥79.00</em>
        </li>
        <li class="td_op">
          <span>移入收藏夹</span>
          <span>删除</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
  .order {
    margin-bottom: 15px;
    font-size: 12px;
    .head {
      height: 38px;
      line-height: 38px;
      background: #fff;
      padding-left: 15px;
      display: flex;
      align-items: center;
      font-weight: 400;
      .shop_icon {
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 6px;
        background-position: -20px -105px;
        background-image: image-set(url('./img/tb_icon.png') 2x);
      }
      .shop {
        color: #3c3c3c;
        cursor: pointer;
      }
      .shop:hover {
        text-decoration: underline;
        color: #f40;
      }
    }
    .content {
      border: 1px solid #ccc;
      >ul {
        background: #fcfcfc;
        display: flex;
        li {
          min-height: 119px;
          padding-top: 20px;
        }
      }
      .td_chk {
        width: 45px;
      }
      .td_item {
        width: 302px;
        display: flex;
        >img {
          height: 80px;
          margin-right: 9px;
          border: 1px solid #eee;
        }
        .info {
          padding-right: 25px;
          height: 90px;
          margin-top: -3px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .basic {
            min-height: 40px;
          }
          .icons {
            height: 24px;
            display: flex;
            align-items: center;
            >img {
              margin-right: 5px;
              margin-bottom: 5px;
            }
          }
        }
      }
      .td_info {
        width: 192px;
        padding-right: 20px;
        .line {
          margin: 0 5px 0 15px;
          color: #9c9c9c;
          text-overflow: ellipsis;
        }
      }
      .td_price {
        width: 120px;
        >div {
          padding: 4px 0 0 10px;
          line-height: 1;
          width: 84px;
          em {
            color: #3c3c3c;
            font-weight: 700;
            font-family: Verdana,Tahoma,arial;
          }
        }
      }
      .td_account {
        width: 120px;
        .warp {
          display: flex;
          span {
            display: block;
            height: 25px;
            width: 19px;
            border: 1px solid #e5e5e5;
            background: #f0f0f0;
            text-align: center;
            line-height: 23px;
            color: #444;
            cursor: pointer;
          }
          input {
            width: 41px;
            height: 25px;
            line-height: 15px;
            border: 1px solid #aaa;
            color: #343434;
            text-align: center;
            padding: 4px 0;
            background-color: #fff;
          }
        }
      }
      .td_sum {
        width: 105px;
        em {
          color: #f40;
          font-weight: 700;
          font-family: Verdana,Tahoma,arial;
        }
      }
      .td_op {
        width: 99px;
        padding-left: 15px;
        span {
          display: block;
          padding-bottom: 3px;
          cursor: pointer;
        }
        span:hover {
          color: #f40;
          text-decoration: underline;
        }
      }
    }
  }
</style>

<script>
import Checkbox from '@/components/Checkbox/Checkbox'

export default {
  name: 'CartItem',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Checkbox
  }
}
</script>
