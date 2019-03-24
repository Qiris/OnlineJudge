<template>
    <div>
        <v-pageTitle vtitle="错题详情"></v-pageTitle>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2" class="rowStyle">
          <div class="grid-content bg-purple">
            <!--错题详情-->
            <div class="errorDes">
              <span>angularjs1中指令中的compile参数是在什么时候运行的？</span>
            </div>
            <div class="caseError">
              <span class="firstSpan">正确答案:</span>
              <span>在生成DOM前扫描并生成在生成DOM前扫描并生成在生成DOM前扫描并生成在生成DOM前扫描并生成</span><br>
            </div>
            <div class="caseError">
              <span class="firstSpan">你的答案:</span>
              <span>在生成DOM前扫描并生成在生成DOM前扫描并生成在生成DOM前扫描并生成在生成DOM前扫描并生成</span>
            </div>
            <!--操作按钮-->
            <div class="btnGroup">
              <el-button type="primary" class="errorBtn">
                <router-link to="/FormInput">重做此题</router-link>
              </el-button>
              <el-button type="warning" class="errorBtn">
                <router-link to="/BasicTables">返回</router-link>
              </el-button>
            </div>
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
            vPageTitle,hoverRow,stripedRow,borderTable,condensedTable,fixedHeaderTable,fixedColumnTable,errorTask
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
      margin-bottom: 20px;
    }
    .firstSpan {
      color: #22ae90;
    }
    .errorDes {
      background: white;
      height: 100px;
      border-radius: 5px;
      padding-top: 55px;
      padding-left: 50px;
    }
  .errorDes span {
    color: #777777;
  }
  .caseError {
    background: #f9f9f9;
    height: 50px;
    padding-top: 20px;
    padding-left: 50px;
  }
  .btnGroup {
    margin-top: 20px;
  }
  .errorBtn {
    width: 709px;
  }
  .errorBtn a {
    color: white;
  }
</style>
