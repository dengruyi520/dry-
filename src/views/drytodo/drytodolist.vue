<template>
    <div>
        <dryinp :dryname="dryname" @dryadd="dryadd"/>
        <drynum :drynum="drytodo.length"/>
        <drylist :drytodo="drytodo" @del="drydel"/>
        <dryinp/>
        <drynum/>
        <drylist/>
    </div>
</template>

<script>
import dryinp from "./dryinp";
import drylist from "./drylist";
import drynum from "./drynum";
export default {
  data() {
    return {
      dryname: "",
      drytodo: ["zzzzzzzzzzzzzz"],
      drynum: ""
    };
  },
  created() {},
  mounted() {},
  components: {
    drynum,
    drylist,
    dryinp
  },
  methods: {
    dryadd(data) {
      if (data == "") {
        alert("!!!!!!");
        return false;
      }
      this.drytodo.push(data);
    },
    drydel(index) {
      this.drytodo.splice(index, 1);
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
