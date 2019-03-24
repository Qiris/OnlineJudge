<template>
  <!--导航栏：目录索引-->
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="DashBoard">
               <!--首页索引-->
                    <span class="sb-icon"><i class="material-icons">home</i></span>
                    <span class="sb-cn">首页</span>
            </el-menu-item>
          <el-menu-item index="EditorPage">
            <!--题库索引-->
            <span class="sb-icon"><i class="material-icons">perm_data_setting</i></span>
            <span class="sb-cn">题库</span>
          </el-menu-item>
          <el-menu-item index="BasicTables">
            <!--记录索引-->
            <span class="sb-icon"><i class="material-icons">border_all</i></span>
            <span class="sb-cn">错题集</span>
          </el-menu-item>
          <el-menu-item index="TotalChart">
            <!--历史统计-->
            <span class="sb-icon"><i class="material-icons">pie_chart</i></span>
            <span class="sb-cn">历史统计</span>
          </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
  // import CollectTable from '../page/CollectTable';
    export default {
      // components:{
      //   CollectTable
      // },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scopedel-menu-item>
    .sidebar{
        display: block;
        position: absolute;
        width: 100px;
        left: 0;
        top: 66px;
        bottom:0;
        background: #324157;
       
    }
    .sidebar > ul {
        height:100%;
    }
   .el-menu-item, .el-submenu__title{
       font-size:14px;
   }
   .material-icons {
      font-size:12px;
    }
   .login {
    margin-top: -66px;
    margin-left: 40px;
  }
  .el-menu-item {
    padding: 0 15px!important;
  }
</style>
