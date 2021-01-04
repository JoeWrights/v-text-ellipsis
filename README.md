# v-text-ellipsis
一个vue文本溢出省略组件

## 开始

使用npm或yarn安装:

```bash
$ npm install v-text-ellipsis --save
```
或

```bash
$ yarn add v-text-ellipsis
```

```js
import VTextEllipsis from 'v-text-ellipsis'

export default {
  components: {
    VTextEllipsis
  }
}
```

```html
<v-text-ellipsis :text="text" :height="40"/>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text     | 要处理的文本   | string  |    --     |  --  —     |
| height     | 文本高度，超出高度溢出处理   | number    | -- |     —    |
| isLimitHeight     | 是否通过高度限制文本   | boolean    | — | false   |
| textStyle     | 文本行内样式   | object   | — |    |
| textClass     | 文本class   | string/object/array    | — |    |
| more     | 溢出部分显示   | string | -  | ...


### 插槽
| 名称      | 说明
|---------- |-------- |
| before    | 文本前面的slot   |
| after     | 文本后面的slot   |
| more      | 省略显示slot     |
