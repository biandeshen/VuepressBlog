<!-- eg: 显示所有的文章 -->
# 所有文章
<div style="display: flex; flex-direction: column">
    <div v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" style="padding: 20px 0; max-width: 33%;">
        <router-link :to="page.path">
            {{page.title}}
            <div style="color: #c2c5cd; font-size: .5rem;">{{(page.frontmatter.tags || ['无标签']).join(',  ')}}</div>
        </router-link>
    </div>
</div>

# This is my Vuepress blog


```
1. 修改网站信息,即/docs/config.js 中,对应的注释下的内容
2. 配置脚本 deploy.sh
3. npm run deploy 即可自动构建部署到github上 
```