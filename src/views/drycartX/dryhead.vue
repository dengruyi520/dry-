<template>
  <thead>
              <tr>
                  <th>
                      <input type="checkbox" @change="checkAll">全选
                  </th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Num</th>
                  <th>Sum</th>
                  <th>Action</th>
              </tr>
          </thead>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {
      checkAll(event){
        //   获取复选框的状态值
        let status = event.target.checked;
        //   调用this.$emit()方法
        this.$emit("checkAll",status)
      }
  }
};
</script>

<style scoped>
</style>
