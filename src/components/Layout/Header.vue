<template>
  <div>
    <div class="head_bg">
      <div class="nav">
        <ul class="nav_left">
          <li v-on:mouseenter="hover" v-on:mouseleave="blur" v-bind:class="areaShow ? navHover : ''" data-key="areaShow">
            <span>中国大陆</span>
            <div v-show="areaShow" class="menu">
              <ul class="area_list">
                <li v-for="item in areaList" :key="item">{{ item }}</li>
              </ul>
            </div>
          </li>
          <li v-on:mouseenter="hover" v-on:mouseleave="blur" v-bind:class="userShow ? navHover : ''" data-key="userShow">
            <span>xuxiaoli1995</span>
            <div v-show="userShow" class="menu">
              <div class="user_menu">
                <div style="display: flex">
                  <img class="avatar" src="./img/avatar.jpeg"/>
                  <div class="info">
                    <p>
                      <router-link to="/member"><span style="margin-right: 10px">账号管理</span></router-link>
                      |
                      <router-link to="/login"><span style="margin-left: 10px">退出</span></router-link>
                    </p>
                    <p>淘气值：627</p>
                    <p>普通会员</p>
                  </div>
                </div>
                <a class="privilege" href="#">查看你的专属权益</a>
              </div>
            </div>
          </li>
          <li><span>消息</span></li>
          <li><span>手机逛淘宝</span></li>
          <li><router-link to="login">退出</router-link></li>
        </ul>
        <ul class="nav_right">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/member">我的淘宝</router-link>
          </li>
          <li>
            <router-link to="/cart">购物车</router-link>
          </li>
          <li>
            <span>收藏夹</span>
          </li>
          <li>
            <span>商品分类</span>
          </li>
          <li>|</li>
          <li><span>卖家中心</span></li>
          <li><span>联系客服</span></li>
          <li><span>网站导航</span></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
  .head_bg {
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #eee;
  }
  .nav {
    margin: 0 auto;
    width: 1190px;
    height: 35px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .nav_left, .nav_right {
    display: flex;

    >li {
      line-height: 35px;
      padding: 0 6px;
      margin-right: 10px;
      cursor: pointer;
      position: relative;
      border-width: 0 1px;
      border-color: #f5f5f5;
      border-style: solid;

      span:hover {
        color: #f40;
      }
      a:hover {
        color: #f40;
      }
    }
  }
  .nav_hover {
    background-color: #fff;
    border-color: #eee !important;
  }
  .menu {
    position: absolute;
    left: -1px;
    z-index: 10;
    background: #fff;
  }
  .area_list, .user_menu {
    border: 1px solid #EEE;
  }
  .area_list {
    padding: 8px 0;
    >li {
      width: 242px;
      height: 29px;
      line-height: 29px;
      padding-left: 8px;
      cursor: pointer;
    }
    >li:hover {
      background-color: #f4f4f4;
    }
  }
  .user_menu {
    padding: 8px;
    width: 266px;
    cursor: default;
  }
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin: 9px 18px;
  }
  .info {
    width: 100%;
    p {
      height: 20px;
      line-height: 20px;
    }
    p:first-child {
      text-align: right;
    }
    span:hover {
      color: #f40;
      cursor: pointer;
    }
  }
  .privilege{
    display: block;
    text-align: center;
    border: 1px solid #FFE8DE;
    background: #FFF0E8;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
  }
  .privilege:hover {
    color: #f40;
  }
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      areaShow: false,
      userShow: false,
      areaList: ['全球', '中国大陆', '香港', '台湾', '澳门', '日本'],
      navHover: 'nav_hover'
    }
  },
  mounted: function () {
  },
  methods: {
    hover: function (e) {
      let key = e.target.getAttribute('data-key')
      this[key] = true
    },
    blur: function (e) {
      let key = e.target.getAttribute('data-key')
      this[key] = false
    }
  }
}
</script>
