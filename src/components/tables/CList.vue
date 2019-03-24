<template>
  <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" >
    <el-table-column
      type="selection"
      width="80">
    </el-table-column>
    <el-table-column
      label="题目"
      width="190">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="做题数"
      width="190">
    </el-table-column>
    <el-table-column
      prop="address"
      label="正确率"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="where"
      label="题目来源"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作">
    <template slot-scope="scope">
      <el-button class="specialBtn" type="primary" size="small" ><router-link to="/FormInput">点击开始练习本题目</router-link></el-button>
    </template>
    </el-table-column>
  </el-table>
  <!--表格分页-->
</template>

<script>
    export default {
      data() {
        return {
          tableData3: [{
            date: 'Java',
            name: '58',
            address: '25%',
            where:'北京师大训练专题'
          }, {
            date: 'C语言',
            name: '86',
            address: '50%',
            where:'北京师大训练专题'
          }, {
            date: 'Python',
            name: '59',
            address: '89%',
            where:'北京师大训练专题'
          },{
            date: 'Java',
            name: '58',
            address: '25%',
            where:'北京师大训练专题'
          }, {
            date: 'C语言',
            name: '86',
            address: '50%',
            where:'北京师大训练专题'
          }, {
            date: 'Python',
            name: '59',
            address: '89%',
            where:'北京师大训练专题'
          },
            {
              date: 'Java',
              name: '58',
              address: '25%',
              where:'北京师大训练专题'
            }, {
              date: 'C语言',
              name: '86',
              address: '50%',
              where:'北京师大训练专题'
            }, {
              date: 'Python',
              name: '59',
              address: '89%',
              where:'北京师大训练专题'
            },
            {
              date: 'Java',
              name: '58',
              address: '25%',
              where:'北京师大训练专题'
            }, {
              date: 'C语言',
              name: '86',
              address: '50%',
              where:'北京师大训练专题'
            }, {
              date: 'Python',
              name: '59',
              address: '89%',
              where:'北京师大训练专题'
            },{
              date: 'Java',
              name: '58',
              address: '25%',
              where:'北京师大训练专题'
            }, {
              date: 'C语言',
              name: '86',
              address: '50%',
              where:'北京师大训练专题'
            }, {
              date: 'Python',
              name: '59',
              address: '89%',
              where:'北京师大训练专题'
            },{
              date: 'Java',
              name: '58',
              address: '25%',
              where:'北京师大训练专题'
            }, {
              date: 'C语言',
              name: '86',
              address: '50%',
              where:'北京师大训练专题'
            }, {
              date: 'Python',
              name: '59',
              address: '89%',
              where:'北京师大训练专题'
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
