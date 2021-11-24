const base = process.env.NODE_ENV === 'production' ? '/thoughts-ui' : '';
const { resolve } = require('path');

module.exports = {
  title: 'thoughts-ui',
  description: '业务组件积累',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['packages'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'thoughts-ui'
    [`thoughts-ui`]: resolve('./packages/thoughts-ui/index.ts'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'thoughts-ui',
        description: '业务组件积累',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/' },
          { text: 'Select', link: '/components/select/' }
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'thoughts-ui',
        description: '业务组件积累',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          { text: 'Select', link: '/en/components/select/' }
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'dairan103@gmail.com/thoughts-ui',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  }
};
