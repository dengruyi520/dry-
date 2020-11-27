<template>
    <div>
        <ul>
            <li v-for="(item,index) in drytodo" :key="index">{{item}}
                <button class="btn btn-danger btn-sm" @click="del(index)">X</button>
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
      del(index){
          this.$emit("del",index)
      }
  },
  computed: {}
};
</script>

<style scoped>
</style>
