<template>
    <div>
        <input type="text" placeholder="请输入内容+回车键添加任务" 
        v-model="name" 
        @keyup.enter="adddrytodo"
        v-focus>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:""
        };
    },
    props:["dryA"],
    created() {

    },
    mounted() {

    },
    components: {

    },
    methods: {
        adddrytodo(){
            this.$emit("adddrytodo",this.name)
        },
      
    },
    computed:{

    },
    directives:{
        focus:{
            inserted(el,binding){
                el.focus()
            }
        }
    }
};
</script>

<style scoped>
input{
    width: 100%;
    height: 40px;
}
</style>
