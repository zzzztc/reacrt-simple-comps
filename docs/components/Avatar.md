# Avatar 头像

<code src="../../demo/Avatar.tsx"></code>
## Avatar 组件属性说明

### Props 属性

| 属性名 | 类型                                   | 默认值 | 说明 |
|--------|--------------------------------------|--------|------|
| `size` | `number`                             | `40` | 头像尺寸 |
| `shape` | `circle,square`                      | `circle` | 头像形状 |

### 组件特性

- **默认图标**: 当未提供 `children` 时，自动显示默认头像图标 `<Icon type="uc-icon-avatar" />`
- **形状样式**:
    - `circle`: 圆形头像（border-radius: 50%）
    - `square`: 方形头像（border-radius: 2px）
- **尺寸控制**: 通过 `size` 属性同时控制宽度、高度和字体大小


