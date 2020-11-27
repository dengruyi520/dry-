<template>
<div class="drybox">
  <dryinput :drytitle="drytitle" @changeFlag="changeFlag"/>
  <drylist :drylist="drylist" @drysendtitle="drysendtitle" :flag="flag"/>
  </div>
</template>

<script>
import drylist from "./drylist";
import dryinput from "./dryinput";
export default {
  name: "",
  data() {
    return {
      drytitle:"",
      flag:false,
    };
  },
  props: ["drylist"],
  components: {
    drylist,
    dryinput
  },
  computed: {},
  methods: {
    drysendtitle(data){
      this.drytitle=data;
    },
    changeFlag(data){
      this.flag=data;
    }
  }
};
</script>

<style scoped>
</style>
