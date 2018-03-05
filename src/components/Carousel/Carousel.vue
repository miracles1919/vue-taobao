<template>
  <div v-on:mouseenter="hover" v-on:mouseleave="blur">
    <div v-bind:style="{ width: width + 'px', height: height + 'px' }" class="promo">
      <div v-bind:style="{ width: width * (imgList.length + 2) + 'px', transform: `translate3d(${-translate}px, 0 ,0)`, transitionDuration: translateTime + 's'}" class="promo_bd">
        <div class="banner">
          <img v-bind:src="imgList[imgList.length - 1].url" />
        </div>
        <div v-for="(item, index) in imgList" :key="'img' + index" class="banner">
          <img v-bind:src="item.url" />
          <!--<div>{{translate}}</div>-->
        </div>
        <div class="banner">
          <img v-bind:src="imgList[0].url"/>
        </div>
      </div>
      <div class="promo_opt" v-show="optShow">
        <span class="arrow" @click="distance('prev')"><i class="iconfont">&#xe602;</i></span>
        <span class="arrow" @click="distance('next')"><i i class="iconfont">&#xe603;</i></span>
      </div>
      <ul class="promo_nav">
        <li v-for="n in imgList.length" :key="n"><i v-bind:class="[index + 1 === n ? 'selected' : '', 'spot']" @click="spot(n)"/>{{ index+1 }} {{ n }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .promo {
    position: relative;
    overflow: hidden;
  }
  .promo_bd {
    position: absolute;
    overflow: hidden;
    /*transition-duration: 0.3s;*/
    /*transform: translate3d(-1560px, 0px, 0px);*/
    backface-visibility: hidden;
    left: 0px;
    opacity: 1;

    .banner {
      float: left;
    }
  }
  .promo_opt {
    transition: all .2s;
    .arrow {
      display: block;
      height: 30px;
      width: 20px;
      line-height: 30px;
      color: #fff;
      position: absolute;
      top: 50%;
      background-color: rgba(0,0,0,.3);
      cursor: pointer;
      background-clip: padding-box;
      i {
        display: flex;
        justify-content: center;
        height: 30px;
        width: 20px;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
      }
    }
    .arrow:first-child {
      border-bottom-right-radius: 15px;
      border-top-right-radius: 15px;
    }
    .arrow:last-child {
      right: 0;
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    }
  }
  .promo_nav {
    border-radius: 10px;
    position: absolute;
    bottom: 15px;
    height: 13px;
    text-align: center;
    font-size: 0;
    left: 50%;
    margin-left: -39px;
    background-color: rgba(255,255,255,.3);

    li {
      display: inline-block;
      margin: 3px;
    }

    .spot {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background: #fff;
    }
    .selected {
      background: #ff5000;
    }
  }
</style>

<script>
export default {
  name: 'Carousel',
  props: ['width', 'height', 'imgList'],
  data () {
    return {
      translate: parseInt(this.width),
      translateTime: 0.3,
      index: 0,
      optShow: false
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      setInterval(this.distance, 3000)
    },
    distance: function (type = 'next') {
      let width = parseInt(this.width)
      let length = this.imgList.length
      let translate = this.translate
      if (type === 'next') {
        // 向右滑动
        this.translate += width
        this.index += 1
        if (translate === width * length) {
          setTimeout(() => {
            this.translateTime = 0
            this.translate = width
          }, 300)
          this.index = 0
        } else {
          this.translateTime = 0.3
        }
      } else if (type === 'prev') {
        // 向左滑动
        this.translate -= width
        this.index -= 1
        if (translate === width) {
          setTimeout(() => {
            this.translateTime = 0
            this.translate = width * length
          }, 300)
          this.index = length - 1
        } else {
          this.translateTime = 0.3
        }
      }
    },
    spot: function (index) {
      if (index - 1 !== this.index) {
        let width = parseInt(this.width)
        this.translate = width * index
        this.translateTime = 0.3
        this.index = index - 1
      }
    },
    hover: function () {
      console.log(333)
      this.optShow = true
    },
    blur: function () {
      this.optShow = false
    }
  }
}
</script>
