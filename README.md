<!-- eg: 显示所有的文章 -->

<!-- # 所有文章

<div style="display: flex; flex-direction: column">
    <div v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" style="padding: 20px 0; max-width: 33%;">
        <router-link :to="page.path">
            {{page.title}}
            <div style="color: #c2c5cd; font-size: .5rem;">{{(page.frontmatter.tags || ['无标签']).join(',  ')}}</div>
        </router-link>
    </div>
</div> -->

# This is my Vuepress blog

```
安装依赖 npm install
1. 修改网站信息,即/docs/config.js 中,对应的注释下的内容
2. 修改public中的图片logo等
3. 修改manifest.json中的信息
4. 配置主题 安装了主题 npm install vuepress-theme-reco -dev--save
5. 修改config.js中的theme 为'reco'
6. 配置脚本 deploy.sh
7. npm run deploy 即可自动构建部署到github上
```
