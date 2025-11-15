# InputNumber 数字输入框

<code src="../../demo/InputNumber.tsx"></code>

## InputNumber 组件属性说明

### Props 属性

| 属性名 | 类型                                                                                         | 默认值 | 说明 |
|--------|--------------------------------------------------------------------------------------------|--------|------|
| `disabled` | `boolean`                                                                                  | `undefined` | 禁用数字输入框 |
| `value` | `String,Number` | `undefined` | 输入框的值（受控模式） |
| `defaultValue` | `String,Number`                                                                            | `undefined` | 输入框的默认值（非受控模式） |
| `onChange` | `(value: StringOrNumber) => void`                                                          | `undefined` | 值变化时触发的回调函数 |
| `min` | `number`                                                                                   | `undefined` | 最小值限制 |
| `max` | `number`                                                                                   | `undefined` | 最大值限制 |
| `digits` | `number`                                                                                   | `0` | 小数位数 |
| `prefix` | `React.ReactNode`                                                                          | `undefined` | input 左边的内容 |
| `suffix` | `React.ReactNode`                                                                          | `undefined` | input 右边的内容 |
| `clearable` | `boolean`                                                                                  | `false` | 是否显示清除按钮 |
| `onClear` | `() => void`                                                                               | `undefined` | 点击清除按钮后触发的回调 |
| `onPressEnter` | `(v: string) => void`                                                                      | `undefined` | 按下 Enter 键时的回调 |


