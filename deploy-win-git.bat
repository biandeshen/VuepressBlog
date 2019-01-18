goto start1
REM 如果你是要部署到自定义域名
REM echo 'www.example.com' > CNAME
:start1

goto start2
REM 如果你想要部署到 https://<USERNAME>.github.io
REM 以下的格式为通过SSH推送
REM git push -f git@github.com:<biandeshen>/<biandeshen>.github.io.git master
:start2
REM 以下的格式为正常格式，直接复制git仓库的链接替换下面链接即可
git push https://github.com/biandeshen/VuepressBlog.git master

REM 进入到构建输出目录
cd ./dist

REM 初始化git
git init
git add -A
git commit -m 'deploy'

goto start3
REM 如果你想要发布到 https://<USERNAME>.github.io/<REPO>
REM 以下的格式为通过SSH推送
REM git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
:start3
REM 以下的格式为正常格式，直接复制git仓库的链接替换下面链接即可，注意展示时选用gh-pages分支
git push -f https://github.com/biandeshen/VuepressBlog.git master:gh-pages

cd ..