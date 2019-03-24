<template>
  <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
    <el-table-column
      prop="id"
      label="题目编号"
      width="130">
    </el-table-column>
    <el-table-column
      prop="name"
      label="题目名称"
      width="190">
    </el-table-column>
    <el-table-column
      prop="description"
      label="题目描述"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="where"
      label="题目来源"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop=""
      label="练习次数"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button class="specialBtn" type="primary" size="small" @click="handleClick(scope.$index,scope.row)"> 点击练习本题
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--表格分页-->
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        tableData3: [],
        multipleSelection: [],
        size: '',
        stkkk: '',
        idTemp:''
      }
    },
    created() {

      axios.get('http://localhost:8888/questions?page=2&size=5&orderType=1')

      //then获取成功；response成功后的返回值（对象）

        .then(response => {

          console.log(response);

          this.tableData3 = response.data.data.list;
          //总条数
          this.size = response.data.data.size;
          const stkkk = this.size;

        })

        //获取失败

        .catch(error => {

          console.log(error);

          alert('网络错误，不能访问');

        })

    },
    methods: {
      handleClick: function (index, row) {
        //  获取id值
        this.idTemp = row.id.substr(1);
        this.$router.push({
          path: `/FormInput/${this.idTemp }`,
        })
      }
    }
  }
</script>
<style scoped>
  .specialBtn {
    background: #22ae90 !important;
  }

  .specialBtn a {
    color: white;
  }
</style>
