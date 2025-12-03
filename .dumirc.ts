import { defineConfig } from 'dumi';
import * as path from 'path'; // 添加这一行引入path模块

// @ts-ignore
export default defineConfig({
  outputPath: 'docs-dist',
  base: '/react-simple-comps/',
  publicPath: '/react-simple-comps/',
  resolve: {
    entryFile: './src/index.ts', // 添加这一行配置
  },
  alias: {
    'react-simple-comps': path.resolve(__dirname, 'src'),
    '@': path.resolve(__dirname, 'src'),
  },
  apiParser: {
    unpkgHost: 'https://unpkg.zhimg.com',
  },
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
            // { title: '安装指南', link: '/guide/installation' },
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
            { title: 'AlertDialog 弹窗', link: '/components/Dialog' },
            { title: 'Drawer 抽屉', link: '/components/Drawer' },
            { title: 'Modal 模态窗', link: '/components/Modal' },
            { title: 'Toast 提示', link: '/components/Toast' },
            { title: 'Notify 提示', link: '/components/Notify' },
          ],
        },
        {
          title: '数据展示',
          children: [
            { title: 'Avatar 头像', link: '/components/Avatar' },
            { title: 'Badge 红标', link: '/components/Badge' },
            { title: 'ImageViewer 提示', link: '/components/ImageViewer' },
            { title: 'Slide 轮播图', link: '/components/Slide' },
          ],
        },
        {
          title: '数据录入',
          children: [
            { title: 'Form 表格', link: '/components/Form' },
            { title: 'Input 输入框', link: '/components/Input' },
            { title: 'InputNumber 数字输入框', link: '/components/Number' },
            {
              title: 'PasswordInput 密码输入框',
              link: '/components/PasswordInput',
            },
            { title: 'Checkbox 复选框', link: '/components/Checkbox' },
            { title: 'Checkbox 复选框组', link: '/components/CheckboxGroup' },
            { title: 'Radio 单选框', link: '/components/Radio' },
            { title: 'RadioGroup 单选组', link: '/components/RadioGroup' },
          ],
        },
        {
          title: '导航布局',
          children: [
            { title: 'Skeleton 骨架屏', link: '/components/Skeleton' },
            { title: 'Space 间距', link: '/components/Space' },
          ],
        },
      ],
    },
  },
});
