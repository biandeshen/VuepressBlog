---
isTags: true
sidebar: false
---

# 如何在博客中添加标签云功能
## 标签墙

```
### 添加标签云功能

---
如果你想要列表中的标签被点击跳转，请把 tagClick 设置为 true.
tagClick: true,
---

1. 在顶部导航添加一个按钮
// 修改 /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Tags', link: '/tags/' }
    ]
  }    
}

```

```
2.添加所需要的文件

/docs/tags/README.md

---
isTags: true
sidebar: false
---

## 标签墙
```

```
3. 写文章时添加标签

---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28 23:39:45  
tags:
- vue
- webpack
---

```

