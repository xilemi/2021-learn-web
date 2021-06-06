<template>
  <el-scrollbar style="height: 100%;">
      <el-table :data="tableData" @row-click="openDetails" :row-class-name="tableRowClassName">
        <el-table-column prop="position" label="职位" width="300px">
        </el-table-column>
        <el-table-column prop="salary" label="工作薪资" width="400px">
        </el-table-column>
        <el-table-column prop="city" label="工作城市" width="400px">
        </el-table-column>
        <el-table-column prop="welfare" label="工作待遇">
        </el-table-column>
      </el-table>
  </el-scrollbar>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      currentRowIndex:1,
      tableData:[
        {
          position:'设计师',
          salary:'10000',
          city:'武汉',
          welfare:'五险一金 带薪拉屎 租房补贴',
        },
        {
          position:'设计师',
          salary:'10000',
          city:'武汉',
          welfare:'五险一金 带薪拉屎 租房补贴',
        },
        {
          position:'设计师',
          salary:'10000',
          city:'武汉',
          welfare:'五险一金 带薪拉屎 租房补贴',
        },
        {
          position:'设计师',
          salary:'10000',
          city:'武汉',
          welfare:'五险一金 带薪拉屎 租房补贴',
        },
        {
          position:'设计师',
          salary:'10000',
          city:'武汉',
          welfare:'五险一金 带薪拉屎 租房补贴',
        },
        {
          position:'设计师',
          salary:'10000',
          city:'武汉',
          welfare:'五险一金 带薪拉屎 租房补贴',
        },
      ]
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
        row.row_index = rowIndex;
       },
    openDetails(row,event,column){
      this.currentRowIndex = row.row_index;
      this.$router.push({
        path:'/offerDetails',
        query:{
          index:this.currentRowIndex
        }
        
        
      })
         
    }
  },
  components: {

  }
}
</script>
<style>
tbody>tr{
  height: 100px;
}
tbody>tr:nth-child(even){
  background-color: #5f5f5f;
  color: #f5f5f5;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0, 0, 0, 0) !important;
  }
</style>

