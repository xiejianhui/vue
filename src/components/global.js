// 动态管理组件
import Vue from "vue";
// 常规写法
// import Child1 from "./child1";
// import Child2 from "./child2";

// Vue.use(Child1)
// Vue.use(Child2)

// 动态写法
// 首字母大写
function changeStr(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// 将字符串首字母大写 返回当前字符串 context('./', false, /\.vue$/)
// 1、当前路径
// 2、是否匹配子级
// 3、文件格式
const requireComponent = require.context('./', false, /\.vue$/)
// console.log('requireComponent.keys()', requireComponent.keys())

requireComponent.keys().forEach(_fileName => {
    // console.log("_fileName",_fileName)
    const config = requireComponent(_fileName);

    // console.log("_fileName.replace(/^\.\//, '')", _fileName.replace(/^\.\//, ''))
    // console.log("_fileName.replace(/^\.\//, '')", _fileName.replace(/\.\w+$/, ''))

    //筛选组件名称并且组件名称首字母大写 
    const componentName = changeStr(
        // _fileName.replace(/^\.\//, '')去掉 "./"
        // _fileName.replace(/\.\w+$/, '')去掉 ".vue"
        _fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

    )
    // console.log('componentName', componentName)

    // 注册组件
    // console.log('config.default', config.default)
    Vue.component(componentName, config.default || config)

});

