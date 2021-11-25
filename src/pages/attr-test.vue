<template>
  <ClassAttrChildren
    id="test"
    style="height: 100px; background: red"
    class="parant-only"
    my-attr="asdsad"
    @click="handleClick"
  ></ClassAttrChildren>
</template>

<script>
import ClassAttrChildren from "@/components/class-attr-children";

export default {
  components: { ClassAttrChildren },
  methods: {
    handleClick() {},
  },
};
</script>