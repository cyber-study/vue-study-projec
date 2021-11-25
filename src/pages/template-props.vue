<!-- 
  v-bind:style 的意思是 透传style值,style会被子组件捕获并合并
  v-bind:style.prop 的意思是 我直接往子组件里设置style属性,会覆盖掉子组件原来的style

  v-bind:class 的意思是 透传class值,class会被子组件捕获并合并
  v-bind:className.prop 的意思是 我直接往子组件里设置className属性,会覆盖掉子组件原来的className

  总结 v-bind:className.prop 等价于让vue做HTML DOM setAttribute()方法
  而v-bind不会v-bind只会透传
-->
<template>
  <div>
    <test-children
      v-bind="otherProps"
      v-bind:class="'parent-input'"
      v-bind:style="'background:red'"
    >
      template 中可以使用v-bind来进行结构赋值
    </test-children>
    <test-children
      v-bind="otherProps"
      v-bind:className.prop="'parent-input'"
      v-bind:style.prop="'background:red'"
    >
      template 中可以使用v-bind来进行结构赋值
    </test-children>
  </div>
</template>

<script>
import TestChildren from "@/components/test-children";

export default {
  components: {
    TestChildren,
  },
  data: () => ({
    otherProps: { name: "shicheng.yusadasfsfsdf", age: "age is 27" },
  }),
};
</script>