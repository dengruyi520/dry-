<template>
  <div>
    <input type="text" :value="title" @click="int" />
  </div>
</template>
<script>
import bus from "@/utils/eventBus.js";
export default {
  props: ["title"],
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    int() {
      this.$emit("int", true);
    },
  },
};
</script>
<style scoped>
input {
  width: 300px;
  height: 30px;
}
</style>
