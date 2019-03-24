<template>
    <div>
        <v-pageTitle vtitle="个人中心"></v-pageTitle>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2" class="rowStyle">
          <div class="grid-content bg-purple">

          </div>
        </el-col>
      </el-row>
    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import hoverRow from '../tables/hoverRow.vue';
    import stripedRow from '../tables/stripedRow.vue';
    import borderTable from '../tables/borderTable.vue';
    import condensedTable from '../tables/condensedTable.vue';
    import fixedHeaderTable from '../tables/fixedHeaderTable.vue';
    import fixedColumnTable from '../tables/fixedColumnTable.vue';
    import errorTask from '../tables/errorTask.vue';
    import ErrorDetail from '../page/ErrorDetail.vue';

    export default {
      data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
        }
      },
        components:{
            vPageTitle,hoverRow,stripedRow,borderTable,condensedTable,fixedHeaderTable,fixedColumnTable,errorTask,ErrorDetail
        },
        methods: {
          //  分页方法
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .box-card{
        font-size:12px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
        margin-top:6px;
    }
    .bg-purple span{
      color: #22ae90;
      margin-bottom: 20px;
    }




</style>
