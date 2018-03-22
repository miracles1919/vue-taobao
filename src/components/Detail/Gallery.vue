<template>
  <div class="gallery">
    <img class="main" :src="imgList[select]" />
    <ul class="thumb">
      <li v-for="(item, index) in imgList" :key="index" @mouseenter="onHover(index)">
        <img :src="item" :class="index === select ? 'selected' : ''"/>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .gallery {
    width: 460px;

    .main {
      width: 420px;
      height: 420px;
      margin: 20px auto 0;
      display: block;
    }
    .thumb {
      transition: left .2s cubic-bezier(0,0,.25,1);
      display: flex;
      justify-content: center;
      li {
        margin-right: 16px;
        padding-top: 22px;
      }
      img {
        width: 60px;
        height: 60px;
      }
      .selected {
        border: 2px solid #000;
        width: 56px;
        height: 56px;
      }
    }
  }
</style>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      imgList: [
        require('./img/tshirt1.jpg'),
        require('./img/tshirt2.jpg'),
        require('./img/tshirt3.jpg'),
        require('./img/tshirt4.jpg'),
        require('./img/tshirt5.jpg')
      ],
      select: 0
    }
  },
  methods: {
    onHover: (function () {
      let timer
      return function (index) {
        clearInterval(timer)
        timer = setTimeout(() => {
          if (this.select !== index) {
            this.select = index
          }
        }, 200)
      }
    })()
  }
}
</script>
