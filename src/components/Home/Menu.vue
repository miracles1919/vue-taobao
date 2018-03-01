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
        <detail-item v-for="n in 3" v-bind:title="list[navIndex].split('／')[n-1]" :key="n" v-bind:index="n-1"/>
      </div>
      <div class="like">
        <h3>猜你喜欢</h3>
        <div style="display: flex; flex-wrap: wrap">
          <div class="photo_item" v-for="item in imgList" :key="item.title">
            <div class="photo_bg">
              <img v-bind:src="item.url" />
            </div>
            <h5>{{ item.title }}</h5>
          </div>
        </div>
      </div>
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
    width: 714px;
    height: 522px;
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
          height: 137px;
          overflow: hidden;
          padding-bottom: 33px;
          line-height: 26px;
          span {
            display: inline-block;
            margin-right: 17px;
            white-space: nowrap;
            color: #666;
            cursor: pointer;
          }
        }
      }
    }
    .like {
      width: 254px;
      border-left: 1px solid #f4f4f4;
      position: relative;
      height: 518px;
      padding-top: 20px;
      h3 {
        olor: #333;
        font-size: 14px;
        text-align: center;
        font-weight: 400;
      }

      .photo_item {
        width: 117px;
        height: 153px;
        padding: 10px 0 0 20px;
        img {
          display: block;
          width: 98px;
          height: 97px;
          opacity: 0.9;
          background: #fff;
        }

        h5 {
          height: 26px;
          line-height: 26px;
          font-size: 12px;
          overflow: hidden;
          font-weight: 400;
          color: #999;
        }
        .photo_bg {
          background: #4f4f4f;
        }
      }
      .photo_item:hover {
        img {
          opacity: 0.8;
        }
      }
    }
  }
</style>

<script>

let itemHtml = '' +
  '<div class="item">' +
  '<h5><span>{{ title }}</span><span class="more">更多<i class="iconfont">&#xe64e;</i></span></h5>' +
  '<p><span v-for="item in list[index]">{{ item }}</span></p>' +
  '</div>'

let detailItem = {
  template: itemHtml,
  props: ['title', 'index'],
  data () {
    return {
      list: [
        ['羽绒服', '毛呢外套', '毛衣', '针织衫', '棉服', '连衣裙', '气场外套', '风衣', '裤子', '卫衣', 'T恤', '阔腿裤', '衬衫', '牛仔裤', '半身裙', '大码女装', '时尚套装', '西装', '打底衫', '夹克', '风衣', '皮草', '妈妈装', '民族舞台', '腔调', '私服名媛', '甜美风', '文艺风', '街头风', '原创', '通勤风', '婚纱礼服'],
        ['原创设计', '风格好店', '潮牌馆', '外套', '夹克', '衬衫', 'T恤', '运动外套', '棒球服', '明星网红', '牛仔外套', '卫衣', '西装', '风衣', '皮衣', '针织衫', 'POLO衫', '套装', '开衫', '呢大衣', '休闲裤', '牛仔裤', '运动裤', '九分裤', '专柜大牌', '哈伦韩', '阔腿裤', '马甲', '羽绒服', '棉衣', '穿搭攻略', '中老年', '情侣装', '大码', '民族风'],
        ['保暖内衣', '丝绒睡衣', '内裤女', '文胸', '内裤男', '长袖睡衣', '夹棉睡衣', '长筒袜', '棉袜', '情侣睡衣', '秋裤', '保暖背心', '睡袍', '男士睡衣', '塑身衣', '内衣套装', '打底裤', '连体睡衣', '睡裙女冬', '塑拢文胸', '男士袜子', '棉袜女', '卡通睡衣', '珊瑚绒睡衣']
      ]
    }
  }
}

export default {
  name: 'Menu',
  data () {
    return {
      list: ['女装／男装／内衣', '鞋靴／箱包／配件', '童装玩具／孕产／用品', '家电／数码／手机', '美妆／洗护／保健品', '珠宝／眼镜／手表', '运动／户外／乐器', '游戏／动漫／影视', '美食／生鲜／零食', '鲜花／宠物／农资', '房产／装修／建材', '家具／家饰／家纺', '汽车／二手车／用品', '办公／DIY／五金电子', '百货／餐厨／家庭保健', '学习／卡券／本地服务'],
      navIndex: 1,
      imgList: [{
        url: require('./img/img1.jpg'),
        title: 'LNBR 权力的游戏'
      }, {
        url: require('./img/img2.jpg'),
        title: 'VEGA'
      }, {
        url: require('./img/img3.jpg'),
        title: 'Apple/苹果'
      }, {
        url: require('./img/img4.jpg'),
        title: '任天堂Nintendo'
      }, {
        url: require('./img/img5.jpg'),
        title: '包邮5.5寸手机包'
      }, {
        url: require('./img/img6.jpg'),
        title: '特步男鞋跑步鞋冬'
      }]
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
