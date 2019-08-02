<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <a class="back-icon login-back-icon"
           href="#"></a>
        <img class="login-type-switch"
             @click="changeLoginType"
             :src="phoneUrl" />
        <div class="login-title">
          <img class="login-title-logo"
               src="@/assets/images/login/logo.png"
               alt />
          <span class="login-title-text">登录</span>
        </div>
      </div>
      <div class="login-input-list">
        <div class="account-login"
             v-if="!isPhone">
          <div class="login-input-item">
            <icon-svg :class="{delFilter: isFocus.usernameFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.usernameFocus = true"
                      @blur="isFocus.usernameFocus = false"
                      class="item-input"
                      :class="{inputFocus:isFocus.usernameFocus}"
                      placeholder="账号"
                      v-model="item.username"
                      clearable>
            </el-input>
          </div>
          <div class="login-input-item">
            <icon-svg :class="{delFilter: isFocus.passwordFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.passwordFocus = true"
                      @blur="isFocus.passwordFocus = false"
                      class="item-input"
                      :class="{inputFocus:isFocus.passwordFocus}"
                      placeholder="密码"
                      type="password"
                      v-model="item.password"
                      clearable>
            </el-input>
          </div>
          <div class="login-input-item">
            <icon-svg :class="{delFilter: isFocus.captchaFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.captchaFocus = true"
                      @blur="isFocus.captchaFocus = false"
                      class="item-input input-valid"
                      :class="{inputFocus:isFocus.captchaFocus}"
                      placeholder="账号"
                      v-model="item.captcha"
                      clearable>
            </el-input>
            <div class="valid-pic">
              <img src="../../assets/images/login/valid.png"
                   alt="">
              <div class="valid-refresh">
                <icon-svg icon-class="icon_refresh" />
              </div>
            </div>
          </div>
        </div>
        <div class="phone-login"
             v-else>
          <div class="login-input-item">
            <el-input placeholder="请输入内容"
                      v-model="item.phone"
                      class="input-with-select"
                      clearable>
              <el-select v-model="item.select"
                         slot="prepend"
                         placeholder="请选择">
                <el-option label="餐厅名"
                           value="1"></el-option>
                <el-option label="订单号"
                           value="2"></el-option>
                <el-option label="86"
                           value="3"></el-option>
              </el-select>
            </el-input>
          </div>
          <div class="login-input-item">
            <icon-svg :class="{delFilter: isFocus.captchaFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.captchaFocus = true"
                      @blur="isFocus.captchaFocus = false"
                      class="item-input input-valid"
                      :class="{inputFocus:isFocus.captchaFocus}"
                      placeholder="账号"
                      v-model="item.captcha"
                      clearable>
            </el-input>
            <div class="valid-pic">
              获取验证码
            </div>
          </div>
        </div>
        <div class="login-submit">
          <button type="button">登录</button>
        </div>
        <div>
          <div class="link-other">
            <router-link tag="span"
                         :to="{name: 'corpLogin'}">注册</router-link>
            <router-link tag="span"
                         :to="{name: 'validata'}">忘记密码</router-link>
          </div>
          <div>
            <el-checkbox v-model="item.platform_type">5天内自动登录</el-checkbox>
          </div>
        </div>
        <div class="other-login-way">—第三方账号登录—</div>
        <div class="other-login-link">
          <img src="@/assets/images/login/qq_selected.png"
               alt="">
          <img src="@/assets/images/login/weixin_selected.png"
               alt="">
          <img src="@/assets/images/login/apliy_selected.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        username: '',
        password: '',
        captcha: '',
        platform_type: '',
        phone: '',
        select: 3
      },
      isFocus: {
        usernameFocus: false,
        passwordFocus: false,
        captchaFocus: false,
      },
      isPhone: false,
      phoneUrl: require('@/assets/images/login/login_phone.png') 
    }
  },
  methods: {
    changeLoginType() {
      this.isPhone = !this.isPhone
      if (this.isPhone) {
        this.phoneUrl = require('@/assets/images/login/login_pc.png') 
      } else {
        this.phoneUrl = require('@/assets/images/login/login_phone.png') 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  .login-header {
    overflow: hidden;
    margin-bottom: 28px;
    .login-title {
      text-align: center;
      float: left;
      width: calc(100% - 150px);
      padding-top: 2px;
      .login-title-logo {
        width: 60px;
        height: 28px;
        vertical-align: bottom;
      }
      .login-title-text {
        display: inline-block;
        font-size: 24px;
        color: rgb(255, 255, 255);
        line-height: 31px;
        letter-spacing: 2px;
      }
      .login-title-text::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 24px;
        margin: 0 11px;
        background: #e1e3e6;
        vertical-align: middle;
      }
    }
    .login-type-switch {
      cursor: pointer;
      display: block;
      width: 60px;
      float: right;
      margin: -6px 30px 0 0;
    }
  }
  .link-other {
    float: right;
    color: #C8CACC;
    span {
      margin-left: 6px;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      &:last-of-type::before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 8px;
        background: #E1E3E6;
        margin-right: 6px;
      }
    }
  }
  .other-login-way {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size:14px;
    color:rgba(200,202,204,1);
    line-height:19px;
    letter-spacing:1px;
    position: relative;
  }
  .other-login-link {
    text-align: center;
    img {
      margin-right: 40px;
      filter: grayscale(100%);
      cursor: pointer;
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {
        filter: none;
      }
    }
  }
}
</style>
