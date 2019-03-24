<template>
    <div>
        <v-pageTitle vtitle="修改密码"></v-pageTitle>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2" class="rowStyle">
          <div class="grid-content bg-purple">
              <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">
                  <div class="mainPass">
                    <h2>修改密码</h2><hr>
                    <el-row :gutter="20">
                      <el-col :span="12" :offset="6">
                        <div class="grid-content bg-purple">
                          <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="pass" class="inputStyle">
                              <el-input type="password" autocomplete="off" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="请输入新密码" prop="pass" class="inputStyle">
                              <el-input type="password" autocomplete="off" placeholder="请输入新密码"></el-input>
                            </el-form-item>
                            <el-form-item label="请确认新密码" prop="pass" class="inputStyle">
                              <el-input type="password" autocomplete="off" placeholder="请确认新密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary"><router-link to="/">确认</router-link></el-button>
                            </el-form-item>
                          </el-form>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                </el-col>
              </el-row>
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
    .mainPass {
      background: white;
      height: 800px;
      border-radius: 5px;
    }
    .mainPass h2 {
      text-align: center;
      padding: 20px;
    }
    .mianPaSpan {
      color: #777777!important;
      margin: 20px 0 0 410px;
      top: 15px;
      position: relative
    }
    .inputStyle {
      margin-top: 30px;
    }
    a {
      color: white;
    }
</style>
