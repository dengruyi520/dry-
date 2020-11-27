<template>
    <div>
<input type="text" v-model="name" 
placeholder="请输入内容~~~~~~·" 
v-focus
@keyup.enter="dryadd">
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  props: ["dryname"],
  created() {},
  mounted() {},
  components: {},
  methods: {
    dryadd(index) {
      this.$emit("dryadd", this.name);
    }
  },
  computed: {},
  //   局部自定义指令
  directives: {
    focus: {
      inserted(el, binding) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
</style>
