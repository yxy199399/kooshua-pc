<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <a class="back-icon login-back-icon"
           href="#"></a>
        <img class="login-type-switch"
             src="@/assets/images/login/login_phone.png" />>
        <div class="login-title">
          <img class="login-title-logo"
               src="@/assets/images/login/logo.png"
               alt />
          <span class="login-title-text">登录</span>
        </div>
      </div>
      <div class="login-input-list">
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
        <div class="login-input-item ">
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
        <div class="login-submit">
          <button type="button">登录</button>
        </div>
        <div>
          <div class="link-other">
            <span>注册</span>
            <span>忘记密码</span>
          </div>
          <div>
            <el-checkbox v-model="item.platform_type">5天内自动登录</el-checkbox>
          </div>
        </div>
        <div class="other-login-way">—第三方账号登录—</div>
        <div class="other-login-link">
          <icon-svg icon-class="icon_user_selected" />
          <icon-svg icon-class="icon_user_selected" />
          <icon-svg icon-class="icon_user_selected" />
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
        platform_type: ''
      },
      isFocus: {
        usernameFocus: false,
        passwordFocus: false,
        captchaFocus: false
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
      display: block;
      width: 60px;
      float: right;
      margin: -6px 30px 0 0;
    }
  }
  .login-submit {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    button {
      width: 100%;
      font-size: 16px;
      padding: 10px 0;
      text-align: center;
      border: none;
      outline: none;
      font-family:MicrosoftYaHei-Bold;
      font-weight:bold;
      letter-spacing: 10px;
      color: #fff;
      cursor: pointer;
      background: linear-gradient(135deg,rgba(0,240,254,1) 0%,rgba(26,151,255,1) 100%);
      &:hover {
        background: linear-gradient(90deg, #009198 0%, #0f5899 100%);
      }
    }
  }
  .link-other {
    float: right;
    color: #C8CACC;
    span {
      margin-left: 6px;
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
  }
}
</style>
