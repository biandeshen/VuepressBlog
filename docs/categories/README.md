### 如何在博客中添加分类
```
### 添加分类
1. 在导航栏顶部添加一个分类的下拉按钮，需要进行如下设置
// 修改 /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '分类', 
        items: [
          { text: '前端', link: '/categories/frontEnd' },
          { text: '后端', link: '/categories/backEnd' }
        ]
      }
    ]
  }  
}

```

```

2. 添加前端和后端的分类所需要的文件
/docs/categories/frontEnd.md
--- 
title: 前端  
isCategories: true  
sidebar: false  
---

## 前端

/docs/categories/backEnd.md
---
title: 后端
isCategories: true
sidebar: false
---

## 后端

```

---

>为什么设置sidebar: false，因为启用分类功能，那就跟自定义侧边栏功能有些冲突了，
所以全局开启了自动生成侧边栏功能，然后在这种不需要侧标兰的地方关闭

---


```
3. 写文章时添加分类

---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28 23:39:45
categories: frontEnd
---

```