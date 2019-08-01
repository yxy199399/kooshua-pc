import Vue from 'vue'
import Router from 'vue-router'

Vue.use (Router)

const router = new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '*', redirect: '/mian/home'},
    {path: '/', redirect: '/mian/home'},

    {
      // login
      path: '/login',
      name: 'Login',
      component: () => import ('./views/login/Index.vue'),
      redirect: '/login/index',
      children: [
        {
          path: 'index',
          name: 'loginIndex',
          component: () => import ('./views/login/Login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import ('./views/login/Register.vue'),
        },
        {
          path: 'corpLogin',
          name: 'corpLogin',
          component: () => import ('./views/login/CorpRegister.vue'),
        },
        {
          path: 'validata',
          name: 'validata',
          component: () => import ('./views/login/Validata.vue'),
        },
      ],
    },
    {
      path: '/mian',
      name: 'mian',
      component: () => import ('./views/Main.vue'),
      redirect: '/main/home',
      children: [
        // home
        {
          path: 'home',
          name: 'homeIndex',
          component: () => import ('./views/home/Index.vue'),
        },
        {
          path: 'search',
          name: 'homeSearch',
          component: () => import ('./views/home/Search.vue'),
        },

        // interflow
        {
          path: '/activity/index',
          name: 'activityIndex',
          component: () => import ('./views/interflow/ActivityIndex.vue'),
        },
        {
          path: '/activity/detail',
          name: 'ActivityDetail',
          component: () => import ('./views/interflow/ActivityDetail.vue'),
        },
        {
          path: '/article/index',
          name: 'articleIndex',
          component: () => import ('./views/interflow/ArticleIndex.vue'),
        },
        {
          path: '/article/detail',
          name: 'articleDetail',
          component: () => import ('./views/interflow/ArticleDetail.vue'),
        },
        {
          path: '/encyclopdia/index',
          name: 'encyclopdiaIndex',
          component: () => import ('./views/interflow/EncyclopdiaIndex.vue'),
        },
        {
          path: '/encyclopdia/detail',
          name: 'encyclopdiaDetail',
          component: () => import ('./views/interflow/EncyclopdiaDetail.vue'),
        },
        {
          path: '/encyclopdia/type',
          name: 'encyclopdiaType',
          component: () => import ('./views/interflow/EncyclopdiaType.vue'),
        },
        {
          path: '/question/Index',
          name: 'questionIndex',
          component: () => import ('./views/interflow/QuestionIndex.vue'),
        },
        {
          path: '/question/detail',
          name: 'questionDetail',
          component: () => import ('./views/interflow/QuestionDetail.vue'),
        },
        {
          path: '/question/type',
          name: 'questionType',
          component: () => import ('./views/interflow/QuestionType.vue'),
        },
        {
          path: '/service/index',
          name: 'serviceIndex',
          component: () => import ('./views/interflow/ServiceIndex.vue'),
        },
        {
          path: '/service/detail',
          name: 'serviceDetail',
          component: () => import ('./views/interflow/ServiceDetail.vue'),
        },
        {
          path: '/video/Index',
          name: 'videoIndex',
          component: () => import ('./views/interflow/VideoIndex.vue'),
        },
        {
          path: '/video/detail',
          name: 'videoDetail',
          component: () => import ('./views/interflow/VideoDetail.vue'),
        },

        // koo
        {
          path: '/koo/index',
          name: 'kooIndex',
          component: () => import ('./views/koo/KooIndex.vue'),
        },

        // other
        {
          path: '/other/advertise',
          name: 'otherAdvertise',
          component: () => import ('./views/other/Advertise.vue'),
        },
        {
          path: '/corp/cooperate',
          name: 'corpCooperate',
          component: () => import ('./views/other/CorpCooperate.vue'),
        },
        {
          path: '/other/corp',
          name: 'otherCorp',
          component: () => import ('./views/other/OtherCorp.vue'),
        },
        {
          path: '/other/person',
          name: 'otherPerson',
          component: () => import ('./views/other/OtherPerson.vue'),
        },

        // store
        {
          path: '/store/index',
          name: 'storeIndex',
          component: () => import ('./views/store/StoreIndex.vue'),
        },
        {
          path: '/store/detail',
          name: 'storeDetail',
          component: () => import ('./views/store/StoreDetail.vue'),
        },
        {
          path: '/store/type',
          name: 'storeType',
          component: () => import ('./views/store/StoreType.vue'),
        },
        {
          path: '/wash/index',
          name: 'washIndex',
          component: () => import ('./views/store/WashIndex.vue'),
        },
        {
          path: '/wash/detail',
          name: 'washDetail',
          component: () => import ('./views/store/WashDetail.vue'),
        },
        {
          path: '/close/Account',
          name: 'closeAccount',
          component: () => import ('./views/store/CloseAccount.vue'),
        },
        {
          path: '/buy/ticket',
          name: 'buyTicket',
          component: () => import ('./views/store/BuyTicket.vue'),
        },

        // upload
        {
          path: '/customer/agreement',
          name: 'customerAgreement',
          component: () => import ('./views/upload/CustomerAgreement.vue'),
        },
        {
          path: '/upload/activity',
          name: 'uploadActivity',
          component: () => import ('./views/upload/UploadActivity.vue'),
        },
        {
          path: '/upload/article',
          name: 'uploadArticle',
          component: () => import ('./views/upload/UploadArticle.vue'),
        },
        {
          path: '/upload/encyclopdia',
          name: 'uploadEncyclopdia',
          component: () => import ('./views/upload/UploadEncyclopdia.vue'),
        },
        {
          path: '/upload/goods',
          name: 'uploadGoods',
          component: () => import ('./views/upload/UploadGoods.vue'),
        },
        {
          path: '/upload/question',
          name: 'uploadQuestion',
          component: () => import ('./views/upload/UploadQuestion.vue'),
        },
        {
          path: '/upload/service',
          name: 'uploadService',
          component: () => import ('./views/upload/UploadService.vue'),
        },
        {
          path: '/upload/video',
          name: 'uploadVideo',
          component: () => import ('./views/upload/UploadVideo.vue'),
        },
        {
          path: '/upload/washGoods',
          name: 'uploadWashGoods',
          component: () => import ('./views/upload/UploadWashGoods.vue'),
        },

        // USER
        {
          path: '/user/center',
          name: 'userCenter',
          component: () => import ('./views/user/UserCenter.vue'),
        },
        {
          path: '/user/corpCenter',
          name: 'userCorpCenter',
          component: () => import ('./views/user/CorpCenter.vue'),
        },
        {
          path: '/user/nameAuth',
          name: 'userNameAuth',
          component: () => import ('./views/user/RealNameAuth.vue'),
        },
        {
          path: '/user/resetPassword',
          name: 'userResetPassword',
          component: () => import ('./views/user/ResetPassword.vue'),
        },
        {
          path: '/user/resetPhone',
          name: 'userResetPhone',
          component: () => import ('./views/user/ResetPhone.vue'),
        },
        {
          path: '/user/edit',
          name: 'userEdit',
          component: () => import ('./views/user/UserMessageEdit.vue'),
          // meta: { requireAuth: true }
        },
      ],
    },
  ],
})

router.beforeEach ((to, from, next) => {
  //验证用户权限
  if (to.matched.some (r => r.meta.requireAuth)) {
    if (localStorage.getItem ('token')) {
      next ()
    } else {
      next ('/login')
    }
  } else {
    next ()
  }
})

export default router
