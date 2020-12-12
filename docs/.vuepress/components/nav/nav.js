module.exports = [
  {
    text: '首页', link: '/', icon: 'reco-home'
  },
  {
    text: '前端知识',
    icon: 'reco-eye',
    items: [
      {
        text: 'vue',
        items: [
          {text: 'vue-cli', link: '/frontEnd/vue/vue-cli/'},
          {text: 'vue-router', link: '/frontEnd/vue/vue-router/'},
        ]
      },
      {text: 'vuepress', link: '/frontEnd/vuepress/'},
    ]
  },
  {
    text: '博客', link: 'https://blog.csdn.net/m0_46627730?spm=1000.2115.3001.5113', icon: 'reco-blog'
  },
  {
    text: '时间线', link: '/timeLine/', icon: 'reco-date'
  },
  {
    text: '收藏', link: '/enshrine/', icon: 'reco-other'
  },
  {
    text: '工具箱',
    icon: 'reco-suggestion',
    items: [
      {
        text: '在线编辑',
        items: [
          {text: '图片压缩', link: 'https://tinypng.com/'},
          {text: '在线Ps', link: 'https://www.uupoop.com/'}
        ]
      },
      {
        text: '在线服务',
        items: [
          {text: '阿里云', link: 'https://www.aliyun.com/'},
          {text: '腾讯云', link: 'https://cloud.tencent.com/'}
        ]
      }
    ]
  }
]
