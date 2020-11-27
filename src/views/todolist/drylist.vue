<template>
    <div>
        <h3>任务列表：</h3>
        <ul v-if="drytodo.length>0">
                <li v-for="(item,index) in drytodo" :key="index">{{item.title}}
                    <button class="btn btn-danger" @click="dryXX(index)">X</button>
                </li>
            </ul>
            <ul v-else>
                <li>
                    你还没有任务添加
                </li>
            </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["drytodo"],
  created() {},
  mounted() {},
  components: {},
  methods: {
    dryXX(index) {
      this.$emit("dryXX",index);
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
