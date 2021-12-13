const { resolve } = require('path')

module.exports = {
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vite vui' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: 'Vite vui',
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'thoughts-ui'
    [`thoughts-ui`]: resolve('./packages/thoughts-ui/index.ts')
  },
  base: '/thought-ui-docs/',
  themeConfig: {
    search: true,
    sidebar: {
      '/': [
        {
          text: 'vui',
          children: [
            { text: '介绍', link: '/' },
            { text: '日志', link: '/components/log' },
            { text: 'VirtualScroll', link: '/components/virtual-scroll' },
            { text: 'Layout', link: '/components/layout/' },
            { text: 'contextmenu', link: '/components/contextmenu/' },
          ],
        },
        {
          text: 'vuu',
          children: [
            { text: '介绍', link: '/vuu/' },
            { text: '日志', link: '/vuu/log' },
            { text: '某个功能', link: '/vuu/any' },
          ],
        },
      ],
    },
    author: 'bhabgs',
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/tags' },
    ],
  },
  dest: 'public',
};

