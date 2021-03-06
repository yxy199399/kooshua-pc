// const baseURL = process.env.baseURL;
const path = require ('path')
const merge = require ('webpack-merge')
function resolve (dir) {
  return path.join (__dirname, dir)
}

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  // 运行 vue-cli-service build 时生成的生产环境构建文件的目录
  // 默认构建前清除文件夹(构建时传入 --no-clean 可关闭该行为
  outputDir: process.env.VUE_APP_CURRENTMODE,

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径
  indexPath: 'index.html',

  // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  filenameHashing: true,

  // 当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件
  // (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。
  // 如果你试图修改这些插件的选项，请确认运行 vue inspect
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist 的输出为 index.html
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。

    // 多入口时，接着写子页面
    //subpage: 'src/subpage/main.js'
  },

  // eslint-loader 是否在保存的时候检查eslintConfig
  // lintOnSave: true,
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules，
  // 想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,

  // 跨域设置
  // 可取值参考： https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
  crossorigin: undefined,

  // 构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性, 默认false
  integrity: false,

  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // configureWebpack: {
  //   plugins: [
  //     // new MyAwesomeWebpackPlugin()
  //   ],

  // },

  configureWebpack: config => {
    //当是生产环境时，去掉console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    //配置别名
    config.resolve.alias
      .set ('@', resolve ('src'))
      .set ('styleUrl', resolve ('src/assets/styles'))

    const svgRule = config.module.rule ('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear ()
    svgRule
      .test (/\.svg$/)
      .include.add (path.resolve (__dirname, './src/assets/icons/svg'))
      .end ()
      .use ('svg-sprite-loader')
      .loader ('svg-sprite-loader')
      .options ({
        symbolId: '[name]',
      })
    const fileRule = config.module.rule ('file')
    fileRule.uses.clear ()
    fileRule
      .test (/\.svg$/)
      .exclude.add (path.resolve (__dirname, './src/assets/icons/svg'))
      .end ()
      .use ('file-loader')
      .loader ('file-loader')

    config.module
      .rule ('images')
      .test (/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use ('url-loader')
      .loader ('url-loader')
      .tap (options =>
        merge (options, {
          limit: 10000,
        })
      )

    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization.splitChunks ({
      cacheGroups: {},
    })

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule ('eslint')
      .exclude.add ('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
      .end ()
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // false 时只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    // true 时可以去掉文件名中的 .module， 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    // 生产环境下是 true，开发环境下是 false
    extract: true,

    // 是否构建样式地图，设置为 true 之后可能会影响构建的性能
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },

      sass: {
        data: `
          @import "@/element-variables.scss";
        `,
        // 这里的选项会传递给 css-loader
      },

      postcss: {},
    },
  },

  // 所有 webpack-dev-server 的选项都支持
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3000,
    https: false,
    hotOnly: true,
    // 将任何未知请求 (没有匹配到静态文件的请求) 代理到该字段指向的地方
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASEURL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api/', // 在请求的时候 凡是/api开头的地址都可以跨域
        },
      },
    },

    // before: app => {
    // }
  },
  // 构建时开启多进程处理 babel 编译
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require ('os').cpus ().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {},
}
