<template>
  <div>
    <van-search v-model="value" background="#0088dd" @search="onSearch" placeholder="请输入搜索关键词" />
    <ul id="ul">
      <li v-for="(item,index) in list" :key="index">
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <hr />
    <div id="sou">
      <span>搜索历史</span>
      <span @click="del">
        <van-icon name="delete" />
      </span>
      
    </div>
    <ol id="ol">
      <li v-for="(item,index) in lsList" :key="index">
        {{ item }}
        <hr />
      </li>
    </ol>
    <ul id="souUl" v-show="isFlag==true">
      <li v-for="(item,index) in sou" :key="index">
        {{ item.name }}
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlag:true,
      value: "",
      list: [],
      lsList: [],
      souList: []
    };
  },
  computed: {
    sou(){
      if(this.value!=''){
        this.isFlag = true
         return this.souList.filter(item=>{
        return item.name.includes(this.value)
      })
      }else{
        this.isFlag = false
      }
     
    }
  },
  created() {},
  mounted() {
    this.getData();
    this.getSou();
  },
  watch: {},
  methods: {
    getData() {
      this.$axios.get("/static/json/keywords.json").then(res => {
        console.log(res);
        this.list = res.data.tuijian;
      });
    },
    getSou() {
      this.$axios.get("/static/json/search.json").then(res => {
        console.log(res);
        this.souList = res.data;
      });
    },
    // 添加历史记录
    onSearch(val){
      this.lsList.unshift(val)
      this.value = ''
    },
    // 删除历史记录
    del(){
      this.lsList = []
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#ul {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 10px;
    span {
      margin-top: 5%;
      border: 1px solid #d4d4d4;
      padding: 10px;
      border-radius: 30px;
    }
  }
}
#sou {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 4%;
}
#ol {
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
}
#souUl {
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  position: absolute;
  top: 48px;
  z-index: 1;
  background: #fff;
}
</style>
