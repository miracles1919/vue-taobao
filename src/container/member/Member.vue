<template>
  <div>
    <mt-header />
    <div class="content">
      <aside>
        <div class="avatar"><img src="./img/avatar.jpeg" /></div>
        <div class="menu-tree">
          <dl>
            <dt>账号管理</dt>
            <dd>安全设置</dd>
            <dd>个人资料</dd>
            <dd class="selected">收获地址</dd>
            <dd>支付宝绑定设置</dd>
            <dd>微博绑定设置</dd>
          </dl>
        </div>
      </aside>
      <div class="main">
        <h2>收货地址</h2>
        <div class="form">
          <div :class="['item', 'title']">
            <span>新增收货地址</span>
            <span>电话号码、手机号选填一项, 其余均为必填项</span>
          </div>
          <div :class="['item']">
            <span>所在地区 <i>*</i></span>
            <div class="address-menu"></div>
          </div>
          <div :class="['item']">
            <span>详细地址 <i>*</i></span>
            <textarea placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息" />
          </div>
          <div :class="['item']">
            <span>收货人姓名 <i>*</i></span>
            <input placeholder="长度不超过25个字符" />
          </div>
          <div :class="['item']">
            <span>手机号码 <i>*</i></span>
            <input placeholder="必填" />
          </div>
        </div>
        <button class="btn">保 存</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @mixin flex {
    display: flex;
    align-content: center;
  }
  .content {
    width: 990px;
    margin: 0 auto;
    padding-top: 25px;
    font-size: 12px;
    @include flex;

    aside {
      .avatar {
        width: 140px;
        padding: 0 15px;
        img {
          width: 100px;
        }
      }

      .menu-tree {
        padding-left: 15px;
        margin-top: -5px;
        dt {
          font-size: 15px;
          line-height: 28px;
          margin: 5px 10px 1px 0;
          color: #f40;
        }
        dd {
          line-height: 28px;
          color: #000;
          height: 28px;
          cursor: pointer;
          &:hover {
            color: #f40;
          }
        }
        .selected {
          color: #f40;
        }
      }
    }

    .main {
      width: 100%;
      h2 {
        font-size: 14px;
        color: #014d7f;
        background-color: #f3f8fe;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        font-weight: 700;
      }
      .form {
        margin-top: 20px;
        width: 530px;

        .item {
          padding-bottom: 10px;
          text-align: right;
          @include flex;
          span:first-child {
            display: inline-block;
            width: 100px;
            margin-right: 5px;
          }
          span {
            height: 26px;
            line-height: 26px;
          }
          i {
            color: red;
            font-style: normal;
          }
        }
        .title {
          span:first-child{
            text-align: center;
            color: #fc6210;
            font-weight: 500;
          }
        }
        .address-menu {
          border: 1px solid #ccc;
          font-size: 12px;
          padding: 4px 8px;
          outline: 0;
          position: relative;
          cursor: pointer;
          width: 300px;
        }

        textarea {
          display: block;
          margin: 0;
          padding: 3px;
          width: 400px;
          height: 70px;
          border: 1px solid #afafaf;
          font-size: 12px;
        }

        input {
          border: 1px solid #afafaf;
          padding: 3px;
          width: 208px;
          height: 26px;
          line-height: 18px;
          vertical-align: middle;
        }
      }
      .btn {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 20px;
        color: #FFF;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        background: #ff4001;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        margin-left: 105px;
        margin-top: 20px;
      }
    }
  }
</style>

<script>
import MtHeader from '@/components/Layout/MtHeader'
export default {
  name: 'member',
  components: {
    MtHeader
  }
}
</script>
