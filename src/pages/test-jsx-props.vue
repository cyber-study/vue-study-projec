
<script>
import TestChildren from "@/components/test-children";

export default {
  components: {
    TestChildren,
  },
  data: () => ({
    otherProps: { name: "shicheng.yusadas", age: "age is 27" },
  }),
  render() {
    console.log("otherPorps", { ...this.otherProps });
    return (
      <test-children props={{ ...this.otherProps }}>
        jsx 中可以使用props来进行结构赋值
      </test-children>
    );
  },
};
</script>