<template>
  <div class="head_bg">
    <div class="nav">
      <ul class="nav_left">
        <li>
          <span>中国大陆</span>
        </li>
        <li v-on:mouseenter="hover" v-on:mouseleave="blur">
          <span>遮不住的时光</span>
        </li>
        <li><span>消息</span></li>
        <li><span>手机逛淘宝</span></li>
      </ul>
      <ul class="nav_right"></ul>
    </div>
  </div>
</template>

<style lang="less">
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
  }
  .nav_left {
    display: flex;

    li {
      line-height: 35px;
      padding: 0 6px;
      cursor: pointer;

      span:hover {
        color: #f40;
      }
    }
  }
  .nav_hover {
    background-color: #fff;
  }
</style>

<script>
export default {
  name: 'Header',
  methods: {
    hover: function (e) {
      e.target.className += ' nav_hover'
    },

    blur: function (e) {
      e.target.className = e.target.className.replace(/nav_hover/g, '')
    }
  }
}
</script>
