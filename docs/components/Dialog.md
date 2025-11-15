# Dialog 弹窗

<code src="../../demo/AlertDialog.tsx"></code>
## AlertDialog 组件属性

### Props（组件属性）

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|-------|------|
| `visible` | `boolean` | `undefined` | 是否显示弹窗 |
| `title` | `React.ReactNode` | `undefined` | 弹窗标题 |
| `content` | `React.ReactNode` | `undefined` | 弹窗内容 |
| `confirmText` | `string` | `undefined` | 确认按钮文本 |
| `cancelText` | `string` | `undefined` | 取消按钮文本 |
| `onConfirm` | `(close: () => void) => void` | `undefined` | 点击确定回调，参数为关闭函数 |
| [onClose](file:///Users/alex.zhang/workspace/reacrt-simple-comps/demo/Drawer.tsx#L8-L10) | [() => void](file:///Users/alex.zhang/workspace/reacrt-simple-comps/src/Divider.tsx#L103-L134) | `undefined` | 关闭回调，默认调用此函数关闭弹窗 |
| `onCancel` | `(close: () => void) => void` | `undefined` | 取消回调，参数为关闭函数 |
| `closeOnMaskClick` | `boolean` | `false` | 点击遮罩是否关闭 |
| `className` | `string` | `undefined` | 自定义类名 |
| `buttonSpace` | `number` | `16` | 按钮间距 |
| `closable` | `boolean` | `undefined` | 是否显示关闭按钮 |
| `mountContainer` | [() => HTMLElement](file:///Users/alex.zhang/workspace/reacrt-simple-comps/src/types.ts#L20-L23) | `undefined` | 弹框挂载位置，默认为 `document.body` |
| `mask` | `boolean` | `undefined` | 是否显示遮罩，默认显示 |
| `maskStyle` | `React.CSSProperties` | `undefined` | 遮罩样式 |
| `maskClass` | `string` | `undefined` | 遮罩类名 |
| `wrapStyle` | `React.CSSProperties` | `undefined` | 弹框样式 |
| `wait` | `number` | `undefined` | 透传给 PC 确认按钮 |
| `unmountOnExit` | `boolean` | `true` | 关闭后是否卸载组件 |
| `mobile` | `boolean` | `undefined` | 是否使用 iOS 弹框风格 |

### StaticProps（静态方法属性）

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `title` | `React.ReactNode` | 弹窗标题 |
| `content` | `React.ReactNode` | 弹窗内容 |
| `confirmText` | `string` | 确定按钮文本 |
| `onConfirm` | `(close: () => void) => void` | 点击确定回调，参数为关闭函数 |
| `cancelText` | `string` | 取消文本 |
| `onCancel` | `(close: () => void) => void` | 取消回调，参数为关闭函数 |
| `wrapStyle` | `React.CSSProperties` | 弹框样式 |
| `wait` | `number | boolean` | 透传给按钮 |
| `closable` | `boolean` | 是否显示关闭按钮 |
| `mobile` | `boolean` | 是否使用 iOS 弹框风格 |

### 方法

- [show(props: StaticProps)](file:///Users/alex.zhang/workspace/reacrt-simple-comps/src/AlertDialog.tsx#L333-L377): 静态方法，用于显示弹窗对话框
