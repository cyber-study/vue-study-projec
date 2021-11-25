# 学习总结

## v-slot
v-slot 等价于 react 的 render-props 模式

## 属性透传

默认情况下子组件会自动继承来自父组件的属性
在子组件中这样设置就可以取消这个行为(这个选项不影响 class 和 style 绑定,class 和 style依然会合并进来)
```js
export default {
  inheritAttrs: false,
};
```

## 尚存的疑问

自定义组件的根元素会继承父级传递的class和style属性并跟自己的class和style合并

## fallthrough(隐式贯穿)