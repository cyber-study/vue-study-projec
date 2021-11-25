<template>
  <div>
    <div>v-slot 相当于 react 的render-props模式</div>
    <slot :changeValue="changeValue"></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    changeValue: 1,
  }),
  mounted() {
    setInterval(() => {
      this.changeValue = this.changeValue + 1;
    }, 1000);
  },
};
</script>