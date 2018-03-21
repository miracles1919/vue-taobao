<template>
  <div>
    <div class="top_wrap">
      <div class="logo"><img src="./img/logo.png"/></div>
      <div class="search_wrap">
        <div class="search_bd">
          <div class="tab_wrap">
            <ul>
              <li v-for="(item, index) in tab" :key="item" v-bind:class="[index === tabIndex ? 'select_tab' : '', 'search_tab']" @click="tabClick">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="search_fields">
            <div class="search">
              <input />
            </div>
            <div class="button">
              <button>搜索</button>
            </div>
          </div>
        </div>
        <div class="search_ft">
          <ul class="search_key">
            <li v-for="item in keyList" :key="item">{{ item }}</li>
          </ul>
          <span>更多 ></span>
        </div>
      </div>
      <div v-show="qrcode" class="qrcode">
        <p>手机淘宝</p>
        <img src="./img/qrcode.png"/>
        <div class="close" @click="qrcodeClose">
          <i class="iconfont">&#xe6d0;</i>
        </div>
      </div>
    </div>
    <div class="nav" v-on:mouseleave="navBlur">
      <div class="nav_wrap">
        <h2>主题市场</h2>
        <ul>
          <li v-for="(item, index) in navList" :key="item" v-on:mouseenter="navHover">
            <span style="font-size: 16px">{{ item }}</span>
            <div class="icon" v-show="hoverIndex === index"><i class="iconfont">&#xe74a;</i></div>
          </li>

        </ul>
        <ul>
          <li class="pipe">|</li>
          <li v-for="(item, index) in navList2" :key="item" v-on:mouseenter="navHover">
            <span>{{ item }}</span>
            <div class="icon" v-show="hoverIndex === index + 3"><i class="iconfont">&#xe74a;</i></div>
          </li>
        </ul>
        <ul>
          <li class="pipe">|</li>
          <li v-for="(item, index) in navList3" :key="item" v-on:mouseenter="navHover">
            <span>{{ item }}</span>
            <div class="icon" v-show="hoverIndex === index + 8"><i class="iconfont">&#xe74a;</i></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg">
      <div class="main">
        <div class="main_inner">
          <Menu />
          <div class="core">
            <Carousel width="520" height="280" v-bind:imgList="imgList" v-bind:spotShow="true"/>
            <div class="tmall">
              <div class="tmall_hd">
                <span class="hd_bg"/>
                <em>理想生活上天猫</em>
                <strong><i>{{ imgIndex2 + 1 }}</i>/{{ imgList2.length }}</strong>
              </div>
            </div>
            <Carousel width="520" height="200" v-bind:imgList="imgList2" duration="3500" v-bind:updateIndex="updateIndex2"/>
          </div>
          <div class="sub_column">
            <img src="./img/ad.jpg" />
            <h5>今日热卖</h5>
            <img src="./img/ad2.jpg" />
          </div>
          <div class="tbh_headline">
            <div class="headline">
              <img class="icon" src="./img/tb_head.png"/>
              <Headline />
            </div>
          </div>
        </div>
        <div class="col_right">
          <div class="tbh_member">
            <div class="member">
              <div class="member_bd">
                <div class="avatar_wrapper">
                  <img src="./img/avatar.jpeg"/>
                </div>
                <p class="nick_info">
                  Hi!<strong>遮不住的时光</strong>
                </p>
                <p class="nick_info">
                  <span><i class="tbh_icon"/>领淘金币抵钱</span>
                  <span><i class="tbh_icon"/>会员俱乐部</span>
                </p>
                <div class="ft">
                  <ul>
                    <li><strong>0</strong>待收货</li>
                    <li><strong>0</strong>代发货</li>
                    <li><strong>0</strong>待付款</li>
                    <li><strong>0</strong>待评价</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tipoff">
              网上有害信息举报专区
              <i class="triangle" />
            </div>
            <div class="notice">
              <ul class="notice_hd">
                <li v-for="(item, index) in noticeList" v-bind:class="[ noticeIndex === index ? 'selected' : '' , 'tab']" :key="index" v-on:mouseenter="noticeHover(index)">{{ item }}</li>
              </ul>
              <notice-html v-bind:index="noticeIndex" />
            </div>
          </div>
          <div class="conve_div">
            <ul class="conve_list">
              <li class="conve_item" v-for="item in iconList" :key="item.name">
                <span v-bind:style="`background-position-y:${item.position}px`"/>
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
          <div class="app">
            <h3>阿里APP<span>更多 ></span></h3>
            <img src="./img/app.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .top_wrap {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .logo {
      width: 190px;
      height: 80px;
      margin-top: 8px;

      img {
        width: 142px;
        height: 58px;
        margin-left: 22px;
      }
    }
  }

  .search_wrap{
    margin-left: 258px;
    margin-right: 302px;
    position: absolute;

    .tab_wrap {
      height: 22px;
      margin-left: 17px;
      .search_tab {
        color: #F40;
        text-align: center;
        float: left;
        width: 36px;
        height: 22px;
        line-height: 22px;
        margin-right: 4px;
        cursor: pointer;
        font-size: 12px;
      }
      .search_tab:hover {
        background-color: #FFEEE5;
        color: #FF5400;
      }

      .select_tab {
        color: #FFF !important;
        font-weight: 700;
        background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
        background-repeat: repeat-x;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
      }
    }
    .search_fields{
      margin-right: 74px;
      border: 2px solid #ff5000;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border-right: none;
      overflow: hidden;
      height: 40px;

      .search {
        padding-right: 82px;
        input {
          padding: 6px 0;
          text-indent: 10px;
          height: 36px;
          line-height: 24px;
          width: 472px;
          border: none;
          outline: 0;
          background: #FFF;
        }
      }

      .button {
        position: absolute;
        right: 0;
        top: 22px;
        width: 74px;
        height: 40px;
        overflow: hidden;
        text-align: center;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        button {
          font-size: 18px;
          font-weight: 700;
          color: #FFF;
          background-color: #FF4200;
          cursor: pointer;
          height: 100%;
          border: none;
          width: 100%;
          background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
          background-repeat: repeat-x;
          cursor: pointer;
        }
      }

    }
  }
  .search_ft {
    padding: 5px 0 0 0;
    height: 20px;
    display: flex;

    .search_key {
      height: 18px;
      line-height: 18px;
      margin-bottom: 5px;
      display: flex;
      font-size: 12px;
      width: 589px;

      li {
        margin-right: 8px;
        color: #666;
        cursor: pointer;
      }
      li:hover {
        color: #F40;
      }
    }
    span {
      color: #666;
      cursor: pointer;
      font-size: 12px;
    }
    span:hover {
      color: #F40;
    }
  }
  .qrcode {
    position: absolute;
    top: 0;
    right: 110px;
    border: 1px solid #eee;
    background-color: #FFF;

    p {
      line-height: 20px;
      margin: 4px auto 0;
      width: 78px;
      font-size: 12px;
      text-align: center;
      color: #ff5000;
    }
    img {
      width: 62px;
      height: 62px;
      margin-left: 6px;
    }
    .close {
      position: absolute;
      top: 0;
      left: -15px;
      width: 14px;
      height: 14px;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i {
        font-size: 14px;
        color: #DDD;
      }
    }
  }
  .nav {
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    background-repeat: repeat-x;
    height: 30px;
    line-height: 30px;
    margin-top: 13px;
    .nav_wrap {
      width: 1190px;
      margin: 0 auto;
      display: flex;
      font-size: 16px;
      h2 {
        width: 190px;
        text-align: center;
        font-size: 16px;
        background: #ff5000;
        color: #fff;
        font-weight: bold;
      }
      ul {
        display: flex;
      }
      li {
        margin: 0 3px;
        text-align: center;
        padding: 0 4px;
        cursor: pointer;
        position: relative;
        span {
          font-weight: 700;
          color: #fff;
          padding: 0 5px;
          font-size: 14px;
        }
        .icon {
          position: absolute;
          z-index: -1;
          left: 50%;
          top: -18px;
          margin-left: -15px;
        }
        .iconfont {
          font-size: 30px;
          color: #ff5000;
        }
      }
      .pipe {
        margin-left: 7px;
        color: #fff;
      }
    }
  }
  .bg {
    background-color: #f4f4f4;
    padding-bottom: 30px;
  }
  .main {
    width: 1190px;
    margin: 0 auto;
    height: 632px;
    display: flex;
    .main_inner {
      display: flex;
      flex-wrap: wrap;
      .core {
        margin-left: 10px;
        margin-top: 10px;
        height: 512px;
        width: 520px;
        .tmall {
          font-size: 14px;
          padding-top: 11px;
          border-bottom: 3px solid #ff1648;
          background-color: #f1f1f1;
          .tmall_hd {
            height: 18px;
            line-height: 18px;
            position: relative;
            .hd_bg {
              width: 136px;
              position: absolute;
              height: 19px;
              background-repeat: no-repeat;
              background-position: 2px 0;
              background-size: 122px 22px;
              background-image: url("./img/tmall.png");
            }
            em {
              font-size: 12px;
              color: #666;
              position: relative;
              margin-left: 136px;
              font-style: normal;
            }
            strong {
              position: absolute;
              right: 0;
              font-family: sans-serif;
              font-size: 12px;
              font-weight: 400;

              i {
                font-style: normal;
                color: #ff1648;
              }
            }
          }
        }
      }
      .sub_column {
        width: 160px;
        height: 512px;
        margin-right: 10px;
        margin-top: 10px;
        margin-left: 10px;
        h5 {
          font-size: 12px;
          font-weight: 400;
          background: #f1f1f1;
          color: #a1a1a1;
          line-height: 24px;
        }
      }
      .tbh_headline {
        width: 890px;
        height: 100px;
        .headline {
          padding: 14px 14px 12px 20px;
          margin-top: 5px;
          background: #fff;
          display: flex;
          .icon {
            height: 73px;
          }
        }
      }
    }
    .col_right {
      width: 290px;
      height: 100%;
      margin-top: 10px;
      .tbh_member {
        background-size: 290px 145px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-image: url("./img/userinfo_bg.png");
        .member {
          height: 145px;
          padding: 3px 0 10px 0;
          text-align: center;
          background-repeat: no-repeat;
          .member_bd {
            position: relative;
            height: 91px;
            .avatar_wrapper {
              margin: 0 auto;
              img {
                border: 3px solid #fff;
                width: 50px;
                height: 50px;
                border-radius: 50%;
              }
            }
            .nick_info {
              line-height: 17px;
              height: 17px;
              font-size: 12px;
              color: #3C3C3C;
              strong {
                font-weight: 400;
              }
              span {
                display: inline-block;
                border-radius: 9px;
                background-clip: padding-box;
                background: #ffe4db;
                padding: 0 10px 0 20px;
                position: relative;
                border: none;
                color: #ff5000;
                cursor: pointer;
              }
              .tbh_icon {
                background: url("./img/icon.png") 0 0 no-repeat;
                background-size: 24px 597px;
                position: absolute;
                top: 0;
                display: block;
                left: 0;
                height: 16px;
                width: 16px;
                vertical-align: middle;
              }
              span:first-child {
                .tbh_icon {
                  background-position: 0 -575.5px;
                }
              }
              span:last-child {
                .tbh_icon {
                  background-position: 0 -528px;
                }
              }
            }
            .ft {
              height: 40px;
              margin-top: 2px;
              padding-left: 15px;
              ul {
                display: flex;
              }

              li {
                width: 66px;
                text-align: center;
                border-left: 1px solid #FFF;
                color: #3C3C3C;
                font-size: 12px;
                cursor: pointer;
                strong {
                  display: block;
                  font-size: 14px;
                  color: #F40;
                  height: 18px;
                }
              }
              li:hover {
                color: #F40;
              }
            }
          }
        }
        .tipoff {
          padding-left: 82px;
          color: #f40;
          display: block;
          height: 26px;
          line-height: 26px;
          background: #ffe4dd;
          font-size: 12px;
          position: relative;
          cursor: pointer;
          .triangle {
            position: absolute;
            right: 52px;
            top: 8px;
            line-height: 0;
            width: 0;
            height: 0;
            border-style: solid;
            margin-left: 32px;
            border-width: 5px 0 5px 7px;
            border-color: transparent transparent transparent #f40;
          }
        }
        .notice {
          height: 108px;
          padding-top: 10px;
          width: 290px;
          background-color: #FFF;
          .notice_hd {
            position: relative;
            height: 24px;
            margin-top: 4px;
            overflow: hidden;
            margin-right: -2px;
            padding: 0 8px;
            display: flex;
            .tab {
              height: 20px;
              line-height: 20px;
              width: 32px;
              text-align: center;
              margin: 0 11px;
              font-size: 12px;
              cursor: pointer;
            }
            .selected {
              padding: 0;
              font-weight: 700;
              border-bottom: 2px solid #F40;
            }
          }
          /deep/ .mod {
            margin: 0 12px;
            height: 65px;
            overflow: hidden;
            padding-top: 9px;
            padding-bottom: 6px;
            font-size: 12px;
            .h {
              color: #ff5000;
            }
            li {
              float: left;
              line-height: 25px;
              height: 25px;
              width: 130px;
              overflow: hidden;
              cursor: pointer;
            }
            li:hover {
              color: #ff5000;
            }
          }
        }
      }
      .conve_div {
        border-top: 1px solid #f4f4f4;
        background: #fff;
        .conve_list {
          width: 294px;
          display: flex;
          flex-wrap: wrap;
          .conve_item {
            width: 73px;
            height: 77px;
            border: 1px solid #f4f4f4;
            border-left-color: transparent;
            border-top-color: transparent;
            text-align: center;
            cursor: pointer;

            span {
              display: inline-block;
              width: 24px;
              height: 24px;
              margin-top: 11px;
              background-repeat: no-repeat;
              background: url('./img/icon.png') 0 0 no-repeat;
              background-size: 24px 597px;
            }
            p {
              color: #333;
              line-height: 24px;
              height: 34px;
              font-size: 12px;
            }
          }
          .conve_item:hover {
            p {
              color: #ff5000;
            }
          }
        }
      }
      .app {
        height: 110px;
        background: #fff;
        h3 {
          font-size: 14px;
          padding-left: 14px;
          height: 30px;
          line-height: 30px;
          font-weight: 700;
          span {
            font-size: 12px;
            float: right;
            margin-right: 13px;
          }
        }
        img {
          width: 250px;
          margin-left: 23px;
        }
      }
    }
  }
</style>

<script>
import Header from '@/components/Layout/Header'
import Menu from '@/components/Home/Menu'
import Carousel from '@/components/Carousel/Carousel'
import Headline from '@/components/Carousel/Headline.vue'

let noticeHtml = {
  template: '<ul class="mod" v-html="notice[index]"></ul>',
  props: ['index'],
  data () {
    return {
      notice: [
        '<li class="h" style="width: 260px">阿里集团战略投资居然之家 开启家居新零售时代</li><li>天猫38女王节正式上线</li><li>外媒为盒马速度点赞</li>',
        '<li>《阿里创作平台管理规范</li><li>《淘宝网数字娱乐市场</li><li>《淘宝网大家电须通过</li><li>飞猪旅行集市用车相关</li>',
        '<li class="h">阿里员工疯了</li><li>评价管理功能上线</li><li>正确的品牌营销推广</li><li>2018年消费者趋势</li>',
        '<li class="h">公益“护苗”行动招募</li><li class="h">你愿意加入我们吗？</li><li>卖家注意：风险通报！</li><li>售假获刑又起诉！</li>',
        '<li class="h">九寨沟地震紧急救援</li><li class="h">公益宝贝卖家准入公告</li><li>致百万商家的感谢信</li><li>公益宝贝卖家发票索取</li>'
      ]
    }
  }
}

export default {
  name: 'Home',
  data () {
    return {
      tab: ['宝贝', '天猫', '店铺'],
      keyList: ['桌垫', '男运动鞋', '积木', '运动鞋', '时尚女包', '新款男鞋', '妈妈装', '双肩包', '夹克', '定制窗帘'],
      navList: ['天猫', '聚划算', '天猫超市'],
      navList2: ['淘抢购', '电器城', '司法拍卖', '中国质造', '兴农扶贫'],
      navList3: ['飞猪旅行', '智能生活', '苏宁易购'],
      tabIndex: 0,
      qrcode: true,
      hoverIndex: -1,
      imgList: [
        { url: require('./img/c1.jpg') },
        { url: require('./img/c2.jpg') },
        { url: require('./img/c3.jpg') }
      ],
      imgList2: [
        { url: require('./img/d1.png') },
        { url: require('./img/d2.png') },
        { url: require('./img/d3.png') }
      ],
      imgIndex2: 0,
      noticeList: ['公告', '规则', '论坛', '安全', '公益'],
      noticeIndex: 0,
      noticeHtml: '',
      iconList: [
        {name: '充话费', position: '0'},
        {name: '旅行', position: '-85'},
        {name: '车险', position: '-44'},
        {name: '游戏', position: '-132'},
        {name: '彩票', position: '-176'},
        {name: '电影', position: '-220'},
        {name: '酒店', position: '-264'},
        {name: '理财', position: '-308'},
        {name: '找服务', position: '-352'},
        {name: '演出', position: '-396'},
        {name: '水电煤', position: '-440'},
        {name: '火车票', position: '-484'}
      ]
    }
  },
  methods: {
    tabClick: function (e) {
      if (e.target.className.indexOf('select_tab') === -1) {
        this.tabIndex = this.tab.indexOf(e.target.innerHTML.trim())
      }
    },
    qrcodeClose: function () {
      this.qrcode = false
    },
    navHover: function (e) {
      let val = e.target.getElementsByTagName('span')[0].innerText.trim()
      let list = [].concat(this.navList, this.navList2, this.navList3)
      this.hoverIndex = list.indexOf(val)
    },
    navBlur: function () {
      this.hoverIndex = -1
    },
    updateIndex2: function (index) {
      this.imgIndex2 = index
    },
    noticeHover: (function () {
      let timer = null
      return function (index) {
        clearInterval(timer)
        timer = setTimeout(() => {
          this.noticeIndex = index
        }, 200)
      }
    })()
  },
  components: {
    Header,
    Menu,
    Carousel,
    noticeHtml,
    Headline
  }
}
</script>
