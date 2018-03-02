<template>
  <div>
    <div v-bind:style="{ width: width + 'px', height: height + 'px' }" class="promo">
      <div v-bind:style="{ width: width * (imgList.length + 1) + 'px', transform: `translate3d(${-translate}px, 0 ,0)`, transitionDuration: translateTime + 's'}" class="promo_bd">
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
</style>

<script>
export default {
  name: 'Carousel',
  props: ['width', 'height', 'imgList'],
  data () {
    return {
      translate: parseInt(this.width),
      translateTime: 0.3
    }
  },
  mounted: function () {
    this.start()
  },
  methods: {
    start: function () {
      let width = this.width
      let length = this.imgList.length
      setInterval(() => {
        let translate = this.translate
        console.log(translate)
        if (translate < width * length) {
          this.translate += 520
          if (translate === width * (length - 1)) {
            setTimeout(() => {
              this.translateTime = 0
              this.translate = 0
            }, 300)
          } else {
            this.translateTime = 0.3
          }
        }
      }, 2000)
    }
  }
}
</script>
