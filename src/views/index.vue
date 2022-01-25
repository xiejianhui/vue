<template>
  <div>
    <div>我是首页</div>
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>

<script>
import Child1 from '../components/child1.vue'
export default {
  name: "app-index",
  data() {
    return {

    };
  },
  components:{
    Child1,
  },
  created() {
    
  },
  computed: {
    
  },
  mounted() {
    
  },
  beforeDestroy() {
    
  }, 
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  font-family: PingFangSC-Regular, sans-serif;
  color: #2c3e50;
}

body,
html {
  width: 100%;
  user-select: none;
}

body {
  background: #fbfbfb;
  margin: 0;
  padding: 0;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  // margin: 0 10px;
}

a {
  color: #42b983;
}

// 自定义样式
.van-nav-bar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.van-nav-bar {
  background: #181e24;
  color: #fff;
  padding-top: 0.26667rem;
  padding-left: 0.26667rem;

  .van-nav-bar__content {
    position: relative;
    display: flex;
    align-items: center;
    height: 1.22667rem;

    .van-nav-bar__left,
    .van-nav-bar__right {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 0 0.42667rem;
      font-size: 0.37333rem;
      cursor: pointer;
    }

    .defi-share {
      color: #fff;

      .icon-share {
        // font-size: 0.8rem;
        width: 0.8rem;
        height: 0.8rem;
      }

    }

    .van-nav-bar__title {
      color: #fff;
      line-height: 1.22667rem;
      max-width: 60%;
      margin: 0 auto;
      font-weight: 500;
      font-size: 0.42667rem;
    }

    .van-nav-bar__left {
      left: 0;
    }

    .van-nav-bar__right {
      right: 0;

      .van-button--normal {
        padding: 0 0.4rem;
        font-size: 0.37333rem;
      }

      .defi-connect-wallet {
        color: #151826;
        font-size: 0.53333rem;
        height: 1.22667rem;
      }

      .defi-btn {
        height: 0.53333rem;
        padding: 0 0.05333rem;
        border-radius: 0.13333rem;
        outline: none;
        margin-top: 0.2rem;
      }
    }

    .van-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      img.defi-logo {
        width: 2.66667rem;
      }
    }

    .van-button {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 1.17333rem;
      margin: 0;
      padding: 0;
      font-size: 0.42667rem;
      line-height: 1.2;
      text-align: center;
      border-radius: 0.05333rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .van-button {
      touch-action: none;
    }
  }

  .van-button__icon {
    font-size: 1.2em;
    line-height: inherit;
  }

  .icon-link1 {
    // font-family: iconfont !important;
    // font-size: 0.42667rem;
    // font-style: normal;
    // -webkit-font-smoothing: antialiased;

    width: 0.36rem;
    height: 0.36rem;
  }
}

.iconfont {
  font-family: iconfont !important;
  font-size: 0.42667rem;
  font-style: normal;
}

.van-button--normal {
  padding: 0 0.4rem;
  font-size: 0.37333rem;
}
.van-button--default {
  color: #323233;
  background-color: #fff;
  border: 0.02667rem solid #ebedf0;
}

.van-button__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

// .van-nav-bar--fixed + div,
// .van-nav-bar--fixed + form {
//   margin-top: 0;
// }

.defi-banner {
  background: #151826;
  margin-top: 1.46667rem;

  .defi-banner-bg {
    display: flex;
    justify-content: center;
    background: url(../assets/images/bg_top.4224d330.png);
    background-size: 100% auto;
    height: 10.4rem;
    width: 100%;
  }
  .defi-banner-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    color: #fff;
    font-size: 0.53333rem;
    align-items: center;

    h3 {
      margin-bottom: 2.13333rem;
    }

    button {
      color: white;
      background: rgb(255, 133, 23);
      border-color: rgb(255, 133, 23);
      margin-bottom: 2.13333rem;
    }

    .van-button--danger {
      color: #fff;
      background-color: #ee0a24;
      border: 0.02667rem solid #ee0a24;
    }

    .van-button:before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background-color: #000;
      border: inherit;
      border-color: #000;
      border-radius: inherit;
      transform: translate(-50%, -50%);
      opacity: 0;
      content: " ";
    }

    .van-button__text {
      margin-left: 0;
    }
  }
}

.defi-reports-icons {
  margin: 0.4rem;
}

.defi-reports .defi-reports-icons {
  .van-col {
    padding-right: 0.26667rem;
  }

  img {
    width: 100%;
  }
}

.van-col--8 {
  width: 33.33333333%;
}

.van-col--12 {
  width: 50%;
}

.van-col {
  float: left;
  box-sizing: border-box;
  min-height: 0.02667rem;
}

.footer-center,
.footer {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
}

.footer {
  background: url(../assets/images/footer-bg.5074c6e2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-top: 1.33333rem;
}

.footer:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(21, 24, 38, 0.85);
  z-index: 0;
}

.footer-center {
  z-index: 2;
  flex-direction: column;
  padding-top: 1.33333rem;
  padding-bottom: 1.33333rem;
}

.footer-center-logo {
  margin-bottom: 0.8rem;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
  }
}

.van-button--round {
  border-radius: 26.64rem;
}

.van-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 1.17333rem;
  margin: 0;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.2s;
}

.van-button:before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}

.van-tabs--line {
  box-sizing: content-box;
  height: 100%;
  // padding-bottom: 0.4rem;

  .van-tabs__wrap {
    height: 1.17333rem;
  }
  .van-tabs__nav {
    position: relative;
    display: flex;
    background-color: #fff;
    user-select: none;
  }

  .van-tab__text--ellipsis {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 0.37333rem;
    color: rgb(161, 161, 179);
  }

  .van-tab--active {
    font-weight: 500;
    color: #323233;

    .van-tab__text--ellipsis {
      color: #323233;
    }
  }

  .van-tabs__nav--line {
    box-sizing: content-box;
    height: 100%;
    padding-bottom: 0.4rem;
  }

  .van-tabs__line {
    position: absolute;
    bottom: 0.4rem;
    left: 0;
    z-index: 1;
    width: 1.06667rem;
    height: 0.08rem;
    border-radius: 0.08rem;
    background: #ff8517;
  }
}

.van-tab {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 0.10667rem;
  color: #646566;
  font-size: 0.37333rem;
  line-height: 0.53333rem;
  cursor: pointer;
}

.van-tabs__content {
  .van-tab__pane,
  .van-tab__pane-wrapper {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
  }

  .defi-pool,
  .defi-account {
    margin: 0.4rem;
    border-radius: 0.4rem;
    background: #fff;

    h3 {
      padding: 0.4rem 0.4rem 0 0.4rem;
      font-size: 0.42667rem;
      font-weight: 700;
      text-align: left;
    }
  }

  .van-cell-group {
    background: transparent;
  }

  .van-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0.26667rem 0.42667rem;
    overflow: hidden;
    font-size: 0.37333rem;
    line-height: 0.64rem;
    color: #a1a1b3;
    background: transparent;
  }

  .van-cell__title,
  .van-cell__value {
    flex: 1;
  }

  .van-cell__title {
    text-align: left;
    .van-cell {
      color: #a1a1b3;
      background: transparent;
    }
  }

  .van-cell__value {
    color: #2082fe;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }

  .defi-output {
    background: #fff;
    border-radius: 0.26667rem;
    margin: 0.4rem;
    padding: 0.4rem;

    .defi-output-title {
      color: #282c3c;
      font-size: 0.42667rem;
      font-weight: 700;
      text-align: left;
    }

    .defi-output-header {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      color: #a1a1b3;
    }

    .defi-output-header a,
    .defi-output-header li {
      display: block;
      height: 0.8rem;
      line-height: 0.8rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.4rem;
    }

    .warp {
      height: 7.2rem;
      width: 100%;
      margin: 0 auto;
      overflow: hidden;

      ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
      }
    }
  }

  .defi-help {
    margin: 0.4rem;
    border-radius: 0.4rem;

    .van-collapse-item {
      margin-bottom: 0.26667rem;
      background: #fff;
      border-radius: 0.4rem;

      .van-cell {
        background: transparent;
        position: relative;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 0.26667rem 0.42667rem;
        overflow: hidden;
        color: #323233;
        font-size: 0.37333rem;
        line-height: 0.64rem;
      }

      .van-cell--clickable {
        cursor: pointer;
      }

      .van-cell__title {
        color: #081724;
        font-weight: 700;
        font-size: 0.42667rem;
        text-align: left;
      }

      .van-cell__right-icon {
        margin-left: 0.10667rem;
        color: #969799;
      }

      .van-cell__left-icon,
      .van-cell__right-icon {
        height: 0.64rem;
        font-size: 0.42667rem;
        line-height: 0.64rem;
      }

      .van-collapse-item__wrapper {
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        will-change: height;
      }

      .van-collapse-item__content {
        background: transparent;
        text-align: left;
        padding: 0.32rem 0.42667rem;
        color: #969799;
        font-size: 0.37333rem;
        line-height: 1.5;
      }
    }
  }

  .programme-list{
    padding: 0.26667rem 0.13333rem 0.40667rem;
    margin: 0.2rem 0.4rem;

    .programme-item{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .programme-title{
        width: 2.5rem;
        text-align: left;
      }
    }

    .programme-item-btm{
      height: 80px;
      position: relative;
      border: 0.02667rem solid #cccccc;
      padding: 0  0.13667rem;
      border-radius: 0.26667rem;
      
      overflow-y: auto;
      margin-top: .4rem;
      width: 75%;
      box-sizing: border-box;

      // width: 100%;
      // display: flex;
      // flex-direction: row;
      // align-items: center;
      // padding: 0.26667rem 0.13333rem;
      // min-height: 80px;
      
      .programme-remark{
        // overflow-y: auto;
        // text-align: left;
      }
    }
  }

  // 自定义下拉框样式start
  .divInput{
    position: relative;

    ul li{
      list-style: none;
    }
    .input{
      width: 140px;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      border: 1px solid #cccccc;
      position: relative;
      border-radius: 4px;
    }
    .input input{
      border: none;
      outline: none;
      width: 90%;
    }
    .input img{
      position: absolute;
      // right: 34px;
      // top: 48%;

      right: 15px;
      top: 10px;
      width: 20px;
      height: auto;
    }
    .list{
      width: 150px;
      border: 1px solid #cccccc;
      overflow: hidden;
      border-radius: 4px;
      position: absolute;
      background: #ffffff;
      z-index: 10;
    }
    .list ul li{
      width: 100%;
      height: 30px;
      cursor: pointer;
      line-height: 30px;
      // padding-left: 10px;
    }
    .list ul li:hover{
      background-color: #cccccc;
    }
  }
  // 自定义下拉框样式end

  // 自定义金额
  .divInput1{
    width: 75%;

    .input{
      width: 100%;
      margin-top: .4rem;
      padding-left: 0px;
    }
  }

  .defi-exchange {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0.02667rem solid #ebedf3;
    border-radius: 0.26667rem;
    margin: 0.4rem;
    padding: 0.26667rem 0.13333rem;

    .defi-exchange-field {
      width: 3.46667rem;
      font-family: DBOzoneX-Medium;
      font-size: 0.8rem;
      background: transparent;
    }

    .van-cell__value {
      position: relative;
      vertical-align: middle;
      word-wrap: break-word;
    }

    // .van-field__body {
    //   display: flex;
    //   align-items: center;

    //   .van-field__control {
    //     display: block;
    //     box-sizing: border-box;
    //     width: 100%;
    //     min-width: 0;
    //     margin: 0;
    //     padding: 0;
    //     color: #323233;
    //     line-height: inherit;
    //     text-align: left;
    //     background-color: transparent;
    //     border: 0;
    //     resize: none;
    //     outline: none;
    //     font-size: 0.6rem;
    //   }
    // }

    .van-cell:after {
      position: absolute;
      box-sizing: border-box;
      content: " ";
      pointer-events: none;
      right: 0.42667rem;
      bottom: 0;
      left: 0.42667rem;
      border-bottom: 0.02667rem solid #ebedf0;
      transform: scaleY(0.5);
    }

    .van-icon-sort {
      font-size: 0.53333rem;
      width: 0.53333rem;
      height: 0.53333rem;
    }

    .van-icon {
      position: relative;
      font: normal normal normal 0.37333rem/1 vant-icon;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
    }

    .van-icon-sort:before {
      content: "\F0EA";
    }

    .van-icon,
    .van-icon:before {
      display: inline-block;
    }

    .van-icon,
    .van-icon:before {
      display: inline-block;
    }

    .defi-exchange-to {
      width: 3.46667rem;
      text-align: center;
    }

    .icon-USDT {
      font-size: 0.58667rem;
      margin-left: 0.53333rem;
    }

    .defi-exchange-usdt {
      font-size: 0.42667rem;
      margin-left: 0.26667rem;
    }
  }

  .van-cell__value--alone {
    color: #323233;
    text-align: left;
  }

  .van-field__value {
    overflow: visible;
  }

  .defi-exchange-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.4rem;
  }

  .defi-exchange-submit {
    border-radius: 0.13333rem;
    width: 4.93333rem;
  }

  .van-button--primary {
    color: #fff;
    background-color: #07c160;
    border: 0.02667rem solid #07c160;
  }

  .defi-exchange-tip {
    border-top: 0.02667rem solid #ebedf3;
    margin-left: 0.4rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    color: #a1a1b3;
  }

  .van-tabs--card {
    .van-tabs--card > .van-tabs__wrap {
      height: 0.8rem;
    }

    .van-tabs__nav--card {
      box-sizing: border-box;
      height: 0.8rem;
      margin: 0 0.42667rem;
      // border: .02667rem solid #ee0a24;
      border: 0.02667rem solid #ff8517;
      border-radius: 0.05333rem;

      .van-tab {
        color: #ee0a24;
        border-right: 0.02667rem solid #ee0a24;
        .van-tab__text--ellipsis {
          color: #ee0a24;
          font-weight: 500;
        }
      }

      .van-tab:last-child {
        border-right: none;
      }

      .van-tab.van-tab--active {
        .van-tab__text--ellipsis {
          color: #fff;
        }
        background: #ff8517;
      }
    }

    .van-row {
      border-bottom: 0.02667rem solid #ebedf0;
      padding-top: 0.13333rem;
      padding-bottom: 0.13333rem;
      display: flex;
      justify-items: center;
      align-items: center;
    }

    .record-list{
      height: 7.2rem;
      overflow: auto;
      
      .van-row{
        padding-top: 0.23333rem;
      }
    }

    .van-tabs__nav {
      position: relative;
      display: flex;
      background-color: #fff;
      user-select: none;
    }
  }
}

.van-row:after {
  display: table;
  clear: both;
  content: "";
}

.van-field__body {
  display: flex;
  align-items: center;

  .van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    outline: none;
    font-size: 0.6rem;
  }
}

.van-button {
  border-radius: 0.13333rem;
}

button,
input,
select,
textarea {
  outline: none;
}

.warp ul a,
.warp ul li {
  display: block;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  position: relative;

  .address {
    color: #2082fe;
  }

  .quantity {
    color: #060606;
    font-weight: 700;
  }
}

// 分享弹框
.van-dialog {
  position: fixed;
  overflow: hidden;
  font-size: 0.42667rem;
  backface-visibility: hidden;
  transition: 0.3s;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  border-radius: 0;
  background: #fbfbfb;

  h1 {
    padding-left: 0.4rem;
    font-size: 0.53333rem;
  }

  .van-icon-cross {
    padding-top: 0.4rem;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.26667rem;
  }

  .van-icon-cross:before {
    line-height: 1.44rem;
    margin-right: 0.26667rem;
  }
  .van-icon-cross:before {
    content: "\F042";
  }
  .van-icon,
  .van-icon:before {
    display: inline-block;
  }

  .defi-share {
    margin: 0.4rem;
    background: #fff;
    padding: 0.4rem;
    border-radius: 0.4rem;
    color: #a1a1b3;

    .van-cell__value {
      width: 100%;
    }

    button,
    input,
    select,
    textarea {
      outline: none;
    }
  }

  h3 {
    color: #a1a1b3;
    text-align: left;
  }

  .van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
  }

  .van-field__control_share{
    margin-right: 0.32rem;
  }

  van-field__button {
    padding-left: 0.21333rem;
  }
  .van-field__button,
  .van-field__clear,
  .van-field__icon,
  .van-field__right-icon {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }

  .van-button {
    border-radius: 0.13333rem;
  }

  .van-button--small {
    height: 0.85333rem;
    padding: 0 0.21333rem;
    font-size: 0.32rem;
  }

  .van-field__control {
    font-size: 0.42667rem;
  }

  .van-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0.26667rem 0;
    overflow: hidden;
    color: #323233;
    font-size: 0.37333rem;
    line-height: 0.64rem;
    background-color: #fff;
  }

  .van-button {
    border: none;
  }
}

.van-cell:focus {
  background: inherit !important;
}

// 取消点击背景颜色
.van-cell--clickable,
.van-tab,
.defi-share,
.van-icon-cross,
.van-nav-bar__right,
.van-nav-bar__left {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}

//顶部弹框提示
.van-notify {
  display: flex;
  align-items: center;
  justify-content: center;
  // box-sizing: border-box;
  padding: 0.21333rem 0.42667rem;
  color: #fff;
  font-size: 0.37333rem;
  line-height: 0.53333rem;
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;

  height: 0.53333rem;
  box-sizing: content-box;
}
.van-notify--warning {
  background-color: #ff976a;
}
.van-popup--top {
  // top: 0;
  left: 0;
  width: 100%;
}
.van-popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  // transition: -webkit-transform .3s;
  // transition: transform .3s;
  // transition: transform .3s,-webkit-transform .3s;
  transition: all 0.3s ease-in-out; //这是滑入划出的动画
}

.van-popup-green {
  background: #07c160;
}

// 中部弹框
.van-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.van-dialog-middle {
  position: fixed;
  top: 45%;
  left: 50%;
  bottom: inherit;
  width: 8.53333rem;
  height: auto;
  overflow: hidden;
  font-size: 0.42667rem;
  background-color: #fff;
  border-radius: 0.42667rem;
  transform: translate3d(-50%, -50%, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: 0.3s;

  .van-dialog__header {
    font-weight: 700;
    font-size: 0.42667rem;
  }

  .van-dialog__header {
    padding-top: 0.69333rem;
    font-weight: 700;
    line-height: 0.64rem;
    text-align: center;
  }

  .van-button--danger {
    color: #fff;
    background-color: rgb(255, 133, 23);
    border: 0.02667rem solid rgb(255, 133, 23);
  }
}

/* $message弹框样式 */
.el-message{
  /* top: 50% !important;
  margin-top: -20px; */
  // top: 0px !important;
}

// more
.more{
  color: #999;
      text-align: center;
      cursor: pointer;
}

</style>
