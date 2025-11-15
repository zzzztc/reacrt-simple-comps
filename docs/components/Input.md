# Input 输入框

<code src="../../demo/Input.tsx"></code>
## Input 组件属性说明

### Props 属性

| 属性名 | 类型                                                                                                | 默认值 | 说明 |
|--------|---------------------------------------------------------------------------------------------------|--------|------|
| `readOnly` | `boolean`                                                                                         | `undefined` | 设置输入框为只读状态 |
| `disabled` | `boolean`                                                                                         | `undefined` | 禁用输入框 |
| `rows` | `number`                                                                                          | `undefined` | 多行文本的显示行数，设置后显示为 `textarea` |
| `value` | `string`                                                                                          | `undefined` | 输入框的值（受控模式） |
| `defaultValue` | `string`                                                                                          | `undefined` | 输入框的默认值（非受控模式） |
| `prefix` | `React.ReactNode`                                                                                 | `undefined` | input 左边的内容 |
| `suffix` | `React.ReactNode`                                                                                 | `undefined` | input 右边的内容 |
| `onChange` | `(value: string) => void`                                                                         | `undefined` | 值变化时触发的回调函数 |
| `onFocus` | `(e: FocusEvent) => void`                                                                          | `undefined` | focus 事件回调 |
| `onBlur` | `(e: FocusEvent) => void`                                                                           | `undefined` | blur 事件回调 |
| `mobile` | `boolean`                                                                                         | `undefined` | 无边框样式，适用于移动端 |
| `autoHeight` | `boolean`                                                                                         | `false` | textarea 是否高度自适应（受控模式生效） |
| `ime` | `boolean`                                                                                         | `false` | 处理 IME 输入法（受控模式生效） |
| `clearable` | `boolean`                                                                                         | `false` | 是否显示清除按钮 |
| `onClear` | `() => void`      | `undefined` | 点击清除按钮后触发的回调 |
| `onPressEnter` | `(value: string) => void` | `undefined` | 按下 Enter 键时的回调 |

### 继承属性

`Input` 组件还继承了以下原生 HTML 元素属性：

- `Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt>`: 除 `prefix`、`onChange`、`onFocus`、`onBlur` 外的所有 `input` 元素属性
- `Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt>`: 除 `prefix`、`onChange`、`onFocus`、`onBlur` 外的所有 `textarea` 元素属性

### 组件特性

- **自动切换模式**: 通过 `rows` 属性自动在 `input` 和 `textarea` 之间切换
- **前后缀支持**: 支持在输入框前后添加自定义内容
- **移动端适配**: 通过 `mobile` 属性提供无边框样式
- **增强功能**: 支持清除按钮、高度自适应、IME 输入法处理等特性
