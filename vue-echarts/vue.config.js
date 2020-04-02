/*
 * @Author: your name
 * @Date: 2020-04-02 10:11:31
 * @LastEditTime: 2020-04-02 18:10:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-echarts\vue.config.js
 */
// 前端解决跨域问题，在vue cli 3.0版本中
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

const data = require('./public/json/test');

module.exports = {
    //baseUrl: '/', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    // 静态资源加载；
    // You have set both "baseUrl" and "publicPath" in vue.config.js, in this case, "baseUrl" will be ignored in favor of "publicPath".
    publicPath: '/vue-echarts', // 同router.js 中的 base
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else { 
            // 生产环境配置
        }
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: { // 第三方插件配置
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            /*
             * 配置跨域；配置多个跨域；
             * 需要重启，方能生效；
             */
            // paths
            '/ssa-ui/': {
                target: 'http://10.10.12.229:5555/ssa-ui/', //跨域地址
                changeOrigin: true, // 是否跨域
                ws: true, // 是否使用https
                pathRewrite: {
                    '^/ssa-ui/': ''
                        // 此处可以理解为 '/ssa-ui/api' 代替了 target 里面的地址，后面的组件中，调用接口的时候直接用 /ssa-ui/api 替代
                        // 比如，调用 http://10.10.12.229:8080/ssa-ui/api/query-engine/line-chart ，直接写 /ssa-ui/api/query-engine/line-chart 即可
                }
            },
            // 卿晨旭的接口：/query-event；/search-doc；/asset-management；/overview；/ssa；
            // 此五类开头的接口，均从此过；
            '/qing-api/': {
                target: 'http://10.10.12.229:5555/qing-api/', //跨域地址
                changeOrigin: true, // 是否跨域q
                ws: true, // 是否使用https
                secure: false,
                pathRewrite: {
                    '^/qing-api/': ''
                }
            },
        },
        // 如果是post请求，那么将get改为post即可
        // 请求本地模拟数据
        before: app => {
            app.get('/json/test', (req, res) => {
                res.json(data);
            })
        }
    }
}