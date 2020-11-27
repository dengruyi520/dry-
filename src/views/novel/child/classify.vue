<template>
  <div>
      <header>
        <van-nav-bar title="分类" />
      </header>
      <ul id="ulList">
        <li v-for="(item,index) in list" :key="index">
            <h6>{{ item.title }}</h6>
            <hr>
            <ol id="ollist">
              <li v-for="(it,i) in item.lei" :key="i">
                <p>{{ it.name }}</p>
                <p>{{ it.num }}</p>
              </li>
            </ol>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getData()
  },
  watch: {},
  methods: {
    getData(){
      this.$axios.get('/static/json/cate.json')
      .then(res=>{
        console.log(res);
        this.list = res
      })
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
header {
  .van-nav-bar {
    background: #0088dd;
  }
}
#ulList{
  width: 100%;
  padding: 5% 10%;
  box-sizing: border-box;
  margin-bottom: 50px;
}
#ollist{
  width: 100%;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  // justify-content: ;
  align-items: center;
  li{
    width: 33%;
    text-align: center;
    p:nth-of-type(1){
      font-weight: bold;
    }
  }
}
</style>
