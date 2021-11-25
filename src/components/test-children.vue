<template>
  <div id="childrenid" class="child-origin" style="margin: 10px">
    <slot></slot>
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
  mounted() {
    console.log(this.$props);
  },
};
</script>
