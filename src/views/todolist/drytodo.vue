<template>
    <div>
        <div class="drybox">
            <h2>任务列表</h2>
            <div>
                <h3>添加任务：</h3>
                <dryinput :dryA="dryA" @adddrytodo="adddrytodo"/>
            </div>
            <dryS :dryshu="drytodo.length"/>
            <drylist :drytodo="drytodo" @dryXX="dryXX"/>
            
        </div>
    </div>
</template>

<script>
import "@/assets/bootstrap.css"
import dryinput from "./dryinput";
import dryS from "./dryS";
import drylist from "./drylist";
export default {
  data() {
    return {
      dryA: "",
      //   dryD: "",
      drytodo: [
        { title: "dry减肥计111" },
        { title: "dry减肥计划" },
        { title: "dry减肥计划" }
      ],
      dryshu: []
    };
  },
  created() {},
  mounted() {},
  components: {
    dryinput,
    dryS,
    drylist
  },
  methods: {
    //   添加
    adddrytodo(data) {
      if (data == "") {
        alert("不能为空！");
        return false;
      }
      this.drytodo.unshift({
        title: data
      });
    },
    dryXX(index){
        this.drytodo.splice(index,1)
    }
  },
  computed: {
  }
};
</script>

<style scoped>
.drybox {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
</style>
