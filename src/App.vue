<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TestJsxProps></TestJsxProps>
    <TestJsxAttrs></TestJsxAttrs>
    <TestTemplateProps></TestTemplateProps>
    <TestVsolt v-slot="{ changeValue }">
      <input type="text" :value="changeValue" />
    </TestVsolt>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TestJsxProps from "./pages/test-jsx-props";
import TestJsxAttrs from "./pages/test-jsx-attrs";
import TestTemplateProps from "./pages/template-props";
import TestVsolt from "./pages/test-v-slot.vue";

export default {
  name: "App",
  components: {
    TestJsxProps,
    TestJsxAttrs,
    TestTemplateProps,
    TestVsolt,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
