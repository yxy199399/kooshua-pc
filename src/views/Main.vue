<template>
  <div class="container">
    <div class="header">
      <div class="header-content">
        <div class="header-nav">
          <img src="@/assets/images/public/koo_logo.png" alt />
          <ul class="nav-list">
            <li class="header-active">主页</li>
            <li>商城</li>
            <li>淘货</li>
            <li>服务</li>
            <li>活动</li>
          </ul>
        </div>
        <div class="header-login">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append">
              <icon-svg icon-class="iocn_search" />
            </el-button>
          </el-input>
          <el-dropdown class="dropdown-upload" :hide-on-click="false" placement="bottom">
            <span class="el-dropdown-link">
              <icon-svg icon-class="icon_upload_selected" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="header-upload-item">
                <icon-svg icon-class="icon_video_selected" />
                <span>传视频</span>
              </el-dropdown-item>
              <el-dropdown-item class="header-upload-item">
                <icon-svg icon-class="icon_article_selected" />
                <span>传文章</span>
              </el-dropdown-item>
              <el-dropdown-item class="header-upload-item">
                <icon-svg icon-class="icon_question_active" />
                <span>提问题</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown :hide-on-click="false" placement="bottom">
            <span class="el-dropdown-link">
              <icon-svg icon-class="icon_message_selected" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="message-header">历史消息</el-dropdown-item>
              <el-dropdown-item divided class="drop-item-msg">
                <div class="message-title">
                  <p>订单待评价</p>
                  <p>2019-7-28</p>
                </div>
                <div class="message-content">收到包裹，去给卖家一个评价吧</div>
                <div class="message-btn">去评价</div>
              </el-dropdown-item>
              <el-dropdown-item divided class="drop-item-msg">
                <div class="message-title">
                  <p>订单待评价</p>
                  <p>2019-7-28</p>
                </div>
                <div class="message-content">收到包裹，去给卖家一个评价吧</div>
                <div class="message-btn">去评价</div>
              </el-dropdown-item>
              <el-dropdown-item divided class="msg-all">查看全部消息</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown :hide-on-click="false" placement="bottom-end">
            <img
              class="el-dropdown-logout"
              src="../assets/images/public/icon_footer_public.jpg"
              alt
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="dropdown-logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="login-btn">
          <icon-svg icon-class="icon_user_selected" />
            登录
          </span>
        </div>
      </div>
    </div>
    <div class="mian">
      <router-view />
    </div>
    <div class="footer">
      <div class="about-componery">
        <div class="koo-introduced">
          <img class="koo-introduced-img" src="../assets/images/public/kooshua_footer.png" alt />
          <p>酷耍(kooshua.com)为创客、工程师、技师、学者、企业提供，专业知识分享及互动交流的平台，让工程学习变得更加容易和自主。</p>
        </div>
        <div class="koo-partner">
          <div>
            <div class="koo-partner-item">
              <icon-svg icon-class="icon_people" />人才招聘
            </div>
            <div class="koo-partner-item">
              <icon-svg icon-class="icon_cooperation" />企业合作
            </div>
            <div class="koo-partner-item">
              <icon-svg icon-class="icon_opinion" />提出意见
            </div>
            <div class="koo-partner-item">
              <icon-svg icon-class="icon_follow" />关注我们
            </div>
          </div>
          <div>
            <img class="koo-introduced-min" src="../assets/images/public/kooshua_footer.png" alt />
            <div class="koo-partner-address">
              <div>公司地址：重庆市渝中区大坪英利国际2号楼</div>
              <div>工作时间：周一至周五 8:30—17:45</div>
            </div>
          </div>
        </div>
        <div class="koo-qr-code">
          <div class="koo-qr-code-item">
            <p>微信公众号</p>
            <img src="../assets/images/public/icon_footer_public.jpg" alt />
            <p>酷耍kooshua</p>
          </div>
          <div class="koo-qr-code-item">
            <p>酷耍小程序下载</p>
            <img src="../assets/images/public/icon_footer_wx.jpg" alt />
            <p>IOS & Android</p>
          </div>
        </div>
      </div>
      <div class="copy">
        <p>版权归 重庆市酷耍电子商务有限公司所有</p>
        <p>渝ICP备18012810号-2</p>
        <p>Copyright ©2019 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      uploadSwitch: 'icon_upload_default'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  .mian {
    min-height: calc(100% - 322px);
  }
}
.header {
  padding: 14px 0;
  box-shadow: 0px 1px 8px 0px rgba(47, 39, 39, 0.06);
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .header-nav {
      float: left;
      margin-left: 30px;
      img {
        margin-right: 60px;
        float: left;
      }
      .nav-list {
        overflow: hidden;
        float: left;
        padding-top: 4px;
        .header-active::after {
          content: '';
          display: block;
          width:20px;
          height:3px;
          background:linear-gradient(90deg,rgba(0,242,254,1) 0%,rgba(26,148,255,1) 100%);
          border-radius:2px;
          position: absolute;
          bottom: 3px;
          left: 50%;        
          transform: translateX(-50%);
        }
        li {
          float: left;
          position: relative;
          font-size: 16px;
          font-family: AlibabaPuHuiTiM;
          color: rgba(50, 51, 51, 1);
          line-height: 22px;
          letter-spacing: 1px;
          margin-right: 36px;
          padding-bottom: 10px;
        }
      }
    }
    .header-login {
      float: right;
      margin-right: 20px;
      overflow: hidden;
      .input-with-select {
        width: 290px;
        height: 34px;
        box-sizing: border-box;
        border: 1px solid rgba(235, 237, 240, 1);
        margin-right: 30px;
        /deep/ {
          input {
            height: 34px;
            box-sizing: border-box; 
            background:rgba(247,249,250,1);
            border:1px solid rgba(235,237,240,1);
            border-radius: 0;
            border-right: none;
          }
          div {
            height: 34px;
            background:rgba(247,249,250,1);
            border-radius: 0;
            box-sizing: border-box;
            padding-right: 10px;
            button {
              height: 34px;
              box-sizing: border-box;
              span {
                position: relative;
                top: -3px;
                filter: grayscale(1);
                opacity: .5;
              }
            }
            &:hover span {
              filter: none;
              opacity: 1;
            }
          }
          div::before {
            content: '';
            display: inline-block;
            width: 1px;
            height: 20px;
            position: relative;
            background: #C8CACC;
            margin-right: 10px;
          }
        }
      }
      .el-dropdown-link {
        cursor: pointer;
        filter: grayscale(100%);
        opacity: 0.5;
        margin-right: 20px;
        font-size: 20px;
        &:hover {
          filter: none;
          opacity: 1;
        }
      }
      .el-dropdown-logout {
        width: 24px;
        cursor: pointer;
        position: relative;
        top: 5px;
      }
      .login-btn {
        filter: grayscale(100%);
        color: #646566;
        font-weight: bold;
        font-size: 16px;
        .svg-icon {
          font-size: 20px;
        }
      }
      .login-btn:hover {
        filter: none;
        color: #323333;
      }
    }
  }
}
.footer {
  padding-top: 30px;
  background: #323333;
  .about-componery {
    margin: 0 auto 24px;
    max-width: 1200px;
    overflow: hidden;
    .koo-introduced {
      float: left;
      width: 320px;
      margin-top: 15px;
      padding-right: 5px 40px 7px 0;
      box-sizing: border-box;
      .koo-introduced-img {
        display: block;
        width: 149px;
        margin-bottom: 8px;
      }
      p {
        width: 280px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(150, 152, 153, 1);
        line-height: 20px;
      }
    }
    .koo-partner {
      padding: 24px 40px;
      box-sizing: border-box;
      width: calc(100% - 635px);
      float: left;
      border-left: solid 1px #4b4c4d;
      border-right: solid 1px #4b4c4d;
      overflow: hidden;
      .koo-partner-item {
        width: 25%;
        margin-bottom: 28px;
        text-align: center;
        float: left;
        font-size: 14px;
        color: rgba(200, 202, 204, 1);
        line-height: 19px;
        &:hover {
          color: #fff;
        }
      }
      .koo-partner-address {
        font-size: 12px;
        color: rgba(100, 101, 102, 1);
        line-height: 16px;
        div {
          float: left;
          &:last-of-type {
            float: right;
          }
        }
      }
    }
    .koo-qr-code {
      width: 315px;
      padding: 0 30px 0 8px;
      float: right;
      overflow: hidden;
      box-sizing: border-box;
      .koo-qr-code-item {
        width: 98px;
        margin-left: 40px;
        float: left;
        p {
          font-size: 14px;
          font-family: FZLTZHK--GBK1-0;
          color: rgba(200, 202, 204, 1);
          line-height: 17px;
          text-align: center;
          &:first-of-type {
            margin-bottom: 10px;
          }
        }
        img {
          display: block;
          width: 98px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .copy {
    background: #252626;
    padding: 10px 0;
    text-align: center;
    font-size: 12px;
    font-family: FZLTHK--GBK1-0;
    color: rgba(100, 101, 102, 1);
    line-height: 14px;
    p {
      display: inline-block;
      &:nth-child(2) {
        margin: 0 30px;
      }
    }
  }
}
.koo-introduced-min {
  display: none;
}
@media screen and (max-width: 1200px) {
  // header
  .header-nav img {
    margin-right: 40px !important;
  }
  .nav-list li {
    margin-right: 30px !important;
  }
  // footer 
  .koo-introduced-min {
    display: block;
    float: left;
    margin-right: 12px;
  }
  .koo-introduced {
    display: none;
  }
  .koo-partner {
    border: none !important;
    width: 506px !important;
    .koo-partner-item {
      text-align: left !important;
    }
    .koo-partner-address {
      float: left;
      div {
        float: none !important;
        margin-bottom: 5px;
      }
    }
  }
}
</style>

// 覆写样式

<style lang="scss" scoped>
.header-upload-item {
  filter: grayscale(100%);
  opacity: 0.5;
  color: #969899;
}
.header-upload-item:hover {
  filter: none;
  opacity: 1;
  background-color: transparent !important;
  color: #000000 !important;
}
.header-upload-item span {
  display: inline-block;
  margin: 0 40px 0 15px;
}
.message-header {
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  color: #323233;
}
.message-header:hover {
  background-color: transparent !important;
  color: #323233 !important;
}
.drop-item-msg {
  margin: 0 !important;
}
.drop-item-msg:hover {
  margin: 0 !important;
  background-color: #fafbfc !important;
  color: #606266 !important;
  cursor: pointer;
}
.message-title {
  overflow: hidden;
  p {
    float: left;
    font-size: 12px;
    line-height: 20px;
    &:first-of-type::before {
      content: "";
      display: inline-block;
      width: 2px;
      height: 12px;
      background: linear-gradient(212deg, #00f0fe, #1a97ff);
      margin-right: 8px;
    }
    &:last-of-type {
      float: right;
      color: #969899;
    }
  }
}
.message-content {
  color: #646566;
  font-size: 12px;
  margin: 4px 0;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 20px;
}
.message-btn {
  color: #323333;
  font-size: 12px;
  text-align: right;
  line-height: 20px;
}
.msg-all {
  box-sizing: border-box;
  color: #969799;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  line-height: 20px !important;
}
.msg-all:hover {
  background-color: transparent !important;
  color: #969799 !important;
}
.dropdown-logout:hover {
  background-color: #ecf5ff !important;
  color: #66b1ff !important;
}
.el-input__inner {
  height: 34px !important;
  background: rgba(247, 249, 250, 1) !important;
}
</style>

