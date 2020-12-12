// 顶部导航栏
const nav = require('./components/nav/nav')
// 左侧导航栏
const sidebar = require('./components/nav/sidebar')

module.exports = {
  title: '小天才宝爷的个人博客',
  description: '在下宝爷，只想做个好人',
  // 部署到GiyHub的配置，base必须和库名一致！
  base: '/unwillingOrdinary/',
  // run build（打包）后的文件路径
  dest: './dist',
  // 端口
  port: '8090',
  // 头部链接
  head: [
    // 搜索关键词
    ['meta', { name: 'Keywords', content: '小天才宝爷的个人博客' }],
    // 作者
    ['meta', { name: 'author', content: '小天才宝爷' }],
    // 网页小logo
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    // 移动端优化:搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 样式
    ['link', {rel: 'stylesheet', href: '/css/base.css'}],
    // js文件
    ['script', { charset: "utf-8", src: "/js/console.js" }]
  ],
  // 代码显示行号
  markdown: {
    lineNumbers: true
  },
  // 选择主题reco,使用依赖包主题,vuepress-theme-xxx的为官方主题，配置时可以将前面的去掉，只写xxx
  theme: 'reco',
  // 主题配置
  themeConfig: {
    type: 'blog',

    /* 导航栏设置 */
    // 顶部导航条
    nav,
    // 顶部导航栏左上角 logo
    logo: "/img/logo.jpg",
    // 侧边导航条
    sidebar,
    // 在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    subSidebar: 'auto',
    // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    sidebarDepth: 2,
    // 导航分类
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类'     // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'     // 默认文案 “标签”
      }
    },

    /* 主页右侧信息 */
    // 设置全局作者姓名
    author: '小天才宝爷',
    // 设置首页右侧信息栏头像
    authorAvatar: '/img/logo.jpg',
    // 友情链接
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
    ],
    // 社交图标，显示于博主信息栏和页脚栏
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:643027860@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://blog.csdn.net/m0_46627730?spm=1000.2115.3001.5113',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    /*备案信息：*/
    // ICP 备案文案及链接
    record: '粤ICP备2020087871号',
    recordLink: 'https://beian.miit.gov.cn/',
    // 公安部备案文案及链接
    cyberSecurityRecord: '粤ICP备2020087871号',
    cyberSecurityLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间，只填写年份
    startYear: '2020',

    /* 文章加密 */
    keyPage: {
      // 1.3.0 版本后需要设置为密文
      keys: ['168dc8b1e253db14d33c02391e0fc8b3'],
      // 登录页动画球的颜色
      color: '#42b983',
      // 登录页动画线的颜色
      lineColor: '#42b983'
    },

    // 搜索结果显示最大数
    searchMaxSuggestoins: 10,
    // 上/下一篇链接
    nextLinks: false,
    prevLinks: false,
    serviceWorker: {
      updatePopup: {
        message: '有新的内容.',
        buttonText: '更新'
      }
    },
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    lastUpdated: '最近更新',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 是否显示模式调节按钮，默认 true，
    modePicker: true,
    // auto 跟随系统，dark 暗色模式，light 亮色模式，默认 auto，
    mode: 'auto'
  },
  // 插件配置
  plugins: [
    // 页面滚动时自动激活侧边栏链接的插件
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],
    // 自动显示文章最近更新的时间
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    // 代码块复制按钮
    [
      'vuepress-plugin-code-copy',
      {
        // 这是复制按钮组件将附加到的CSS选择器。div[class*="language-"] pre
        selector: 'div[class*="language-"] pre',
        // 此选项描述复制按钮组件的垂直位置以及 successText，默认： bottom，支持的选项：top和bottom
        align: 'bottom',
        // 这将设置复制按钮的颜色，并且可以采用任何十六进制代码。默认： #27b1ff
        color: '#27b1ff',
        // 当用户按下复制按钮时，启用附加代码块的背景过渡动画。默认： true
        backgroundTransition: true,
        // 这将设置背景过渡动画的颜色，并且可以采用任何十六进制代码。默认： #0075b8
        backgroundColor: '#0075b8',
        // 设置用户按下复制按钮时显示的文本
        successText: '复制成功'
      },
    ],
    // 放大图片
    [
      'vuepress-plugin-zooming',
      {
        // 排除class是no-zoom的图片
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    // 集成第三方搜索引擎,配置插件vuepress-plugin-thirdparty-search
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            // 在搜索结果显示的文字
            title: "在百度中搜索",
            // 搜索链接的前面部分
            frontUrl: "https://www.baidu.com/s?wd=",
            // 搜索链接的后面部分，可选，默认 ''
            behindUrl: ""
          },
          {
            title: "在360中搜索",
            frontUrl: "https://www.so.com/s?q="
          },
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=',
          },
          {
            title: "在谷歌中搜索",
            frontUrl: "https://www.google.com.hk/search?q="
          }
        ]
      }
    ],
    // 分享功能:@ikangxu/vuepress-plugin-share/vuepress-plugin-social-share
    // [
    //   '@ikangxu/vuepress-plugin-share',
    //   {
    //     // supports: ['qq-qzone', 'renren', 'douban', 'sina-weibo', 'wechat', 'tieba-baidu', 'qq']
    //     supports: ['qq-qzone', 'wechat']
    //   }
    // ]
    [
      'social-share',
      {
        networks: ['qq', 'weibo', 'douban', 'email'],
        email: 'ntnyq13@gmail.com',
        extendsNetworks: {
          pinterest: {
            sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
            type: 'popup',
            icon: '/pinterest.png',
          },
          linkedin: {
            sharer:
              'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
            type: 'popup',
            color: '#1786b1',
            icon:
              '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
          },
          qq: {
            color: '#E9201F'
          },
          weibo: {
            color: '#E6172D'
          },
          douban: {
            color: '#00B51D'
          },
          email: {
            color: '#D4237A'
          },
        }
      },
    ],
    // 在标签栏当时选中和离开页面时会有变化
    [
      "dynamic-title",
      {
        showIcon: "/img/logo.jpg",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/img/logo.jpg",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    // 看板娘
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['shizuku', 'miku', 'koharu', 'z16'],
        messages: {
          welcome: '欢迎光临',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        }
      }
    ],
    // 鼠标点击样式
    [
      "cursor-effects",
      {
        size: 2,
        shape: 'star',
        zIndex: 999999999
      }
    ],
    // 背景丝带
    [
      "ribbon",
      {
        size: 50,
        opacity: 0.3,
        zIndex: -1
      }
    ],
    // 平滑滚动
    ['vuepress-plugin-smooth-scroll'],
    // 阅读进度条
    ['reading-progress'],
    // 加载进度条
    ['@vuepress/nprogress'],
    // 分页
    ['@vuepress-reco/vuepress-plugin-pagation'],
    // 音乐播放
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {name: '光年之外',artist: '邓紫棋',url: 'http://localhost:8090/music/光年之外-邓紫棋.mp3',cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001mTkmb4GJlh4_1.jpg?max_age=2592000'},
          {name: '爱，存在',artist: '林小柯',url: 'http://localhost:8090/music/爱,存在-林小柯.mp3',cover: 'https://y.gtimg.cn/music/photo_new/T001R150x150M000002EAAXG3QpAUO.jpg?max_age=2592000'},
          {name: '迷失幻境',artist: '范茹',url: 'http://localhost:8090/music/迷失幻境-范茹.mp3',cover: 'https://y.gtimg.cn/music/photo_new/T001R150x150M000003MclBy2c2sI0.jpg?max_age=2592000'},
          {name: 'Faster Than Light',artist: 'Andreas Waldetoft',url: 'http://localhost:8090/music/Faster Than Light.mp3',cover: 'https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg'},
          {name: '晴天',artist: '周杰伦',url: 'http://localhost:8090/music/晴天-周杰伦.mp3',cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000'},
          {name: '蓝莲花',artist: '许巍',url: 'http://localhost:8090/music/蓝莲花-许巍.mp3',cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003GDQSA1c4k5T_1.jpg?max_age=2592000'},
          {name: '你不是真正的快乐',artist: '五月天',url: 'http://localhost:8090/music/music/你不是真正的快乐-五月天.mp3',cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000020I7sO0ayXhN_1.jpg?max_age=2592000'}
        ],
      },
    ],
    // pwa：@vuepress/plugin-pwa --save
    [
      '@vuepress/plugin-pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    // 公告：@vuepress-yard/vuepress-plugin-window --save
    [
      '@vuepress-yard/vuepress-plugin-window',
       {
        title: "小天才宝爷の公告",
        contentInfo: {
          title: "欢迎来到小天才乐园 🎉🎉🎉",
          needImg: true,
          imgUrl: "http://localhost:8090/img/logo.jpg",
          content: "愿各位每天都能再开心一点\n",
          contentStyle: "愿各位每天都能再开心一点,在充实一点。人生很长，在充实自己的道路上也不要忘记观看下路边美丽的风景呦"
        },
        bottomInfo: {
          btnText: '关于',
          linkTo: 'https://blog.csdn.net/m0_46627730?spm=1000.2115.3001.5113'
        },
        closeOnce: true
      }
    ]
  ]
  // plugins: [
  //
  //   [
  //     'thirdparty-search',
  //     {
  //       // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  //       thirdparty: [
  //         // 可选，默认 []
  //         {
  //           title: '在MDN中搜索',
  //           frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
  //           behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
  //         },
  //         {
  //           title: '在Runoob中搜索',
  //           frontUrl: 'https://www.runoob.com/?s=',
  //         },
  //         {
  //           title: '在Vue API中搜索',
  //           frontUrl: 'https://cn.vuejs.org/v2/api/#',
  //         },
  //         {
  //           title: '在Bing中搜索',
  //           frontUrl: 'https://cn.bing.com/search?q=',
  //         },
  //         {
  //           title: '通过百度搜索本站的',
  //           frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
  //         },
  //       ],
  //     },
  //   ],
  //
  //   'vuepress-plugin-baidu-autopush', // 百度自动推送
  //

  //   [
  //     'demo-block',
  //     {
  //       // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
  //       settings: {
  //         // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
  //         // cssLib: ['http://xxx'], // 在线示例中的css依赖
  //         // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
  //         jsfiddle: false, // 是否显示 jsfiddle 链接
  //         codepen: true, // 是否显示 codepen 链接
  //         horizontal: false, // 是否展示为横向样式
  //       },
  //     },
  //   ],
  //   [
  //     'vuepress-plugin-baidu-tongji', // 百度统计
  //     {
  //       hm: '503f098e7e5b3a5b5d8c5fc2938af002',
  //     },
  //   ],
  //   [
  //     'vuepress-plugin-comment', // 评论
  //     // {
  //     //   choosen: 'valine',
  //     //   options: {
  //     //     el: '#valine-vuepress-comment',
  //     //     appId: 'qnS1jobNF7CROIQ0XYWBnVOH-gzGzoHsz',
  //     //     appKey: 'LIKa0ePqFMkglQfOkN0JNK6c',
  //     //     avatar: 'monsterid'
  //     //   }
  //     // },
  //     {
  //       choosen: 'gitalk',
  //       options: {
  //         clientID: 'a6e1355287947096b88b',
  //         clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
  //         repo: 'blog-gitalk-comment', // GitHub 仓库
  //         owner: 'xugaoyi', // GitHub仓库所有者
  //         admin: ['xugaoyi'], // 对仓库有写权限的人
  //         // distractionFreeMode: true,
  //         pagerDirection: 'last', // 'first'正序 | 'last'倒序
  //         id:
  //           '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
  //         title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
  //         labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
  //         body:
  //           '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
  //       },
  //     },
  //   ],
  // ],
}

