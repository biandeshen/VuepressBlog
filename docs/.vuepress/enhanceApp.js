// 应用程序级别的增强功能
// VuePress 应用是一个标准的 Vue 应用程序 
// 可以通过创建一个 .vuepress/enhanceApp.js 文件，来使用应用程序级别的增强功能
// 如果此文件存在，该文件将会被导入到该应用程序中
// 该文件应该通过 export default 方式导出一个钩子函数，它将接收一个含有一些应用程序级别值的对象作为参数
// 可以使用这个钩子来安装额外的 Vue 插件，注册全局组件，或者添加额外的路由钩子

// // eg: 全局注册 Element 组件库
// import Vue from 'vue'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


// export default ({
//     Vue, // 当前 VuePress 应用所使用的 Vue 版本
//     options, // 根 Vue 实例的选项
//     router, // 应用程序的路由实例
//     siteData // 网站元数据
//   }) => {
//     // ...使用应用程序级别的增强功能
//     Vue.use(Element)
//   }



export default ({
    Vue, // 当前 VuePress 应用所使用的 Vue 版本
    options, // 根 Vue 实例的选项
    router, // 应用程序的路由实例
    siteData // 网站元数据
  }) => {
    // ...使用应用程序级别的增强功能
    
  }