<template>
  <div>
    <div class="head">
      <i class="iconfont taobao">&#xe600;</i>
      <i class="iconfont taobao">&#xe601;</i>
    </div>
    <div class="bg" />
    <div class="content">
      <div class="login_box_warp">
        <div class="login_box">
          <div class="title">密码登录</div>
          <div class="input_box">
            <label>
              <i class="iconfont">&#xe64d;</i>
            </label>
            <input type="text" placeholder="请输入手机号" v-model="phone"/>
          </div>
          <div class="input_box">
            <label>
              <i class="iconfont">&#xe69f;</i>
            </label>
            <input type="password" placeholder="请输入密码" v-model="pwd"/>
          </div>
          <div class="input_box" v-if="type===1">
            <label>
              <i class="iconfont">&#xe69f;</i>
            </label>
            <input type="password" placeholder="请确认密码" v-model="confirmPwd"/>
          </div>
          <button class="btn" @click="btnClick">{{ type===0 ? '登录' : '确定' }}</button>
          <div class="other_login">
            <span>支付宝登录</span>
            <span>微博登录</span>
          </div>
          <div class="foot">
            <!-- <span>忘记密码</span> -->
            <span @click="change($event)">{{ type===0 ? '免费注册' : '返回登录' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .head {
    width: 1200px;
    margin: 20px auto;
    position: relative;
    height: 50px;

    i:first-child {
      font-size: 36px
    }
    i:last-child {
      font-size: 50px;
      bottom: -17px;
    }
  }
  .taobao {
    display: block;
    color: #f40;
    font-weight: 400;
    position: absolute;
  }
  .bg {
    background-image: url("./img/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 600px;
    position: absolute;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    height: 600px;
  }
  .login_box_warp {
    position: absolute;
    top: 120px;
    right: 60px;
    width: 350px;
  }
  .login_box {
    width: 350px;
    padding: 25px 25px 23px;
    color: #6c6c6c;
    position: relative;
    margin: 0 auto;
    background-color: rgba(255,255,255,.9);

    .title {
      height: 26px;
      line-height: 18px;
      font-size: 16px;
      color: #3c3c3c;
      margin-top: 9px;
      padding-bottom: 8px;
      font-weight: 700;
    }
    .input_box {
      margin-top: 20px;
      position: relative;
    }

    label {
      display: block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      background: #ddd;
      text-align: center;
      position: absolute;
      left: 1px;
      outline: 0;
      i {
        font-size: 22px;
        color: #fff;
      }
    }

    input {
      width: 300px;
      font-size: 14px;
      line-height: 18px;
      height: 40px;
      padding: 11px 8px 11px 50px;
      border: 1px solid #ddd;
      background-color: rgb(250, 255, 189);
    }

    span:hover {
      color: #f40;
    }
  }

  .btn {
    width: 300px;
    height: 42px;
    border: 0;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    line-height: 42px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #f40;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 20px;
  }
  .other_login {
    margin-top: 24px;
    line-height: 14px;
  }

  .foot>span, .other_login>span {
    color: #6c6c6c;
    font-size: 12px;
    cursor: pointer;
  }
  .foot {
    text-align: right;
  }
</style>

<script>
import request from '@/utils/request'
export default {
  name: 'Login',
  data () {
    return {
      // 0 登陆, 1注册
      type: 0,
      phone: null,
      pwd: null,
      confirmPwd: null
    }
  },
  methods: {
    isPhone: function (phone) {
      return /^1\d{10}$/gi.test(phone)
    },
    login: function () {
      if (this.isPhone(this.phone) && this.pwd) {
        request({
          url: '/api/login',
          method: 'post',
          data: { account: this.phone, password: this.pwd }
        })
          .then(({success}) => {
            if (success) {
              // this.$router.push('home')
            }
          })
      }
    },
    register: function () {
      if (this.isPhone(this.phone) && this.pwd && this.pwd === this.confirmPwd) {
        request({
          url: '/api/register',
          method: 'post',
          data: { account: this.phone, password: this.pwd }
        })
          .then(({ success }) => {
            if (success) {
              this.$router.push('home')
            }
          })
      }
    },
    btnClick: function () {
      if (this.type === 0) {
        this.login()
      } else {
        this.register()
      }
    },
    change: function (e) {
      let str2type = {
        免费注册: 1,
        返回登录: 0
      }
      this.type = str2type[e.currentTarget.innerHTML]
    }
  }
}
</script>
