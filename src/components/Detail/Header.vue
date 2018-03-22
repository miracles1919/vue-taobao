<template>
  <div>
    <div class="head">
      <img class="icon" src="../Layout/img/tmall.png" />
      <div class="shop">
        <div class="slogo">
          <strong>libetter旗舰店</strong>
          <div class="extraicon">
            <span><span>品牌直销</span></span>
            <i class="wang" />
          </div>
        </div>
        <div class="info">
          <div class="item" v-for="item in infoList" :key="item">
            <span>{{item}}</span>
            <span style="color: #ff0036;">4.7</span>
          </div>
        </div>
      </div>
      <div class="search_wrap">
        <div class="search">
          <input placeholder="搜索 天猫 商品/品牌/店铺" />
          <button>搜天猫</button>
        </div>
        <button class="own">搜本店</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @mixin flex {
    display: flex;
  }
  @mixin info {
    padding: 0 10px;
    height: 38px;
    border-left: 1px solid #f0f0f0;
  }
  .head {
    width: 1190px;
    margin: 0 auto;
    height: 85px;
    font-size: 12px;
    position: relative;
    @include flex;
    .icon {
      height: 20px;
      margin-top: 20px;
      margin-right: 17px;
    }
    .shop {
      margin-top: 15px;
      height: 50px;
      @include flex;
      .slogo {
        @include info;
        strong {
          color: #333;
          font-weight: 700;
        }
        .extraicon {
          height: 25px;
          width: 80px;
          >span {
            display: inline-block;
            vertical-align: top;
            padding: 0;
            height: 14px;
            line-height: 14px;
            font-weight: 700;
            background-color: #f4c985;
            border: 1px solid #e7ba77;
            border-radius: 2px;
            color: #856651;
            text-align: center;
            >span {
              font-size: 10px;
              transform: scale(.83);
              display: inline-block;
            }
          }
          i {
            height: 22px;
            width: 20px;
            color: #333;
            background-position: -110px 0;
            display: inline-block;
            background-image: image-set(url("img/wang.gif") 4x);
          }
        }
      }
      .info {
        @include flex;
        @include info;
        .item {
          width: 36px;
          height: 36px;
          text-align: center;
          span {
            color: #999;
            font-weight: 700;
          }
          s {
            color: #ff0036;
            width: 8px;
            top: 5px;
            position: absolute;
          }
          s:before {
            content: "\e600";
            font-size: 12px;
            font-family: tm-shop-font;
            position: absolute;
            left: -2px;
            top: -4px;
          }
        }
      }
    }
    .search_wrap {
      position: absolute;
      right: 0px;
      top: 20px;
      @include flex;
      .own {
        position: unset;
        height: 36px;
        background: #333;
        margin-left: 2px;
      }
    }
    .search {
      border: solid #ff0036;
      border-width: 3px 0 3px 3px;
      width: 458px;
      height: 36px;
      overflow: hidden;
      position: relative;
      input {
        padding: 5px 3px 5px 5px;
        width: 375px;
      }
    }
    button {
      right: 0;
      top: 0;
      width: 80px;
      height: 30px;
      border: 0;
      font-size: 16px;
      letter-spacing: 0;
      cursor: pointer;
      color: #fff;
      background-color: #ff0036;
      overflow: hidden;
      position: absolute;
    }
  }
</style>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      infoList: ['描 述', '物 流', '服 务']
    }
  }
}
</script>
