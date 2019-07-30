<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <a class="back-icon login-back-icon" href="#"></a>
        <img class="login-type-switch" src="@/assets/images/login/login_phone.png" />>
        <div class="login-title">
          <img class="login-title-logo" src="@/assets/images/login/logo.png" alt />
          <span class="login-title-text">登录</span>
        </div>
      </div>
      <div class="login-input-list">
        <div class="login-input-item">
          <icon-svg class="input-modified" icon-class="icon_user_selected" />
          <el-input
            class="item-input"
            placeholder="账号"
            v-model="item.account"
            clearable>
          </el-input>
          <!-- <img class="input-modified" src="@/assets/images/login/account_input.png" alt="">
          <input class="item-input" type="text" placeholder="账号"> -->
        </div>
        <div class="login-input-item"></div>
        <div class="login-input-item login-input-item-valid"></div>
        <div class="login-submit"></div>
      </div>
      <div class></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        account: ''
      }
    }
  }
};
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
}
</style>
