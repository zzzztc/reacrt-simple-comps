## 🚀 快速开始指南

### 📦 安装组件库

使用 npm 安装：

```bash
npm install react-simple-comps
```


或使用 yarn：

```bash
yarn add react-simple-comps
```


### ⚡ 基础使用

#### 1. 导入组件

```js
import { Button, Input } from 'react-simple-comps';
```


#### 2. 在项目中使用

```js
import React from 'react';
import { Button, Input } from 'react-simple-comps';

const App = () => {
  return (
    <div>
      <Input placeholder="请输入内容" />
      <Button type="primary" onClick={() => console.log('clicked')}>
        点击按钮
      </Button>
    </div>
  );
};

export default App;
```


### 🎯 按需导入

为了减小打包体积，建议使用按需导入：

```js
import {Button} from 'react-simple-comps';
import {Input} from 'react-simple-comps';
```


### 📘 TypeScript 支持

本组件库完全使用 TypeScript 开发，提供完整的类型定义文件，无需额外配置即可在 TypeScript 项目中使用。

### 🌐 浏览器兼容性

组件库支持现代主流浏览器：
- Chrome
- Firefox
- Safari
- Edge

### 🎨 主题定制

[//]: # (组件库支持通过 CSS Variables 进行主题定制，详情请参考[主题定制文档]&#40;/guide/theme&#41;。)

### 📚 更多示例

请查看我们的[组件示例](/components)页面，了解各个组件的详细用法和效果。