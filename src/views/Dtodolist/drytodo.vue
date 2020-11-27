<template>
    <div>
        <div class="drybox">
            <h2>任务列表</h2>
            <div>
                <h3>添加任务：</h3>
                <dryinput :dryA="dryA" @adddrytodo="adddrytodo"/>
            </div>
            <dryN :dryshu="drytodo.length"/>
            <drylist :drytodo="drytodo" @dryXX="dryXX"/>
            
        </div>
    </div>
</template>

<script>
import "@/assets/bootstrap.css"
import dryinput from "./dryinput";
import dryN from "./dryN";
import drylist from "./drylist";
export default {
  data() {
    return {
      dryA: "",
      //   dryD: "",
      drytodo: [
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
      this.drytodo.unshift(data);
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
