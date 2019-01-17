// 网站信息 config.js的主要配置包括网站的标题、描述等基本信息，以及主题的配置
module.exports = {
    //标题
    title: '彼岸的神的博客',
    //描述
    description: '站在高处的石头，就是星辰!',
    // 主题
    theme: 'reco',
    // 设置输出目录
    // dest: '/',
    //根路径
    base: '/',
    //主机地址
    host: '127.0.0.1',
    //端口号
    port: 8081,
    //head：额外的需要被注入到当前页面的HTML"head"中的标签，其中路径的"/"就是public资源目录。
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/logo.ico'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        //在移动端，搜索框获取焦点时会放大，在失去焦点后可以左右滚动，可以通过设置meta这样优化
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
    ],
    // valine配置 评论配置 暂时无用，修改配置需要到Valine.vue中
    valineConfig: {
        appId: 'YSfyTlN40jpWaDtGbx6nK85d-gzGzoHsz', // your appId
        appKey: 'LwUp1UR1uEQLYEHi9yjmpy2x', // your appKey
    },
    // 如果你想要列表中的标签被点击跳转，请把 tagClick 设置为 true.
    tagClick: true,
    //主题配置
    themeConfig: {
        //gitc 仓库地址
        repo: 'https://github.com/biandeshen',
        // 导航栏 此配置主要用于配置导航栏的链接，
        // 导航是一个下拉列表，可以通过 items 属性来设置
        // 例如以上主页的link为"/"，默认是根目录下的README.md。
        // /technical/链接到根目录docs下的technical文件夹下的README.md文件
        nav: [{
                text: 'Home',
                link: '/',
            },
            {
                text: '技术博客',
                link: '/technical/Java/'
            },
            {
                text: '个人文章',
                link: '/article/'
            },
            {
                text: '分类',
                items: [{
                        text: '前端',
                        link: '/categories/frontEnd'
                    },
                    {
                        text: '后端',
                        link: '/categories/backEnd'
                    },
                    {
                        text: '博客相关',
                        link: '/categories/blog'
                    },
                ]
            },
            {
                text: 'Tags',
                link: '/tags/',
            },
            {
                text: 'About',
                link: '/about/',
            },
            // 下拉列表的配置
            {
                text: 'Languages',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese'
                    },
                    {
                        text: 'English',
                        link: '/language/English'
                    }
                ]
            }
        ],
        // 1. 多级目录的侧边栏，我们需要用使用对象描述的写法
        // 侧边栏配置，你可以省略.md拓展名，同时以/结尾的路径将会被视为 */README.md。
        sidebar: {
            '/docs/technical/前端/VUE/': genSidebarConfig("VUE"),
            '/docs/technical/前端/CSS/': genSidebarConfig("CSS"),
            '/docs/technical/前端/JavaScript/': genSidebarConfig("JavaScript"),
            // "/web/": [
            //     "",
            //     "web1",
            // ],
            // "/docs/test/": [
            //     "",
            //     "test1"
            // ],
            '/': [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                // "apiword", //根目录创建 apiword.md文件 
                // "api", //根目录创建 api.md文件 
                // "error" //根目录创建 error.md文件
            ]
        },


        //2. 侧边栏分组(可以用来做博客文章分类) collapsable是当前分组是否展开
        // sidebar: [{
        //         title: 'VUE',
        //         collapsable: true,
        //         children: [
        //             '/docs/technical/前端/VUE/',
        //         ]
        //     },
        //     {
        //         // 侧边栏名称
        //         title: 'JavaScript',
        //         // 可折叠
        //         collapsable: true,
        //         // 你的md文件地址
        //         children: [
        //             '/docs/technical/前端/JavaScript/',
        //         ]
        //     },
        //     {
        //         title: 'CSS',
        //         collapsable: true,
        //         children: [
        //             '/docs/technical/前端/CSS/',
        //         ]
        //     },
        // ],

        // 这是嵌套标题链接深度，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
        sidebarDepth: 2,
        // 最后更新时间。 string | boolean
        lastUpdated: 'Last Updated',

        //搜索
        search: true,
        //搜索最大建议数
        searchMaxSuggestions: 10,

        // 1.支持PWA配置，需要在基本配置中开启serviceWorker
        // 2.config.js配置中添加manifest.json，由于iphone11.3不支持manifest的图标，
        // 所以加上apple-touch-icon图标配置即可
        serviceWorker: true,
    }
}
// 可以省略.md扩展名,同时以 / 结尾的路径将会被视为 */README.md
function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            '/',
            'html-standard',
            'css-standard',
            'js-standard',
            'git-standard'
        ]
    }]
}