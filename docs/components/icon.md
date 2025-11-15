# Icon 图标

<code src="../../demo/Icon.tsx"></code>
## Icon 组件属性说明

### 组件属性

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `type` | `string` | 图标类型 |
### 静态方法

- loadFromIconfontCN(scriptUrl: string: 从 Iconfont CN 加载图标字体资源

### 使用示例

```
// 基础使用
<Icon type="success" />

// 带额外属性
<Icon type="loading" className="custom-icon" style={{ color: 'red' }} />

// 加载在线图标字体
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_xxxxx.js');
```

