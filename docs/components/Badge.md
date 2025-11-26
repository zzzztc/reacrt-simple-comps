# Badge 徽标

<code src="../../demo/Badge.tsx"></code>

## Badge 组件属性说明

### 基础属性

| 属性名     | 类型              | 默认值      | 说明                         |
| ---------- | ----------------- | ----------- | ---------------------------- |
| `content`  | `React.ReactNode` | `undefined` | 徽标内容，没有内容则显示圆点 |
| `children` | `React.ReactNode` | `undefined` | 子元素，被标记的组件或文本   |

### 样式属性

| 属性名       | 类型                  | 默认值      | 说明           |
| ------------ | --------------------- | ----------- | -------------- |
| `color`      | `string`              | `undefined` | 徽标背景色     |
| `badgeStyle` | `React.CSSProperties` | `undefined` | 自定义徽标样式 |
| `className`  | `string`              | `undefined` | 自定义类名     |

### 功能特性

- **内容自适应**：根据 `content` 属性值自动切换显示模式
  - 有内容时显示具体内容
  - 无内容时显示圆点样式
- **位置自适应**：
  - 有 `children` 时徽标绝对定位在右上角
  - 无 `children` 时徽标静态显示
- **样式定制**：支持通过 `badgeStyle` 和 `color` 属性自定义外观

### CSS 类名

- `rsc-badge`：组件根元素默认类名
- `badge`：徽标元素基础类名
- `dot`：圆点样式类名（当无 `content` 时应用）
- `without-children`：无子元素时的徽标样式类名
