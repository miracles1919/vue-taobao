<template>
  <div>
    <div class="content">
      <div class="header">
        <span class="logo" />
        <div class="search">
          <ul class="switch_nav">
            <li class="item">宝贝</li>
            <s><s/></s>
          </ul>
          <div class="input_box"><input/></div>
          <button>搜 索</button>
        </div>
      </div>
      <div class="cart">
        <div class="filter_bar">
          <ul class="cart_switch">
            <li v-for="(item, index) in switchList" v-bind:class="switchIndex === index ? 'current' : ''" :key="`s${index}`" v-on:mouseenter="switchHover(index)" v-on:mouseleave="switchBlur">
              <em>{{ item.title }}</em>
              <span class="number">{{ item.num }}</span>
              <span v-if="index !== (switchList.length - 1)" class="pipe" />
            </li>
          </ul>
          <div class="warp_line"><div class="floater" v-bind:style="`left: ${switchLine}px`"/></div>
        </div>
        <div class="th">
          <div class="all">
            <div>
              <Checkbox @onChange="allCheck" :isCheck="all"/>
              &nbsp;&nbsp;全选
            </div>
          </div>
          <div class="item">商品信息</div>
          <div class="info"></div>
          <div class="price">单价</div>
          <div class="account">数量</div>
          <div class="sum">金额</div>
          <div class="op">操作</div>
        </div>
        <cart-item v-for="(item, index) in cartList" :key="`cart${index}`" :data="item" :index="index" @onCheck="onCheck" @update="update" @shopCheck="shopCheck"/>
        <div class="foot_bar">
          <div class="left">
            <div class="all"><checkbox wrapStyle="marginRight: 5px" :isCheck="all" @onChange="allCheck"/>全选</div>
            <div class="operation">
              <span>删除</span>
              <span>清除失效宝贝</span>
              <span>移入收藏夹</span>
              <span>分享</span>
            </div>
          </div>
          <div class="right">
            <div class="selected">
              <span>已选商品</span>
              <em>{{ selected }}</em>
              <span>件</span>
              <div class="arrow_box" />
            </div>
            <div>
              <span>合计（不含运费）：</span>
              <strong class="price">
                <em><span>&nbsp;</span>{{ total }}</em>
              </strong>
            </div>
            <button :class="['btn', total > 0 ? 'buy' : '']">结&nbsp;算</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @hover: #f40;

  .content {
    width: 990px;
    margin: 0 auto;
    .header {
      padding: 20px 0 40px;
      position: relative;
      height: 95px;
      display: flex;
      justify-content: space-between;
      .logo {
        display: block;
        width: 181px;
        height: 45px;
        overflow: hidden;
        background-position: -110px 0;
        background-color: #fff;
        background-image: image-set(url("./img/tb_icon.png") 2x);
      }
      .search {
        background: #f50;
        width: 515px;
        height: 35px;
        display: flex;
        .switch_nav {
          width: 76px;
          height: 29px;
          border-right: 1px solid #e5e5e5;
          border-left: 1px solid #f5f5f5;
          margin-top: 3px;
          margin-left: 3px;
          position: relative;
          .item {
            background: #f5f5f5;
            border-radius: 0;
            border: 0 none;
            color: #6b6b6b;
            font-weight: 500;
            font-size: 12px;
            height: 100%;
            width: 100%;
            text-indent: 15px;
            text-align: left;
            line-height: 29px;
          }
          s {
            line-height: 0;
            border-width: 4px;
            border-color: #666 transparent transparent;
            border-style: solid dashed dashed;
            height: 0;
            position: absolute;
            top: 14px;
            font-size: 0;
            left: 56px;
            z-index: 10;
            s {
              border-width: 3px;
              border-color: #f6f6f6 transparent transparent;
              top: -4px;
              left: -3px;
              position: absolute;
            }
          }
        }
        .input_box {
          margin-top: 3px;
          background: #fff;
          height: 29px;
          width: 343px;
          input {
            text-indent: 10px;
            padding: 6px 0 5px;
          }
        }
        button {
          height: 35px;
          width: 93px;
          font-size: 22px;
          background: #f50;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
    .cart {
      min-height: 400px;
      padding-bottom: 50px;
      .filter_bar {
        position: relative;
        .cart_switch {
          height: 33px;
          display: flex;
          .current {
            color: #f40;
          }
          li {
            font-weight: 700;
            font-size: 16px;
            height: 16px;
            line-height: 1.1;
            text-align: center;
            padding: 0 0 15px 0;
            cursor: pointer;
            margin-left: -1px;
            em {
              margin-left: 25px;
              font-style: normal;
            }
            .number {
              color: #f40;
              font-size: 14px;
              margin: 0 25px 0 5px;
              font-weight: 400;
              font-family: Verdana,Tahoma,arial;
            }
            .pipe {
              width: 1px;
              height: 12px;
              display: inline-block;
              background: #e8e8e8;
            }
          }
          li:first-child {
            em {
              margin-left: 15px;
            }
          }
        }
        .warp_line {
          background: #e6e6e6;
          height: 2px;
          position: relative;
          .floater {
            background: #f40;
            height: 2px;
            position: absolute;
            top: 0;
            overflow: hidden;
            width: 132px;
          }
        }
      }
      .th {
        height: 50px;
        line-height: 50px;
        color: #3c3c3c;
        font-size: 12px;
        display: flex;
        .all {
          width: 45px;
          font-size: 12px;
          text-align: left;
          position: relative;
          >div {
            position: absolute;
            display: flex;
            left: 15px;
            top: 0;
            width: 80px;
            cursor: pointer;
          }
        }
        .item {
          width: 302px;
          padding-left: 91px;
        }
        .info {
          width: 192px;
        }
        .price, .account {
          width: 120px;
          padding-left: 10px;
        }
        .sum {
          width: 105px;
        }
        .op {
          width: 84px;
          padding-left: 15px;
        }
      }
      .foot_bar {
        position: fixed;
        bottom: -1px;
        height: 50px;
        line-height: 50px;
        width: 990px;
        background: #e5e5e5;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        .left {
          display: flex;
          .all {
            width: 55px;
            height: 50px;
            line-height: 50px;
            padding-left: 5px;
            display: flex;
          }
          .operation {
            span {
              color: #3c3c3c;
              margin-left: 25px;
              cursor: pointer;
            }
            span:hover {
              color: @hover;
            }
          }
        }
        .right {
          display: flex;
          padding-left: 20px;
          .selected {
            line-height: 46px;
            em {
              font-weight: 700;
              font-size: 18px;
              font-family: tohoma,arial;
              color: @hover;
            }
            .arrow_box {
              display: inline-block;
              width: 5px;
              height: 6px;
              background-position: 0 -115px;
              margin: 21px 10px 0 6px;
              background-image: image-set(url("./img/tb_icon.png") 2x);
            }
          }
          .price {
            color: #f40;
            font-weight: 400;
            font-size: 18px;
            line-height: 48px;
            font-family: Arial;
            vertical-align: middle;
            em {
              font-weight: 700;
              font-size: 22px;
              padding-right: 3px;
            }
          }
          .btn {
            background: #B0B0B0;
            color: #fff;
            border-left: 1px solid #e7e7e7;
            width: 119px;
            cursor: not-allowed;
            font-size: 20px;
            border-radius: 2px;
          }
          .buy {
            background: @hover;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>

<script>
import Header from '@/components/Layout/Header'
import Checkbox from '@/components/Checkbox/Checkbox'
import CartItem from './CartItem'

export default {
  name: 'Cart',
  data () {
    return {
      switchIndex: 0,
      switchList: [
        { title: '全部商品', num: 30 },
        { title: '降价商品', num: 3 },
        { title: '库存紧张', num: 0 }
      ],
      switchLine: 0,
      cartList: [{
        shop: '小米官方旗舰店1',
        shopid: 'xm',
        check: false,
        itemList: [{
          id: 'xm-0',
          img: require('./img/mi.jpg'),
          basic: 'xiaomi小米官方旗舰店移动电源2 10000充电宝超薄便携大容量金属',
          info: {
            颜色: '黑色'
          },
          price: '79.00',
          num: 1,
          check: false
        }, {
          id: 'xm-1',
          img: require('./img/mi.jpg'),
          basic: 'xiaomi小米官方旗舰店移动电源2 10000充电宝超薄便携大容量金属',
          info: {
            颜色: '白色'
          },
          price: '69.00',
          num: 2,
          check: false
        }]
      }, {
        shop: 'NOTHOME',
        shopid: 'nh',
        check: false,
        itemList: [{
          id: 'nh-0',
          img: require('./img/mi.jpg'),
          basic: 'NOTHOMME日系潮牌复古做旧拼接撞色工装夹克男款翻领外套ifashion',
          info: {
            颜色: '白色',
            尺码: 'S'
          },
          price: '88.00',
          num: 1,
          check: false
        }]
      }],
      total: 0,
      selected: 0,
      all: false
    }
  },
  methods: {
    switchHover: function (index) {
      this.switchLine = index * 138
    },
    switchBlur: function () {
      this.switchLine = this.switchIndex * 138
    },
    changeState: function (state) {
      console.log(state)
    },
    onCheck: function (key, check) {
      let total = 0
      let selected = 0
      // 遍历 将选中的物品check设置为true
      this.cartList.forEach((cart, cindex) => {
        let { itemList } = cart
        itemList.forEach((item, index) => {
          if (item.id === key) {
            console.log(check)
            this.cartList[cindex].itemList[index].check = check
          }
          if (item.check) {
            total += item.price * item.num
            selected++
          }
        })
        // 判断店铺所有商品是否选中
        if (itemList.filter(item => !item.check).length === 0) {
          this.cartList[cindex].check = true
        } else {
          this.cartList[cindex].check = false
        }
      })
      // 是否全选
      if (this.cartList.filter(item => !item.check).length === 0) {
        this.all = true
      } else {
        this.all = false
      }
      this.total = total
      this.selected = selected
    },
    shopCheck: function (key, check) {
      this.cartList.forEach((item, cindex) => {
        if (item.shopid === key) {
          let { itemList } = item
          this.cartList[cindex].check = check
          itemList.forEach((_item, index) => {
            this.cartList[cindex].itemList[index].check = check
          })
        }
      })
      if (this.cartList.filter(item => !item.check).length === 0) {
        this.all = true
      } else {
        this.all = false
      }
      this.update()
    },
    allCheck: function (check) {
      this.cartList.forEach((item, cindex) => {
        let { itemList } = item
        this.cartList[cindex].check = check
        itemList.forEach((_item, index) => {
          this.cartList[cindex].itemList[index].check = check
        })
      })
      this.all = check
      this.update()
    },
    update: function () {
      let total = 0
      let selected = 0
      this.cartList.forEach(cart => {
        let { itemList } = cart
        itemList.forEach(item => {
          if (item.check) {
            total += item.price * item.num
            selected++
          }
        })
      })
      this.total = total
      this.selected = selected
    }
  },
  components: {
    Header,
    Checkbox,
    CartItem
  }
}
</script>
