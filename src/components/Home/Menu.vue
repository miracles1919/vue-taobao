<template>
  <div class="service">
    <ul class="service_bd">
      <li v-for="(item, index) in list" :key="index" v-on:mouseenter="navHover" v-on:mouseleave="navBlur" v-bind:class="navIndex === index ? 'hover' : ''">
        <span>{{ item }}</span>
        <i class="iconfont">&#xe64e;</i>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped="">
  .service {
    width: 190px;
    background-color: #FFF;
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
      color: #666;
      transition: all .2s;
    }

    .iconfont {
      position: absolute;
      right: 10px;
      font-size: 12px;
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
</style>

<script>

export default {
  name: 'Menu',
  data () {
    return {
      list: ['女装／男装／内衣', '鞋靴／箱包／配件', '童装玩具／孕产／用品', '家电／数码／手机', '美妆／洗护／保健品'],
      navIndex: -1
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
  }
}
</script>
