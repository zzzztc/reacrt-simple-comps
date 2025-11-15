# Form 表单

<code src="../../demo/Form.tsx"></code>
## Form 组件属性说明

### Form 组件属性 (FormProps)

| 属性名                    | 类型                     | 默认值         | 说明 |
|------------------------|------------------------|-------------|------|
| `gap`                  | `number`               | `16`        | 控件和控件之间的距离 |
| `toastError`           | `boolean`              | `undefined` | 字段没有通过验证时是否提示错误 |
| `scrollIntoErrorField` | `boolean`              | `undefined` | 是否平滑滚动到错误字段 |
| `layout`               | `vertical,horizontal`  | `'vertical'` | 表单排列方式 |
| `className`            | `string`               | `undefined` | 自定义类名 |
| `style`                | `React.CSSProperties`  | `undefined` | 自定义样式 |
| `cellProps`            | `CellProps`            | `undefined` | 传递给 Cell 组件的属性 |
| `requiredMark`         | `boolean`              | `undefined` | 是否显示星号，当 rules 包含 required 时默认为 true |

### FormItem 组件属性 (FormItemProps)

FormItem 组件继承了以下两个类型的属性：
- `FieldProps`: 来自 `rc-field-form/lib/Field` 的字段属性
- `CellProps`: 来自 `Cell` 组件的属性

### FormContext 上下文

通过 `FormContext` 可以在表单内传递以下配置：

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `requiredMark` | `boolean` | 是否显示必填星号标记 |
| `cellProps` | `CellProps` | 传递给 Cell 组件的默认属性 |

### 组件结构

- `<Form />`: 主表单组件
- `<Form.Item />`: 表单项组件，用于包装表单控件