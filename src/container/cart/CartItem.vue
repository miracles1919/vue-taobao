<template>
  <div class="order">
    <div class="head">
      <checkbox @onChange="allCheck" :isCheck="data.check" :ckey="data.shopid"/>
      &nbsp;&nbsp;
      <span class="shop_icon"/>
      店铺：
      <span class="shop">{{shop}}</span>
    </div>
    <div class="content" v-for="(item, index) in itemList" :key="`${item.gid}-${index}`" :style="index === 0 ? 'border-top:1px solid #ccc' : ''">
      <ul>
        <li class="td_chk">
          <checkbox wrapStyle="text-align: right;padding-right: 15px" @onChange="check" :ckey="`${item.gid}-${index}`" :isCheck="item.check"/>
        </li>
        <li class="td_item">
          <img :src="item.img" />
          <div class="info">
            <div class="basic">{{item.title}}</div>
            <div class="icons">
              <img src="./img/card.png" />
              <img src="./img/7.png" />
              <img src="./img/guarantee.png" />
            </div>
          </div>
        </li>
        <li class="td_info">
          <p class="line" v-for="(item, index) in dealSelect(item.select)" :key="index">{{item[0]}}：{{item[1]}}</p>
        </li>
        <li class="td_price">
          <div><em>{{item.price}}</em></div>
        </li>
        <li class="td_account">
          <div class="warp">
            <span :class="item.num > 1 ? '' : 'no_minus'" @click="subtract(index)">-</span>
            <input :value="item.num" />
            <span @click="add(index)">+</span>
          </div>
        </li>
        <li class="td_sum">
          <em>￥{{item.price * item.num}}</em>
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
      border-top: 0;
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
          .no_minus {
            color: #e5e5e5;
            cursor: default;
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
  props: ['data', 'index'],
  data () {
    return {
      shop: this.data.shop,
      itemList: this.data.itemList
    }
  },
  methods: {
    add: function (index) {
      this.itemList[index].num += 1
      this.$emit('update')
    },
    subtract: function (index) {
      if (this.itemList[index].num > 1) {
        this.itemList[index].num -= 1
        this.$emit('update')
      }
    },
    check: function (isCheck, key) {
      // console.log(key)
      this.$emit('onCheck', key, isCheck)
    },
    allCheck: function (isCheck, key) {
      this.$emit('shopCheck', key, isCheck)
    },
    dealSelect: function (select) {
      const str2cn = {
        color: '颜色',
        size: '尺码'
      }
      return Object.entries(select).map(entry => {
        return [str2cn[entry[0]], entry[1]]
      })
    }
  },
  components: {
    Checkbox
  }
}
</script>
