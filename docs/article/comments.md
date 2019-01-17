---
title: 关于评论
date: 2019-1-17 11:33:03
comments: true
categories: 博客相关
tags:
  - blog
  - vue
  - vuepress
---

## 关于评论的设置

```
修改头文件中的comments
true: 可以评论，false: 禁止评论
```

```

1. 安装 Valine
# Install leancloud's js-sdk
npm install leancloud-storage --save

# Install valine
npm install valine --save

```

```

2. 注册 vuepress 全局组件
创建 .vuepress/components/Valine.vue

<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')

    }

    new Valine({
      el: '#vcomments' ,
      appId: '',// your appId
      appKey: '', // your appKey
      notify:false,
      verify:false,
      avatar:'mm',
      placeholder: 'just go go'
    });
  },
}
</script>


```

```
3. 使用 Valine
只需要在 markdown 中调用即可

<Valine></Valine>
```

<Valine></Valine>
