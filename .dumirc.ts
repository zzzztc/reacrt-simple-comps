import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-simple-comps',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components' }, // components会默认自动对应到src文件夹
    ],
    sidebar: {
      // 为不同路由路径配置不同的侧边栏
      '/guide': [
        {
          title: '开始使用',
          children: [
            { title: '快速开始', link: '/guide/quick-start' },
            { title: '安装指南', link: '/guide/installation' },
          ],
        },
      ],
      '/components': [
        {
          title: '基础组件',
          children: [
            { title: 'Foo', link: '/components/Foo' },
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Icon 图标', link: '/components/icon' },
          ],
        },
        {
          title: '数据展示',
          children: [
            { title: 'Avatar', link: '/components/Avatar' },
            { title: 'Badge', link: '/components/Badge' },
          ],
        },
        {
          title: '数据录入',
          children: [
            { title: 'Form', link: '/components/Form' },
            { title: 'Input', link: '/components/Input' },
          ],
        },
      ],
    },
  },
});
