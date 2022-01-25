/**
 * Created by yqr on 2018/4/13.
 */
import Env from './env';
import axios from 'axios'
import qs from 'qs'
import {road} from '../road.js'
// import routerIndex from '../router/index'
import myMixin from '../common/myMixin.js';
import store from '../store.js'
 import Vue from 'vue'

axios.defaults.withCredentials = false;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// post请求后台无法获取传递参数
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
axios.defaults.transformRequest = function (data) {
  return qs.stringify(data, {arrayFormat: 'brackets'})
}

let loginReturn = false;

//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  //console.dir(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  let obj = response.data;
  // console.log("obj",obj)
  if (obj && obj.status == true) {
    
  }
  
  return response;
}, function (error) {
  return Promise.reject(error);
});

//基本地址
let base = Env.baseUrl;
// 挖矿地址
let miningUrl = Env.miningUrl;
// console.log("base",base)

//测试使用
export const ISDEV = Env.isDev;
let randTokenMining = null;

//通用方法
export const POST = (url, params) => {
  randTokenMining = localStorage.getItem('randTokenMining')
  // console.log("randTokenMining",randTokenMining)
  if(randTokenMining){
    url = url + ";randToken=" + randTokenMining
  }

  // 设置多语言请求头
  if(params == undefined || params == null){
    params = {};//防止underfine未命名
  }
  // let localeOld_block_chain = localStorage.getItem('localeOld_block_chain');
  // if(localeOld_block_chain){
  // 	params.userLang = localeOld_block_chain;
  // 	if(params&&params.language){
  // 		params.userLang =  params.language || 'en';
  // 	}else{
  //     // 默认语言
  //     let multilingualList = Vue.prototype.$multilingualList;
  //     if(multilingualList&&multilingualList.length>0){
  //       multilingualList.forEach((pItem,pIndex) => {
  //     	  switch(pItem.attribute){
  //     			case localeOld_block_chain  :
  //     				params.userLang = localeOld_block_chain;
  //     				// console.log("params.userLang",params.userLang)
  //     				break; /* 可选的 */
  //     			case !localeOld_block_chain  :
  //     			   params.userLang = 'en';
  //     			   break; /* 可选的 */
  //     			/* 您可以有任意数量的 case 语句 */
  //     			default : /* 可选的 */
  //     	  }
  //       })
  //     }
  // 	}
  // }else{
  // 	if(params&&params.language){
  // 		params.userLang =  params.language || 'en';
  // 	}else{
  // 		params.userLang =  params.userLang || 'en';
  // 	}
  // }

  // console.log("url",url)
  return new Promise((resolve,reject)=>{
    // post请求后台无法获取传递参数urlstringify(params)
    axios.post(`${base}${url}`, params).then(res => {
      // console.log("POST",res.data)
      let obj = res.data;
      // 实施刷新randTokenMining
      if (obj && obj.token) {
        randTokenMining = obj.token;
        // console.log("randTokenMining",randTokenMining)
        localStorage.setItem('randTokenMining', randTokenMining);
      }
      if(obj.status==true){

      }
      resolve(res)
    })
  })
}

export const GET = (url, params) => {
  randTokenMining = localStorage.getItem('randTokenMining')
  // console.log("randTokenMining",randTokenMining)
  if(randTokenMining){
    url = url + ";randToken=" + randTokenMining
  }
  // 设置多语言请求头
  params = {};//防止underfine未命名
  // let localeOld_block_chain = localStorage.getItem('localeOld_block_chain');
  // if(localeOld_block_chain){
  // 	params.userLang = localeOld_block_chain;
  // 	if(params&&params.language){
  // 		params.userLang =  params.language || 'en';
  // 	}else{
  // 		let multilingualList = Vue.prototype.$multilingualList;
  // 		if(multilingualList&&multilingualList.length>0){
  // 		  multilingualList.forEach((pItem,pIndex) => {
  // 			  switch(pItem.attribute){
  // 					case localeOld_block_chain  :
  // 						params.userLang = localeOld_block_chain;
  // 						// console.log("params.userLang",params.userLang)
  // 						break; /* 可选的 */
  // 					case !localeOld_block_chain  :
  // 					   params.userLang = 'en';
  // 					   break; /* 可选的 */
  // 					/* 您可以有任意数量的 case 语句 */
  // 					default : /* 可选的 */
  // 			  }
  // 		  })
  // 		}
  // 	}
  // }else{
  // 	if(params&&params.language){
  // 		params.userLang =  params.language || 'en';
  // 	}else{
  // 		params.userLang =  params.userLang || 'en';
  // 	}
  // }
  return new Promise((resolve,reject)=>{
    return axios.get(`${base}${url}`, {params: params}).then(res => {
      let obj = res.data;
       // 实施刷新randTokenMining
      if (obj && obj.token) {
        randTokenMining = obj.token;
        localStorage.setItem('randTokenMining', randTokenMining);
        // console.log("randTokenMining",randTokenMining)
      }
      
      resolve(res)
    })
  })
}

//通用方法挖矿请求
export const POSTMining = (url, params) => {

  // 设置多语言请求头
  if(params == undefined || params == null){
    params = {};//防止underfine未命名
  }
  
  // console.log("url",url)
  return new Promise((resolve,reject)=>{
    // post请求后台无法获取传递参数urlstringify(params)
    axios.post(`${miningUrl}${url}`, params, {
      // 配置跨域
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
      transformRequest(data){
        return JSON.stringify(data);
      }
    }).then(res => {
      // console.log("miningUrl",res.data)
      let obj = res.data;
      if(obj.status==true){

      }
      resolve(res)
    })
  })
}

//转义方法
function urlstringify(obj) {//字符串序列化
    var str = '';
    for (let key in obj) {
        if (Object.prototype.toString.call(obj[key]) === '[object Array]' || obj[key].constructor === Object) {
            //数组,对象
            for (var arrKey in obj[key]) {
                if (Object.prototype.toString.call(obj[key][arrKey]) === '[object Array]' || obj[key][arrKey].constructor === Object) {
                    //数组,对象
                    for (var arrarrKey in obj[key][arrKey]) {
                        str += '&' + key + '[' + arrKey + '][' + arrarrKey + ']=' + obj[key][arrKey][arrarrKey];
                    }
                } else {
                    //普通
                    str += '&' + key + '[' + arrKey + ']=' + obj[key][arrKey];
                }
            }
        } else {
            //普通
            str += '&' + key + '=' + obj[key];
        }
    }
    return str.substring(1);
}
