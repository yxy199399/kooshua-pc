<template>
  <div class="corp-register">
    <div class="corp-contanier">
      <div class="corp-img">
        <img src="@/assets/images/login/register-left.png"
             alt="">
        <router-link :to="{name: 'register'}">切换到用户注册</router-link>
      </div>
      <div class="corp-list">
        <h1>企业用户注册</h1>
        <div class="form-container">
          <div class="corp-input-item">
            <p>账号</p>
            <input type="text">
          </div>
          <div class="corp-input-item">
            <p>密码</p>
            <input type="text">
          </div>
          <div class="corp-input-item">
            <p>联系方式</p>
            <input type="text">
          </div>
          <div class="corp-input-item">
            <p>企业名称</p>
            <input type="text">
          </div>
          <div class="corp-input-item">
            <p>工商执照</p>
            <el-upload class="avatar-uploader"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :show-file-list="false"
                       :on-success="handleAvatarSuccess"
                       :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl"
                   :src="imageUrl"
                   class="avatar">
              <i v-else
                 class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
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
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    goSubmit() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .corp-register {
    height: 100vh;
    background: #fff;
    .corp-contanier {
      max-width: 1200px;
      min-width: 960px;
      margin: 50px auto 0;
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
        float: right;
        width: calc(100% - 400px);
        height: 100%;
        padding-top: 60px;
        h1 {
          font-size:24px;
          font-family:MicrosoftYaHei-Bold;
          font-weight:bold;
          color:rgba(50,51,51,1);
          line-height:31px;
          letter-spacing:4px;
          text-align: center;
          margin-bottom: 50px;
        }
        .form-container {
          width: 440px;
          margin: 0 auto;
          .corp-input-item {
            margin-bottom: 36px;
            p {
              font-size:16px;
              color:rgba(50,51,51,1);
              line-height:21px;
              letter-spacing:2px;
              margin-bottom: 6px;
            }
            input {
              width: 100%;
              padding: 8px 0;
              background: transparent;
              border: none;
              border-bottom: solid 1px #E1E3E6;
            }
            .avatar-uploader .el-upload {
              border-radius: 6px;
              cursor: pointer;
              position: relative;
              overflow: hidden;
              display: block;
            } 
            .avatar-uploader .el-upload:hover {
              border-color: #409EFF;
            }
            .avatar-uploader-icon {
              font-size: 28px;
              color: #8c939d;
              width: 100%;
              height: 240px;
              line-height: 240px;
              text-align: center;
            }
            .avatar {
              width: 100%;
              height: 240px;
              display: block;
            }
            /deep/ .el-upload--text {
              display: block;
              border: 1px dashed #d9d9d9;
            }
          }
        }
      }
    }
  }
</style>
