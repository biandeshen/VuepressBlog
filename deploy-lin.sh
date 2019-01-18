#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run docs:build

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

# 如果你想要部署到 https://<USERNAME>.github.io
# 以下的格式为通过SSH推送
# git push -f git@github.com:<biandeshen>/<biandeshen>.github.io.git master
# 以下的格式为正常格式，直接复制git仓库的链接替换下面链接即可
git push https://github.com/biandeshen/VuepressBlog.git master

# 进入到构建输出目录
cd /dist

git init
git add -A
git commit -m 'deploy'

# 如果你想要发布到 https://<USERNAME>.github.io/<REPO>
# 以下的格式为通过SSH推送
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# 以下的格式为正常格式，直接复制git仓库的链接替换下面链接即可，注意展示时选用gh-pages分支
git push -f https://github.com/biandeshen/VuepressBlog.git master:gh-pages

cd -