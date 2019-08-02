<template>
  <div class="corp-contanier">
    <div class="corp-img">
      <img src="@/assets/images/login/register.png"
           alt="">
      <router-link :to="{name: 'corpLogin'}">切换到企业注册</router-link>
    </div>
    <div class="corp-list">
      <h1>企业用户注册</h1>
      <div class="form-container">

        <div class="login-submit">
          <button @click="goSubmit"
                  type="button">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
    margin: 200px auto;
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
  }
</style>
