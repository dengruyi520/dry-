<template>
    <div>
        <el-container>
            <el-header>
                 
            </el-header>
            <el-main>
                <el-card>
                    <div class="dryheader">
                        <span v-for="(item,index) in drytype" :key="index">{{item.name}}</span>
                    </div>
                    <div class="drylist" v-for="(item,index) in drylist" :key="item.id" 
                    @click="$router.push(`/drydetail/${item.id}`)">
                        <p>
                            <img :src="item.pic" width="60px">
                        </p>
                        <p v-html="item.title"></p>
                        <p>{{item.dateAdd}}</p>
                    </div>
                </el-card>
                
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        drytype:[
            {name:"全部",tab:"all"},
            {name:"精华",tab:"good"},
            {name:"分享",tab:"share"},
            {name:"问答",tab:"ask"},
        ],
        drylist:[]
    };
  },
  created(){
      this.getdrylist()
  },
  computed: {},
  methods: {
    //   获取数据
    getdrylist(){
        this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res=>{
            console.log(res);
            this.drylist=res.data;
        })
    }
  }
};
</script>

<style scoped>
.el-header{
    background: #606266;
}
.dryheader{
    width: 100%;
    padding: 10px 5px;
    background: #dddddd;
}
span {
  font-size: 13px;
  padding: 2px 10px;
  color: #67C23A;
}
.drylist{
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #dddddd 1px solid;
    cursor: pointer;
}
.drylist:hover{
    background: #f0f0f0;
}
.drylist>p:nth-of-type(1){
    width: 15%;
}
.drylist>p:nth-of-type(2){
    width: 60%;
}
.drylist>p:nth-of-type(3){
    width: 25%;
}
</style>
