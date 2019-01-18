@echo off
:: 声明采用UTF-8编码
chcp 65001

:: 构建
call npm run docs:build


:: 如果你是要部署到自定义域名
::  echo 'www.example.com' > CNAME



:: 如果你想要部署到 https://<USERNAME>.github.io
:: 以下的格式为通过SSH推送
:: git push -f git@github.com:<biandeshen>/<biandeshen>.github.io.git master

:: 以下的格式为正常格式，直接复制git仓库的链接替换下面链接即可
:: 初始化git
git init
git add -A
set/p commit1=输入开发项目commit信息:
git commit -m %commit1%
git push https://github.com/biandeshen/VuepressBlog.git master

:: 进入到构建输出目录
cd ./dist

::  初始化git
git init
git add -A
set/p commit2=输入发布项目commit信息:
git commit -m %commit2%


:: 如果你想要发布到 https://<USERNAME>.github.io/<REPO>
:: 以下的格式为通过SSH推送
:: git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

:: 以下的格式为正常格式，直接复制git仓库的链接替换下面链接即可，注意展示时选用gh-pages分支
git push -f https://github.com/biandeshen/VuepressBlog.git master:gh-pages

cd ..


