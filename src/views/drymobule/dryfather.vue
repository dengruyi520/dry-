<template>
    <div class="drybox">
      <dryselect :drylist="drylist1"/>
      <hr>
      <dryselect :drylist="drylist2"/>
    </div>
</template>

<script>
import dryselect from "./dryselect"
export default {
  name: "",
  data() {
    return {
      drylist1:["Vue","JS","HTML","React","WebAPP"],
      drylist2:["8k-10k","10k-12k","12k-15k","15k-20k"]
    };
  },
  components: {
    dryselect,
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.drybox{
  width: 300px;
  /* height: 200px; */
  margin: 0 auto;
}
</style>
