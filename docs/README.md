---
home: true
heroImage: /img/persion.jpg
actionText: 进入博客 →
actionLink: /technical/
features:
  - title: 简明优先
    details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
  - title: Vue 驱动
    details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
  - title: 性能高效
    details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

---

# 所有文章

<div style="display: flex; flex-direction: column">
    <div v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" style="padding: 20px 0; max-width: 33%;">
        <router-link :to="page.path">
            {{page.title}}
            <div style="color: #c2c5cd; font-size: .5rem;">{{(page.frontmatter.tags || ['无标签']).join(',  ')}}</div>
        </router-link>
    </div>
</div>
---

# This is my Vuepress blog

```
1. 修改网站信息,即/docs/config.js 中,对应的注释下的内容
2. 修改public中的图片logo等
3. 修改manifest.json中的信息
4. 配置主题 安装了主题 npm install vuepress-theme-reco -dev--save
5. 修改config.js中的theme 为'reco'
6. 配置脚本 deploy.sh
7. npm run deploy 即可自动构建部署到github上
```
