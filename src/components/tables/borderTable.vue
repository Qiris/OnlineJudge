<template>
  <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="练习语言"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="做题数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="正确率"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column>
    <template slot-scope="scope">
      <el-button class="specialBtn" type="primary" size="small" >
        <router-link to="/EditorPage">专项练习</router-link>
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
          },{
            date: 'Java',
            name: '58',
            address: '25%'
          }, {
            date: 'C语言',
            name: '86',
            address: '50%'
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
