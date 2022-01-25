<template>
    <div>
        <div class="divInput">
            <div class="input" @click="openValue">
                <input v-model="value" type="text" placeholder="Mining scheme">
                <!-- <img src="../assets/arrow.png" alt=""> -->
                 <!-- <i class="el-icon-close" @click="closePullDown"></i> -->
            </div>
            <div class="list" v-show="show">
                <ul>
                <li @click="getvalue(index,item)" v-for="(item,index) in programmeList" :key="item.index">{{ item.name }}</li>
                </ul>
            </div>
        </div>
        <!-- 蒙层  点击关闭弹出框 -->
        <div class="Montmorillonite_layer" @click="closePullDown"></div>
    </div>
</template>

<script>

    export default {
        name:"PullDown",
        props:{
            // 组件定位的值在使用的地方传入 如果没有传值  使用默认值
            /** 
            * show:   @type {Boolean}  控制盒子显示隐藏  
            * top:      @type {Number}  控制盒子距离顶部距离
            * left:     @type {Number}  控制盒子距离左侧距离
            * right:    @type {Number}  控制盒子距离右侧距离
            * height:   @type {String}  控制盒子高度
            **/
           show:{
               type:Boolean,
               default:false
           },
            programmeList:{
                type:Array,
                default:()=>{
                    return []
                }
            },
        },
        methods: {
            // 不提交点击事件点击空白无法关闭弹窗
            closePullDown(){
                this.$emit("closePullDown")
            },
            openValue(){
                this.$emit("openValue")
            },
            getvalue(index,item){
                let obj = {
                    item:item,
                    index:index
                }
                this.$emit("getvalue",obj)
            }
        },
    }
</script>

<style lang="less" scoped>
  .divInput{

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
      right: 34px;
      top: 48%;
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
    }
    .list ul li:hover{
      background-color: #cccccc;
    }
  }


.Montmorillonite_layer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: rgba(0, 0, 0, 0);
}


</style>
