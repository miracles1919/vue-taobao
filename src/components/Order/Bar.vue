<template>
  <div style="display: flex">
    <h1>
      <i class="logo" />
    </h1>
    <ul class="step">
      <li class="current">查看购物车</li>
      <li>拍下商品</li>
      <li>付款到购物车</li>
      <li>确认收获</li>
      <li>评价</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    padding: 26px 0 12px;
    width: 170px;
    height: 77px;
    overflow: hidden;

    .logo {
      display: inline-block;
      width: 170px;
      height: 35px;
      background: url('./img/icons.png') 0 -555px no-repeat;
    }
  }
  .step {
    display: flex;
    margin-top: 40px;
    margin-left: 30px;
    li {
      width: 158px;
      height: 23px;
      font-size: 14px;
      position: relative;
      background: url('./img/icons.png') 100% -1040px no-repeat #e4e4e4;
      color: #404040;
      font-weight: 700;
      box-sizing: border-box;
      padding-right: 15px;
      text-align: center;
    }
    .current {
      background-color: #f40;
      color: #fff;
    }
    li:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    li:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-image: none;
    }
  }
</style>

<script>
export default {
  name: 'StepBar'
}
</script>
