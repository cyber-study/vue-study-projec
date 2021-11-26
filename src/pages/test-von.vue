<template>
  <div class="test-von" @click="handleClick"></div>
</template>

<script>
export default {
  name: "test-von",
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.test-von {
  height: 30px;
  background-color: yellow;
}
</style>