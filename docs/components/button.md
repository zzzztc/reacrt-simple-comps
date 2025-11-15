# Button 按钮

<code src="../../demo/Button.tsx"></code>

## Button 组件属性说明

### 基础属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `type` | `primary` | `default`  | 按钮类型 |
| `children` | `React.ReactNode` | `undefined` | 按钮内容 |
| `icon` | `React.ReactNode` | `undefined` | 设置按钮的图标组件 |

### 样式属性

| 属性名       | 类型 | 默认值 | 说明 |
|-----------|------|--------|------|
| `outlined` | `boolean` | `undefined` | 主题色线框风格 |
| `disabled` | `boolean` | `undefined` | 禁用状态 |
| `block`   | `boolean` | `undefined` | 块级按钮 |
| `circle`    | `boolean` | `undefined` | 圆形按钮 |
| `dashed`  | `boolean` | `undefined` | 虚线边框 |
| `danger`  | `boolean` | `undefined` | 危险按钮样式 |
| `ghost`   | `boolean` | `undefined` | 幽灵按钮样式 |

### 功能属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `loading` | `boolean` | `undefined` | 设置按钮加载状态 |
| `wait` | `number` | `undefined` | 点击后下次能点击的时间间隔，防止重复点击。如果是 `true`，间隔默认是 1s |

