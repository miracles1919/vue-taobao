<template>
  <div class="headline_bd">
    <div class="headline" v-bind:style="`transform: translate3d(0, -${transform}px, 0)`">
      <div class="mod">
        <img src="./img/huawei.jpg"/>
        <h4>配置确认，华为Mate10国行开启预定</h4>
        <p>离华为在德国慕尼黑的发布会越来越近了，关于Mate10系列新机的消息也越来越多了。近日又有网友在微博上曝光了华为Mate10的线下广告宣传板，其中包含了Mate10部分的配置信息清晰可见。根据此前曝光的宣传视频来看，华为Mate10将会采用6.2英寸显示屏，屏幕分辨率则为2160</p>
      </div>
      <div class="mod">
        <img src="./img/eyebrow.jpg"/>
        <h4>今年超流行的几款眉毛，长得好看才敢画！</h4>
        <p>宝宝们今年都在画什么样的眉毛呢？是韩式一字眉，还是中国风的柳叶眉。今年大热的几款眉毛你有尝试过吗？据说只有长得好看的人才敢画，因为一般人驾驭不了...一起来看看：1、波浪/波纹眉毛形如波浪，非常有个性。。。2、羽毛眉毛羽毛一样的扇尾形状，配合这眼妆看还是挺美的~3、龙眉这算是很有</p>
      </div>
      <div class="mod">
        <img src="./img/flower.jpg"/>
        <h4>十月养月季，自己做有机肥，肥料钱都省了</h4>
        <p>10月，金秋时节，太阳高高挂，气候逐渐变凉了，月季花们纷纷抢着冒出花骨朵，尽情释放自己的美丽与优雅，这时候，营养补充就非常重要，自己在家学做有机肥，连肥料钱都省了。将废菜叶、瓜果皮、鸡和鱼的内脏、鱼鳞碎骨、蛋壳及霉变食物（花生、瓜子、豆子等）放入小缸或小坛甚至广口瓶中，加水（有条</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .headline_bd {
    height: 73px;
    overflow: hidden;
    width: 676px;
    position: relative;
    .headline {
      position: absolute;
      height: 219px;
      overflow: hidden;
      top: 0px;
      transition-duration: 0.3s;
      transform: translate3d(0px, 0px, 0px);
      backface-visibility: hidden;
      opacity: 1;

      .mod {
        width: 676px;
        height: 73px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 130px;
          height: 73px;
          float: left;
          transition: opacity .2s;
        }
        h4 {
          margin-top: 2px;
          margin-left: 144px;
          color: #333;
          height: 28px;
          display: block;
          line-height: 28px;
          font-size: 16px;
          font-weight: 500;
        }
        p {
          margin-left: 144px;
          color: #999;
          height: 36px;
          overflow: hidden;
          line-height: 18px;
          font-size: 14px;
          width: 529px;
        }
      }
      .mod:hover {
        img {
          opacity: .8;
        }
        h4 {
          color: #F40;
        }
      }
    }
  }

</style>

<script>

export default {
  name: 'Headline',
  data () {
    return {
      transform: 0
    }
  },
  mounted: function () {
    setInterval(() => {
      if (this.transform >= 73 * 2) {
        this.transform = 0
      } else {
        this.transform += 73
      }
    }, 4500)
  }
}
</script>
