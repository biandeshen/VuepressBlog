(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{200:function(n,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"content"},[this._m(0),this._v(" "),this._m(1),this._m(2),this._m(3),this._m(4),e("Valine")],1)},[function(){var n=this.$createElement,e=this._self._c||n;return e("h2",{attrs:{id:"关于评论的设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于评论的设置","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于评论的设置")])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("修改头文件中的comments\ntrue: 可以评论，false: 禁止评论\n")])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n1. 安装 Valine\n# Install leancloud's js-sdk\nnpm install leancloud-storage --save\n\n# Install valine\nnpm install valine --save\n\n")])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n2. 注册 vuepress 全局组件\n创建 .vuepress/components/Valine.vue\n\n<template>\n  <div id=\"vcomments\"></div>\n</template>\n\n<script>\nexport default {\n  name: 'Valine',\n  mounted: function(){\n    // require window\n    const Valine = require('valine');\n    if (typeof window !== 'undefined') {\n      this.window = window\n      window.AV = require('leancloud-storage')\n\n    }\n\n    new Valine({\n      el: '#vcomments' ,\n      appId: '',// your appId\n      appKey: '', // your appKey\n      notify:false,\n      verify:false,\n      avatar:'mm',\n      placeholder: 'just go go'\n    });\n  },\n}\n<\/script>\n\n\n")])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("3. 使用 Valine\n只需要在 markdown 中调用即可\n\n<Valine></Valine>\n")])])])}],!1,null,null,null);s.options.__file="comments.md";e.default=s.exports}}]);