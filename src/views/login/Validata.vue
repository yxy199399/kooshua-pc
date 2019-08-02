<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <a @click="goBack"
           class="back-icon login-back-icon"></a>
        <div class="header-title">
          <span class="header-title-text">验证手机</span>
          <el-select v-model="isIdcard"
                     placeholder="号码已换"
                     class="switch-valid"
                     @change="goBuOther"
                     v-if="step === 0">
            <el-option v-for="item in listType"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <div v-else
               class="concat-service"
               @click="dialogVisible = true">
            <icon-svg :class="{delFilter: isFocus.captchaFocus }"
                      icon-class="icon_user_selected" />
            联系客服
          </div>
        </div>
      </div>
      <div class="answer-question"
           v-if="step === 2 && isIdcard == 2">
        <el-form ref="qusetion"
                 :model="qusetion"
                 label-width="80px">
          <div class="question-container">
            <el-form-item label="特殊资源">
              <el-radio-group v-model="qusetion.qusetion1">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="question-container">
            <el-form-item label="特殊资源">
              <el-radio-group v-model="qusetion.qusetion2">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="question-container">
            <el-form-item label="特殊资源">
              <el-radio-group v-model="qusetion.qusetion3">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="question-container">
            <el-form-item label="特殊资源">
              <el-radio-group v-model="qusetion.qusetion4">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="login-input-list">
        <div class="phone-by"
             v-if="step === 0">
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
        <div class="valid-had"
             v-if="step === 1 && isIdcard == 1">
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
            <icon-svg :class="{delFilter: isFocus.usernameFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.usernameFocus = true"
                      @blur="isFocus.usernameFocus = false"
                      class="item-input"
                      :class="{inputFocus:isFocus.usernameFocus}"
                      placeholder="姓名"
                      v-model="item.username"
                      clearable>
            </el-input>
          </div>
          <div class="login-input-item">
            <icon-svg :class="{delFilter: isFocus.usernameFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.usernameFocus = true"
                      @blur="isFocus.usernameFocus = false"
                      class="item-input"
                      :class="{inputFocus:isFocus.usernameFocus}"
                      placeholder="身份证号"
                      v-model="item.username"
                      clearable>
            </el-input>
          </div>
        </div>
        <div class="phone-by-one"
             v-if="step === 1 && isIdcard == 2">
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
        </div>
        <div class="reset-new-password"
             v-if="step === 1 && !isIdcard">
          <div class="login-input-item">
            <icon-svg :class="{delFilter: isFocus.passwordFocus }"
                      class="input-modified"
                      icon-class="icon_user_selected" />
            <el-input @focus="isFocus.passwordFocus = true"
                      @blur="isFocus.passwordFocus = false"
                      class="item-input"
                      :class="{inputFocus:isFocus.passwordFocus}"
                      placeholder="设置新密码"
                      type="password"
                      v-model="item.password"
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
                      placeholder="确认密码"
                      type="password"
                      v-model="item.password"
                      clearable>
            </el-input>
          </div>
        </div>
        <div class="login-submit">
          <button @click="goSure"
                  type="button">确定</button>
        </div>
      </div>
    </div>
    <concat-service :dialogVisible="dialogVisible"
                    v-on:update="dialogVisible = $event"></concat-service>
  </div>
</template>

<script>
import concatService from '@/components/concatService.vue'
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
      qusetion: {
        qusetion1: '',
        qusetion2: '',
        qusetion3: '',
        qusetion4: '',
      },
      isFocus: {
        usernameFocus: false,
        passwordFocus: false,
        captchaFocus: false,
      },
      listType: [
        {
          value: '1',
          label: '绑定过身份证'
        },
        {
          value: '2',
          label: '未绑定过身份证'
        }
      ],
      isIdcard: '',
      step: 0,
      dialogVisible: false
    }
  },
  components: {
    concatService
  },
  methods: {
    changeLoginType() {
      this.isPhone = !this.isPhone
      if (this.isPhone) {
        this.phoneUrl = require('@/assets/images/login/login_pc.png') 
      } else {
        this.phoneUrl = require('@/assets/images/login/login_phone.png') 
      }
    },
    goBuOther() {
      this.step ++
    },
    goBack() {
      if (this.step > 0) {
        this.step --
        this.isIdcard = ''
        return
      }
      this.$router.back(-1)
    },
    goSure() {
      this.step ++ 
    },
    getNewData(e) {
      this.dialogVisible = e
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  .back-icon {
    float: none;
    display: block;
  }
  .switch-valid {
    float: right;
  }
  /deep/.el-select .el-input.is-focus .el-input__inner {
    background: transparent;
    border: none;
  }
  /deep/.el-select .el-input--suffix .el-input__inner {
    background: transparent;
    border: none;
    margin-top: -8px;
    padding: 0;
  }
  /deep/ .el-select > .el-input{
    width: 100px;
  }
  .answer-question {
    padding: 0 60px;
  }
  .concat-service {
    float: right;
    width:61px;
    color:rgba(200,202,204,1);
    line-height:19px;
    letter-spacing:1px;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>
