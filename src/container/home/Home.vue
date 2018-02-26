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
        <div class="search_ft"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .top_wrap {
    width: 1190px;
    margin: 0 auto;
    margin-top: 24px;
    display: flex;

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
</style>

<script>
import Header from '@/components/Layout/Header'

export default {
  name: 'Home',
  data () {
    return {
      tab: ['宝贝', '天猫', '店铺'],
      tabIndex: 0
    }
  },
  methods: {
    tabClick: function (e) {
      if (e.target.className.indexOf('select_tab') === -1) {
        this.tabIndex = this.tab.indexOf(e.target.innerHTML.trim())
      }
    }
  },
  components: {
    Header
  }
}
</script>
