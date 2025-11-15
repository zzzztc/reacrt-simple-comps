# Space 间距

<code src="../../demo/Space.tsx"></code>
## Space 组件属性说明

### 组件属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `size` | `number | [number, number]` | `8` | 间距大小，可以是单个数字或包含水平和垂直间距的元组 |
| `direction` | `'horizontal' | 'vertical'` | `'horizontal'` | 排列方向 |
| `align` | `'center' | 'flex-start' | 'flex-end' | 'baseline'` | `undefined` | 交叉轴对齐方式 |
| `split` | `React.ReactNode` | `undefined` | 设置拆分节点 |
| `wrap` | `boolean` | `undefined` | 是否自动换行，仅在 `horizontal` 方向时有效 |
| ...`HTMLAttributes<HTMLDivElement>` | `React.HTMLAttributes<HTMLDivElement>` | - | 继承HTML div元素的所有原生属性 |
| ...`RefAttributes<HTMLDivElement>` | `React.RefAttributes<HTMLDivElement>` | - | React ref属性 |

### 组件特性

- **间距控制**: `size` 属性支持单一数值或 `[horizontal, vertical]` 元组形式
- **方向布局**: 支持水平(`horizontal`)和垂直(`vertical`)两种排列方向
- **对齐方式**: 提供多种交叉轴对齐选项
- **换行支持**: 在水平排列时可通过 `wrap` 属性控制是否自动换行
- **分割节点**: 可通过 `split` 属性在子元素间插入分隔符

### 使用示例

```
// 基础使用
<Space>
  <div>Item 1</div>
  <div>Item 2</div>
</Space>

// 垂直排列
<Space direction="vertical" size={16}>
  <div>Item 1</div>
  <div>Item 2</div>
</Space>

// 自定义间距
<Space size={[20, 10]}>
  <div>Item 1</div>
  <div>Item 2</div>
</Space>
```

