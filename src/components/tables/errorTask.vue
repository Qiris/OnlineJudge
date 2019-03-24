<template>
  <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;margin-top: 10px" >
    <el-table-column
      type="selection"
      width="95">
    </el-table-column>
    <el-table-column
      label="练习语言"
      width="190">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="知识点"
      width="290">
    </el-table-column>
    <el-table-column
      prop="address"
      label="正确率"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="来源"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作">
    <template slot-scope="scope">
      <el-button class="specialBtn" type="primary" size="small" >
        <router-link to="/ErrorDetail">查看详情</router-link>
      </el-button>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData3: [{
            date: 'Java',
            name: '58',
            address: '25%'
          }, {
            date: 'C语言',
            name: '86',
            address: '50%'
          }, {
            date: 'Python',
            name: '59',
            address: '89%'
          },{
            date: 'Java',
            name: '58',
            address: '25%'
          }, {
            date: 'C语言',
            name: '86',
            address: '50%'
          }, {
            date: 'Python',
            name: '59',
            address: '89%'
          }],
          multipleSelection: []
        }
      },
    }
</script>
<style scoped>
    .specialBtn {
      background: #22ae90!important;
    }
  .specialBtn a {
    color: white;
  }
</style>
