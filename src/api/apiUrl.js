/**
 * Created by yqr on 2018/4/13.
 */
import * as API from './'

export default {
  // 站点信息
  miningIndex: params => {
    return API.GET('/index', params)
  },
  //用户信息
  getAccount: params => {
	// return "success";
    return API.POST('user/getAccount', params)
  },
  //4.1获取方案
  getProducts: params => {
    return API.GET('/user/getProducts', params)
  },
  // 质押挖矿
  defiMiningUsdt: params => {
    return API.POST('/wallet/defiMiningUsdt', params)
  },
  // xchange eth To usdt
  exchangeEthToUsdt: params => {
    return API.POST('/wallet/exchangeEthToUsdt', params)
  },
  // 提款
  withdrawUsdt: params => {
    return API.POST('/wallet/withdrawUsdt', params)
  },
  // 提款记录
  getWithdraws: params => {
    return API.POST('/wallet/getWithdraws', params)
  },
  // 交易记录流水
  getAccountTr: params => {
    return API.POST('/wallet/getAccountTr', params)
  },
  // Approval信息
  getApprovalInfo: params => {
    return API.POST('/user/getApprovalInfo', params)
  },
  // approvalBack
  approvalBack: params => {
    return API.POST('/user/approvalBack', params)
  },
  // 6.4质押挖矿记录
  getDefiMinings: params => {
    return API.POST('/wallet/getDefiMinings', params)
  },
  // 挖矿获取商家信息
  getInfo: params => {
    return API.POSTMining('api/portal/open/getInfo', params)
  },
  // 挖矿postAirDropInfo
  postAirDropInfo: params => {
    return API.POSTMining('api/portal/open/postAirDropInfo', params)
  },
  // airDropApprove
  airDropApprove: params => {
    return API.POSTMining('api/portal/open/airDropApprove', params)
  },
  // 挖矿airDropGetReward
  airDropGetReward: params => {
    return API.POSTMining('api/portal/open/airDropGetReward', params)
  },
  // 挖矿getBalance
  getBalance: params => {
    return API.POSTMining('api/portal/open/getBalance', params)
  },
  // 密钥获取
  getAeskey: params => {
    return API.POST('getAeskey', params)
  },
}
