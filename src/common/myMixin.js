import Vue from 'vue'
import Env from '../api/env.js'
const graceRichText = require('../common/richText.js');
import API from '../api/apiUrl.js'
import {road} from '../road.js'
// 引入路由
// import router from '../router'

// vue在单独引入js文件中使用ElementUI的弹框,调用的时候报错了'$alert' of undefined
let vThis = new Vue();

let copyTips = {
  success: 'success',
  succeededCopy: 'Copy succeeded',
  fail: 'fail',
}

var defaultAesKey = ""; //密钥
const CryptoJS = require('crypto-js');
// import CryptoJS from '@/common/crypto-js/crypto-js.js';
// 引进加载
import {Loading} from 'element-ui'
import store from '../store.js'
export default {
  data() {
    return {
      hasUnReadMessage: false,
      imagePrefix: Env.imagePrefix,
    }
  },
  filters: {
    // 时间格式化
    dateFormat(timestamp, fmt) {
      this.dateFormatFun(timestamp, fmt)
    },
  },
  methods: {
    // 最长六位小数
    toFixed6(num){
      if (typeof num == 'string'){
        num = parseFloat(num);
      }
      num = num.toFixed(6).replace(/[.]?0+$/g,"");
      return num
    },
    //Loading加载
    openFullScreen(e) {
      // const loading = this.$loading({
      const loading = Loading.service({
        lock: true,
        text: e || 'loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      return loading;
    },
    //关闭Loading加载
    closeFullScreen(loading){
      loading.close();
    },
    // 获取url参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      // var r = '?redEnvelopeCode=123'
      r = r.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    // 加密
    sysEncrypt(str) {
      let that = this;
      return new Promise((resolve, reject) => {
          API.getAeskey().then((res) => {
              console.log("res", res)
               if (res.data.status == true) {
                 var tmp = CryptoJS.AES.decrypt(res.data.data,
                   CryptoJS.enc.Utf8.parse("hsys~6188ee^1688"), {
                     mode: CryptoJS.mode.ECB,
                     padding: CryptoJS.pad.Pkcs7
                   });
                 defaultAesKey = CryptoJS.enc.Utf8.stringify(tmp)
                   .toString();
                 // console.log("defaultAesKey", defaultAesKey)
                 var key = CryptoJS.enc.Utf8.parse(defaultAesKey);
                 var srcs = CryptoJS.enc.Utf8.parse(str + ";" + Math.random());
                 var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                   mode: CryptoJS.mode.ECB,
                   padding: CryptoJS.pad.Pkcs7
                 });
                 // console.log("encrypted.toString()", encrypted.toString())
                 resolve(encrypted.toString())
               }
          });
      })
    },
    // 解密
    sysDecrypt(str) {
      let that = this;
      return new Promise((resolve, reject) => {
        API.getAeskey().then(res => {
            // console.log("res", res)
            if (res.data.status == true) {
              var tmp = CryptoJS.AES.decrypt(res.data.data,
                CryptoJS.enc.Utf8.parse("hsys~6188ee^1688"), {
                  mode: CryptoJS.mode.ECB,
                  padding: CryptoJS.pad.Pkcs7
                });
              defaultAesKey = CryptoJS.enc.Utf8.stringify(tmp)
                .toString();
              // console.log("defaultAesKey", defaultAesKey)
              var key = CryptoJS.enc.Utf8.parse(defaultAesKey);
              var decrypt = CryptoJS.AES.decrypt(str, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
              });
              return CryptoJS.enc.Utf8.stringify(decrypt).toString();
              console.log("sysDecrypt", CryptoJS.enc.Utf8.stringify(decrypt).toString())
              resolve(CryptoJS.enc.Utf8.stringify(decrypt).toString())
            }
          });
      })
    },
    // 过滤复文本特殊符号
    filterSpecialSymbol(str) {
      const regex = new RegExp('<img', 'gi')
      str = str.replace(regex, `<img style="max-width: 100%; height: auto"`);
    
      str = str.replace(/&/g, '&amp;')
      // str = str.replace(/</g, "&lt;")
      // str = str.replace(/>/g, "&gt;")
      str = str.replace(/\"/g, "&quot;")
      str = str.replace(/\'/g, "&#39;")
      // 替换&amp;nbsp;为空格
      let reg = new RegExp('&amp;nbsp;', 'g')// g代表全部
      if (str) {
        str = str.replace(reg, '\u3000')
      }
      // str = str.replace(/\n/g, "<br>") ;
      
      // Vue.js不能解析中文双引号“”
      str = str.replace(/&amp;/g, '&')
      str = str.replace(/&ldquo;/g, '“')
      str = str.replace(/&rdquo;/g, '”')
    
      // rich-text处理换行符
      if (str.trim() != '') {
        return str.split('\n').reduce((total, cur) => total += `<p>${cur}</p>`)
      } else {
        return str;
      }
      // return str;
    },
    // 对象转数组
    objTrantsArr(obj) {
      let settingObj = obj;
      let settingArr = Object.keys(settingObj).map(key => {
        //console.log(key); //为每个键名
        // console.log(settingObj);
        return settingObj[key]; //把每个对象返回出去生成一个新的数组中相当于0:{id:1}
      });
      return settingArr;
    },
    showMessage(options) {
      options.icon = options.icon || 'none'
      options.duration = options.duration || 3000
      // uni.showToast(options)
    },

    add0(m) {
      return m < 10 ? '0' + m : m
    },
    // 时间格式化
    dateFormatFun(timestamp, fmt) {
      if (typeof timestamp == 'string') timestamp = timestamp.replace(/-/g, '/')
      const date = new Date(timestamp)
      let monthEnglish= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"]
      const o = {
        'M+': date.getMonth() + 1, // 月份
        'D+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
        w: '日一二三四五六'.charAt(date.getDay()),
    	'yue': monthEnglish[new Date(new Date(timestamp)).getMonth()], // 月份
      }
      if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (const k in o) { 
    	// k == 'yue'月份转英文
        if (new RegExp('(' + k + ')').test(fmt)) {
    		// fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    		fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : (k == 'yue' ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    },
    format(shijianchuo) {
    	return this.dateFormatFun(shijianchuo, 'DD-yue-YYYY hh:mm:ss')
    },
    formatNs(shijianchuo) {
    	return this.dateFormatFun(shijianchuo, 'DD-yue hh:mm')
    },
    formatY(shijianchuo) {
    	return this.dateFormatFun(shijianchuo, 'DD-yue-YYYY')
    },
    formatH(shijianchuo) {
    	return this.dateFormatFun(shijianchuo, 'hh:mm:ss')
    },
    isInteger(obj) {
      return typeof obj === 'number' && obj % 1 === 0
    },
    setImgSize(arr, size, attr) {
      if (!arr || !arr.length) return
      arr.forEach(item => {
        let str;
        if (attr) {
          str = attr;
          if (!item[str]) return
        } else {
          if (item.image) str = 'image';
          if (item.images) str = 'images';
          if (item.imageUrl) str = 'imageUrl';
          if (item.remomondImageUrl) str = 'remomondImageUrl';
          if (item.goodsImage) str = 'goodsImage';
          if (!item[str]) return
        }
        if (item[str].indexOf(size) != -1) return
        let subs = item[str].split('.');
        let len = subs.length;
        subs[len - 2] = subs[len - 2] + `_r${size}p`;
        item[str] = subs.join('.')
      })
      return arr
    },
    checkpsw(e) {
      if (!e.detail.value) return
      let val = e.detail.value;
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
      if (!reg.test(val)) {
        console.log(reg.test(val));
      }
    },
    checkPswString(str) {
      // let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
      let reg = /^[a-zA-Z\d]{6,16}$/g;
      if (!reg.test(str)) {
        return false
      } else {
        return true
      }
    },
    checkNameString(str) {
      // let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,18}$/g;
      // let reg = /^[A-Za-z0-9]{3,18}$/g;
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5\-_.?@]{5,80}$/g;
      if (!reg.test(str)) {
        return false
      } else {
        return true
      }
    },
    checkPhoneString(str) {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5\-_.?@]{6,}$/g;
      if (!reg.test(str)) {
        return false
      } else {
        return true
      }
    },
    checkEmailString(str) {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(str)) {
        return false
      } else {
        return true
      }
    },
    goProduct(product) {
      let id;
      product.goodsId ? id = product.goodsId : '';
      console.log(product);
      // uni.navigateTo({
      //   url: '/pages/product/product-detail?id=' + id
      // })
    },
    forwardMiniProgram() {
      // #ifdef MP-WEIXIN
      wx.showShareMenu({
        withShareTicket: true
      })
      // #endif
    },
    checkNewMessage() {
      this.apiUrl.checkNewMessage().then(res => {
        if (res.data.status == 1 && res.data.data) {
          this.hasUnReadMessage = true;
        } else {
          this.hasUnReadMessage = false;
        }
      })
    },
    multiply(n1 = 0, n2 = 0) {
      var s1 = n1.toString()
      var s2 = n2.toString()
      var l1 = (s1.split('.')[1] || '').length
      var l2 = (s2.split('.')[1] || '').length
      var r1 = Number(s1.replace('.', ''))
      var r2 = Number(s2.replace('.', ''))
      return r1 * r2 / Math.pow(10, l1 + l2)
    },
    divide(n1 = 0, n2 = 0) {
      var s1 = n1.toString()
      var s2 = n2.toString()
      var l1 = (s1.split('.')[1] || '').length
      var l2 = (s2.split('.')[1] || '').length
      var r1 = Number(s1.replace('.', ''))
      var r2 = Number(s2.replace('.', ''))
      return this.multiply((r1 / r2), Math.pow(10, l2 - l1))
    },
    add(n1 = 0, n2 = 0) {
      var s1 = n1.toString()
      var s2 = n2.toString()
      var l1 = (s1.split('.')[1] || '').length
      var l2 = (s2.split('.')[1] || '').length
      var c = Math.abs(l1 - l2)
      var m = Math.pow(10, Math.max(l1, l2))

      var r1 = 0
      var r2 = 0
      if (c > 0) {
        var cm = Math.pow(10, c)
        if (l1 > l2) {
          r1 = Number(s1.replace('.', ''))
          r2 = Number(s2.replace('.', '')) * cm
        } else {
          r1 = Number(s1.replace('.', '')) * cm
          r2 = Number(s2.replace('.', ''))
        }
      } else {
        r1 = Number(s1.replace('.', ''))
        r2 = Number(s2.replace('.', ''))
      }
      return (r1 + r2) / m
    },
    subtract(n1 = 0, n2 = 0) {
      var l1 = (n1.toString().split('.')[1] || '').length
      var l2 = (n2.toString().split('.')[1] || '').length
      var m = Math.pow(10, Math.max(l1, l2))
      var n = (l1 >= l2) ? l1 : l2
      return Number(((n1 * m - n2 * m) / m).toFixed(n))
    },
    checkLogin(myTips) {
      // console.log("myTips",myTips)
      // console.log("store",store)
      let that = this;
      const memberInfo = store.state.memberInfo || {}
      if (!memberInfo.id) {
        vThis.$alert(myTips.content, myTips.title, {
          confirmButtonText: myTips.confirm,
          callback: action => {
            if(action == 'confirm'){
              // router.push({path:'/login'});
              store.commit('updateIndex','#/login')
              store.commit('saveDefaultActiveIndex','')
              setTimeout(()=>{
                location.reload()
              },500)

              // road.$emit('goto', '/login');
            }
          }
        });
        return false
      }
      return true
    },
    percent(value, fmt) {
      return `${((value ||0) *100).toFixed(fmt ||2)}%`;
    },

    percentNum(value, fmt) {
      return `${((value ||0) *100)}`;
    },
    percentT(value, fmt) {
      return `${((value ||0) *100).toFixed(fmt ||3)}`;
    },
    // 是否是手机
    isMobile(){
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        // localStorage.setItem('isiphone',flag)
        localStorage.setItem('ismobile',flag?1:0);
        let goUrl = flag ? 1 : 0;
        return goUrl;
    },
    // h5和pc互通
    interworking(){
      let goUrl = this.isMobile();
      // 获取浏览器路径
      let api = window.location.href;
      console.log("api",api)
      if (goUrl === 1) {
        //移动端地址
        api = api.replace("pc","green")
        location.href = api
        // location.href ='https://tk.asiacoin.net/green/index.html#/pages/login/register?code=GF8CPPG3';
      }else{
        // location.href = api
        //H5地址
        // location.href ='https://tk.asiacoin.net/pc/index.html#/pages/login/register?code=GF8CPPG3';
      }
    },
  }
}
