/**
 * Created by yqr on 2018/4/13.
 * 设置api请求的baseUrl
 * 实际项目中建议该文件不纳入版本管理
 */
const config = {
  //1线上billiontrans，2测试，3:millionswin项目，4:SevenCoin项目,5:manytrans项目,6:ideex项目
  //7:KCOIN项目,8:bitfly项目,9:lun项目
  type:2,
  baseUrl:'',
  // 默认以太坊网址：
  miningUrl:'https://ex.0kcoin.net/',
  // 配置跨域
  // miningUrl:'/api',
  imagePrefix: '@/assets/images/',
  // 测试环境
  isDev:true,
  mpClientversion: '20220107',
}

// 请求网址根据浏览器当前链接显示
let host = window.location.host.toLowerCase();
let api = "https://" + host + "/";

//
if (config.type == 1) {
	config.baseUrl = api || 'https://tk.billiontrans.com/'
} else if (config.type == 2) {
	config.baseUrl = 'https://dev6.cryptobillionswin.com:28080/'
}

export default {
  // baseUrl: 'http://localhost:8090',
  baseUrl: config.baseUrl,
  miningUrl:config.miningUrl,
  type:config.type,
  isDev: config.isDev,
  imagePrefix:config.imagePrefix,
  mpClientversion:config.mpClientversion,
}
