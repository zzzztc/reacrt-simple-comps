# Toast 头像

<code src="../../demo/Toast.tsx"></code>
## Toast 组件属性说明

### Props（组件属性）

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `content` | `React.ReactNode` | `undefined` | Toast 内容 |
| `modal` | `boolean` | `true` | 是否模态显示 |
| `visible` | `boolean` | `undefined` | 是否显示 |
| `maskStyle` | `React.CSSProperties` | `undefined` | 遮罩层样式 |
| ...`BaseProps` | `BaseProps` | - | 继承基础属性 |

### StaticToastProps（静态方法属性）

当使用 `Toast.show()` 静态方法时，可以传入字符串/ReactNode 或对象配置：

#### 直接传入内容：
```typescript
Toast.show('提示内容');
```


#### 对象配置参数：
| 属性名         | 类型 | 默认值 | 说明 |
|-------------|------|--------|------|
| `content`   | `React.ReactNode` | - | Toast 内容（必填） |
| `duration`  | `number` | `1500` | 持续显示时间（毫秒） |
| `modal`     | `boolean` | `true` | 是否模态显示 |
| `className` | `string` | `undefined` | Toast 自定义类名 |
| `style`     | `React.CSSProperties` | `undefined` | 内容样式，应用于 StyledToast |
| `maskStyle` | `React.CSSProperties` | `undefined` | 模态时遮罩层样式 |
| `afterClose` | `() => void`| `undefined` | 隐藏后的回调函数 |

### 静态方法

- `Toast.show(props: StaticToastProps)`: 显示轻提示
- `Toast.hide()`: 关闭轻提示
