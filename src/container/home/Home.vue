<template>
  <div>
    <Header/>
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
    margin-top: 24px;
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
  }
  .main {
    width: 1190px;
    margin: 0 auto;
    height: 632px;
    display: flex;
    .main_inner {
      display: flex;
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
      }
    }
  }
</style>

<script>
import Header from '@/components/Layout/Header'
import Menu from '@/components/Home/Menu'
import Carousel from '@/components/Carousel/Carousel'

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
      imgIndex2: 0
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
    }
  },
  components: {
    Header,
    Menu,
    Carousel
  }
}
</script>
