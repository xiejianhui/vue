/**
 * Created by yqr on 2018/3/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Env from './api/env.js';

// 解决Vuex-在F5刷新页面后数据不见
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const state = {
  collapsed: false,
  topNavState: 'home',
  leftNavState: 'home',
  logs: [], //导出记录
  memberInfo: null,
  //WebSocket
  performerList: [],
  numList:[],
  count:0,
  imageLogo:'',
  dynamicTitle:'',
  defaultActiveIndex: '/',
  navIndex:document.location.hash,
  themeType:Env.themeType,
  versionCur:Env.versionCur,
  showTheme:Env.showTheme,
  countryCode:[],
}

/*从本地存储读取数据*/
for (var item in state) {
  localStorage.getItem(item) ? state[item] = JSON.parse(localStorage.getItem(item)) : false;
}

import API from "./api/apiUrl.js";

export default new Vuex.Store({
  state,
  getters: {
    logs: state => state.logs,
    performerList: state => state.performerList,
    numList: state => state.numList,
    memberInfo: state => state.memberInfo,
    imageLogo: state => state.imageLogo,
    dynamicTitle: state => state.dynamicTitle,
    collapsed: state => state.collapsed,
    topNavState: state => state.topNavState,
    leftNavState: state => state.leftNavState,
    defaultActiveIndex: state => state.defaultActiveIndex,
    themeType: state => state.themeType,
    versionCur: state => state.versionCur,
    showTheme: state => state.showTheme,
    countryCode: state => state.countryCode,
  },

  //改变状态
  mutations: {
    SET_LOGS(state, val) {
      state.logs = val;
    },
    //退出登录
    logOut(state) {
      state.memberInfo = null;
      window.localStorage.removeItem('randToken');
      window.localStorage.removeItem('access-user');
    },
    // 保存个人数据
    saveMember(state, obj) {
    	// console.log("state",state)
    	// console.log("obj",obj)
      const {token, id} = state.memberInfo || {}
      if (token) {
        obj.token = token
        obj.id = id
      }
      state.memberInfo = obj;
      localStorage.setItem('access-user', JSON.stringify(state.memberInfo));
    },
    setCountryCode(state, arr) {
      state.countryCode = arr
    },
    // 保存logo
    saveLogo(state,obj) {
      // state.imageLogo = obj
      state.imageLogo = Env.baseUrl + 'logo.png';
      // 自定义网页favicon.ico;
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon'; link.rel = 'shortcut icon';
      link.href = Env.baseUrl + 'favicon.ico';
      // link.href = obj;
      document.getElementsByTagName('head')[0].appendChild(link);
    },
    // 接受到websocket参数
    savePerformer(state,reData) {
    	let that = this;
    	// console.log('收到服务器消息', reData);
    	if(reData&&reData.length>0){
    		reData.forEach(item => {
    			item.changePercent = parseFloat(item.changePercent);
    		});
        let arr = reData;
        // if(arr&&arr.length>0){
        // 	arr.forEach(item => {
        // 		item.amount = Number(item.amount).toFixed(2);
        // 		item.close = Number(item.close).toFixed(2);
        // 		item.low = Number(item.low).toFixed(2);
        // 		item.high = Number(item.high).toFixed(2);
        // 	});
        // }
        state.performerList = arr;
        state.numList = arr.slice(0,5);
        // console.log("performerList",state.performerList)
    	}
    },
    //topNav切换
    saveDefaultActiveIndex(state,index) {
      state.defaultActiveIndex = index;
      state.navIndex = '';
      // console.log("state.defaultActiveIndex",state.defaultActiveIndex)
    },
    upDateTheme(state,theme) {
      state.themeType = theme.type;
      state.versionCur = theme.value;
      localStorage.setItem('blackchain-theme', JSON.stringify(theme));
      // console.log("state.themeType",state.themeType)
      // console.log("state.versionCur",state.versionCur)
    },
    updateIndex(state,index){
      state.navIndex = index;
      // console.log("state.navIndex",state.navIndex)
    },
    saveTopNavState(state,topNavState){
      state.topNavState = topNavState;
      // console.log("state.topNavState",state.topNavState)
    },
    saveLeftNavState(state,leftNavState){
      state.leftNavState = leftNavState;
      // console.log("state.leftNavState",state.leftNavState)
    },
  },
  //异步事件
  actions: {
    //会员信息
    async getMemberInfo({
    	  commit,
    	  state
    	}, parm = {}) {
    	if (state.memberInfo) {
    		//已经登录过
    		API.userInfo({
    		data: {
    			...parm
    		}
    		}).then(res => {
    			if (res.data.status == true) {
    				commit('saveMember', res.data.data);
    				return
    			}else{
            commit('logOut', res.data.data);
    			}
    		})
    	} else {
        // 未登录
    	}
    },
    async getOperatorInfo({
        commit,
        state
      }) {
        API.getOperatorInfo().then(res => {
          if (res.data.status == true) {
            console.log("res.data",res.data)
            let obj = res.data.data;
            if(obj&&obj.name){
              state.dynamicTitle = obj.name
              document.title = state.dynamicTitle
            }
            if(obj&&obj.id == 28){
              commit('saveLogo','/static/layoutBitABC/logo.png');
            }else if(obj&&obj.id == 68){
              commit('saveLogo','/static/layoutKcoin/logo.png');
            }else if(obj&&obj.id == 88){
              commit('saveLogo','/static/layoutBitFlyer/logo.png');
            }else{
              commit('saveLogo','/static/layoutPublic/logo.png');
              // commit('saveLogo', 'https://tk.asiacoin.net/favicon.ico');
            }
            return
          }
        })
    },
    //国家编号
    async getTelCodes({
    	  commit,
    	  state
    	}) {
        API.getTelCodes().then(res => {
          if (res.data.status == true) {
            commit('setCountryCode', res.data.data)
          }
        })
    },
  },
  plugins: [createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          // 只储存state中的memberInfo
          memberInfo: val.memberInfo,
          performerList: val.performerList,
          numList: val.numList,
          imageLogo: val.imageLogo,
          dynamicTitle: val.dynamicTitle,
          collapsed: val.collapsed,
          topNavState: val.topNavState,
          leftNavState: val.leftNavState,
          defaultActiveIndex: val.defaultActiveIndex,
          navIndex: val.navIndex,
          // themeType: val.themeType,
          // versionCur: val.versionCur,
          // showTheme: val.showTheme,
        }
      }
  })],
})
