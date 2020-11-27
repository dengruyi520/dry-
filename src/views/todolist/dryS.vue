<template>
    <div>
        <div class="dryrenwu"><span>{{dryshu}}</span>个完成未任务</div>
    </div>
</template>

<script>
import "@/assets/bootstrap.css"
export default {
  data() {
    return {};
  },
  props:["dryshu"],
  created() {},
  mounted() {},
  components: {},
  methods: {},
  computed: {}
};
</script>

<style scoped>
.dryrenwu{
    width: 100%;
    height: 50px;
    color: red;
}
</style>
