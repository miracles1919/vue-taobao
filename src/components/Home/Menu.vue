<template>
  <div class="service" v-on:mouseleave="navBlur">
    <ul class="service_bd">
      <li v-for="(item, index) in list" :key="index" v-on:mouseenter="navHover" v-bind:class="navIndex === index ? 'hover' : ''">
        <span>{{ item }}</span>
        <i class="iconfont">&#xe64e;</i>
      </li>
    </ul>
    <div class="service_right" v-if="navIndex !== -1">
      <div class="detail">
        <detail-item v-for="n in 3" v-bind:title="list[navIndex].split('／')[n-1]" :key="n"/>
      </div>
      <div class="like"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .service {
    width: 190px;
    background-color: #FFF;
    position: relative;
  }
  .service_bd {
    border: 1px solid #ff5000;
    border-top: none;
    padding-top: 5px;
    padding-bottom: 3px;
    cursor: default;

    li {
      overflow: hidden;
      line-height: 32px;
      height: 32px;
      padding-left: 25px;
      padding-right: 19px;
      position: relative;
      font-size: 14px;
      font-weight: 400;
      width: 188px;
      transition: all .2s;
      span {
        color: #666;
      }
      i {
        color: #666;
      }
    }

    .iconfont {
      position: absolute;
      right: 10px;
      font-size: 12px;
      top: 0;
    }
    .hover {
      background-color: #ffe4dc;
      span {
        color: #FF5000 ;
      }
      i {
        color: #FF5000 ;
      }

    }
  }
  .service_right {
    position: absolute;
    left: 188px;
    top: 0;
    padding: 0 0 0 18px;
    width: 610px;
    height: 518px;
    border: 2px solid #F94A14;
    box-shadow: 2px 2px 0 #dcdadb;
    background-color: #FFF;
    color: #333;
    font-size: 12px;
    z-index: 22;
    display: flex;

    .detail {
      padding-top: 10px;
      width: 437px;
      height: 500px;
      overflow: hidden;
      padding-right: 12px;
      padding-left: 10px;
      /deep/ .item {
        font-size: 12px;
        margin-bottom: 5px;

        h5 {
          position: relative;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          color: #333;
          span {
            font-weight: 700;
            cursor: pointer;
          }
          span:hover {
            color: #F40;
          }
        }
        .more {
          font-size: 12px;
          right: -6px;
          position: absolute;
          font-weight: 400;
          top: 0;
          .iconfont{
            position: relative;
            left: -4px;
            font-size: 12px;
            margin-left: 4px;
          }
        }
        .more:hover {
          color: #F40;
          .iconfont {
            color: #F40;
          }
        }

        p {
          height: 104px;
          overflow: hidden;
          padding-bottom: 33px;
          line-height: 26px;
        }
      }
    }
  }
</style>

<script>

let itemHtml = '' +
  '<div class="item">' +
  '<h5><span>{{ title }}</span><span class="more">更多<i class="iconfont">&#xe64e;</i></span></h5>' +
  '<p><span>羽绒服</span><span>毛呢外套</span></p>' +
  '</div>'

let detailItem = {
  template: itemHtml,
  props: ['title'],
  data () {
    return {
      list: [

      ]
    }
  }
}

export default {
  name: 'Menu',
  data () {
    return {
      list: ['女装／男装／内衣', '鞋靴／箱包／配件', '童装玩具／孕产／用品', '家电／数码／手机', '美妆／洗护／保健品', '珠宝／眼镜／手表', '运动／户外／乐器', '游戏／动漫／影视', '美食／生鲜／零食', '鲜花／宠物／农资', '房产／装修／建材', '家具／家饰／家纺', '汽车／二手车／用品', '办公／DIY／五金电子', '百货／餐厨／家庭保健', '学习／卡券／本地服务'],
      navIndex: 1
    }
  },
  methods: {
    navHover: function (e) {
      let val = e.target.getElementsByTagName('span')[0].innerHTML.trim()
      this.navIndex = this.list.indexOf(val)
    },
    navBlur: function () {
      this.navIndex = -1
    }
  },
  components: {
    'detail-item': detailItem
  }
}
</script>
