<template>
  <div>
    <h3>
      <span>确认收货地址</span>
      <span>管理收货地址</span>
    </h3>
    <ul class="list">
      <li v-for="(item, n) in list" :class="index === n ? 'selected' : ''" @click="onCheck(n)" :key="n">
        <div class="tip" v-if="index === n">
          <i class="iconfont">&#xe617;</i>
          <span>寄送至</span>
        </div>
        <Checkbox :isCheck="index === n"/>
        <span class="txt">{{`${`${item.location} ${item.address}`}&nbsp;&nbsp;(${item.name} 收)&nbsp;&nbsp;`}}</span>
        <em>{{item.phone}}</em>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  h3 {
    border-bottom: 2px solid #f1f1f1;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
    span:first-child {
      font-size: 14px;
      font-weight: 700;
    }
    span:last-child {
      color: #36c;
      cursor: pointer;
      font-size: 12px;
      font-weight: 400;
      float: right;
    }
  }
  .list {
    li {
      line-height: 25px;
      padding-left: 80px;
      border: 1px solid #fff;
      display: flex;
      position: relative;

      .txt {
        font-size: 12px;
        color: #3c3c3c;
        font-weight: 450;
        margin-left: 15px;
      }
      em {
        color: grey;
        font-size: 14px;
        font-weight: 700;
        font-style: normal;
      }
      &:hover {
        background-color: #fff0e8;
      }
    }
    .selected {
      border-color: #f40;
      background-color: #fff0e8;
      margin: 5px 0 7px;
      line-height: 32px;
      box-shadow: 5px 5px 0 #f3f3f3;
      .tip {
        position: absolute;
        left: 7px;
        display: flex;
        span {
          color: #f40;
          font-weight: 800;
          font-size: 12px;
          margin-left: 3px;
        }
        i {
          color: #f40;
          font-size: 20px;
        }
      }
      .txt {
        font-size: 14px;
      }
    }
  }
</style>

<script>
import Checkbox from '@/components/Checkbox/Checkbox'
export default {
  name: 'Address',
  props: ['list', 'index'],
  methods: {
    onCheck: function (index) {
      if (index !== this.index) {
        this.$emit('onCheck', index)
      } else {
        this.$emit('onCheck', -1)
      }
    }
  },
  components: {
    Checkbox
  }
}
</script>
