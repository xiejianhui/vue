import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局引入组件管理器
import  global  from "./components/global.js";
// console.log("global",global)

// element-ui
// import {messageNew} from "./common/resetMessage.js";
import {
  Message
} from "element-ui";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue中使用elementUI的message组件时，页面刷新弹出空message问题解决
// Vue.use(Message)
Vue.use(ElementUI)
// 注入样式
// Vue.prototype.$message = messageNew;
Vue.prototype.$message = Message;

import './assets/app.css'
import './assets/common.css'
import './assets/chunk-862bee5a.css'


// 弹框禁止底层下拉
import ModalHelper from './common/modalHelper'
Vue.prototype.$modalHelper = ModalHelper

// 基本路径
import API from './api/apiUrl.js'
import myMixin from './common/myMixin.js'
import Env from './api/env.js'

// 复制
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 注入全局变量
// 网络图片地址
Vue.prototype.$imagePrefix = Env.imagePrefix;
Vue.prototype.$mpClientversion = Env.mpClientversion;

// 注入全局接口
Vue.prototype.$apiUrl= API;

// 注入全局方法
Vue.prototype.$myMixin = myMixin.methods;

Vue.use(myMixin)

// Vue.component('footer-copyright', {
//   template: '<p class="footer-msg">©CopyRight 2022-2025 All rights reserved <a href="http://www.miibeian.gov.cn" target="_blank">******</a></p>'
// });

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
