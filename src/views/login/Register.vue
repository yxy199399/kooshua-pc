<template>
  <div class="register">
    <div class="corp-contanier">
      <div class="corp-img">
        <img src="@/assets/images/login/register.png"
             alt="">
        <router-link :to="{name: 'corpLogin'}">切换到企业注册</router-link>
      </div>
      <div class="corp-list">
        <div class="login-title-text">
          账号注册
        </div>
        <div class="form-container">
          <div class="corp-input-item">
            <p>账号</p>
            <input type="text">
          </div>
          <div class="corp-input-item">
            <p>密码</p>
            <input type="text">
          </div>
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
            <el-input class="item-input input-valid"
                      placeholder="账号"
                      v-model="item.captcha"
                      clearable>
            </el-input>
            <div class="valid-pic">
              获取验证码
            </div>
          </div>
          <div class="login-submit">
            <button @click="goSubmit"
                    type="button">提交</button>
          </div>
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
        phone: '',
        select: '',
        captcha: ''
      }
    }
  },
  methods: {
    goSubmit() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
    max-width: 1200px;
    min-width: 960px;
    margin: 0 auto;
    padding: 20px 0;
    .corp-img {
      float: left;
      position: relative;
      img {
        width: 400px;
      }
      a {
        position: absolute;
        display: block;
        text-align: center;
        bottom: 40px;
        width: 100%;
        color: #646566;
        &:hover {
          color: #fff;
        }
      }
    }
    .corp-list {
      float: left;
      width: 640px;
      height: 100%;
      padding: 60px 100px 0;
      box-sizing: border-box;
      background:rgba(16,21,26,0.8);
      .login-title-text {
        font-size:24px;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:31px;
        letter-spacing:4px;
        margin-bottom: 100px;
        &::before {
          content: '';
          display: inline-block;
          width:6px;
          height:24px;
          background:linear-gradient(139deg,rgba(0,240,254,1) 0%,rgba(26,151,255,1) 100%);
          position: relative;
          top: 4px;
        }
      }
      .corp-input-item {
        margin-bottom: 36px;
        input {
          width: 100%;
          padding: 8px 0;
          background: transparent;
          border: none;
          border-bottom: solid 1px #E1E3E6;
        }
        p {
          font-size:16px;
          font-family:MicrosoftYaHei-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:21px;
          letter-spacing:2px;
          margin-bottom: 5px;
        }
        
      }
    }
  }
</style>
