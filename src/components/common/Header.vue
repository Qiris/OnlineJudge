<template>
    <div class="header">
      <!--layout布局：通过 row 和 col 组件，并通过 col 组件的 span 属性自由地组合布局，一共24分栏：span=24/12/8/6/4-->
      <!--Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。-->
      <!--通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。-->
      <!--响应式布局:参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl-->
        <el-row :gutter="20">
            <!--网站logo加标题-->
            <el-col :xs="12" :sm="12" :md="12">
                <div class="logo">
                    <span class="logo_prefix">在线评测</span><span class="logo_suffix">系统</span>
                </div>
            </el-col>
          <!--登录注册项-->
          <el-col :xs="24" :sm="12" :md="{span:4,offset:4}">
            <!--<div class="register">-->
              <!--<router-link to="/Regist" class="logo_suffix">注册</router-link>-->
            <!--</div>-->
            <div class="login">
              <!--<router-link to="/Login" class="logo_suffix">登录</router-link>-->
            </div>
          </el-col>
          <!--用户信息提示项-->
            <el-col :xs="24" :sm="24" :md="{span:2}" >
                <div class="header-right">
                   <el-col :span="24" class="userStyleMain">
                     <span class="userStyle">欢迎您！</span>
                      <span class="userStyleNext">admin</span>
                   </el-col>
                </div>
         </el-col>
          <!--用户中心(头像、个人、设置、退出功能)-->
            <el-col :xs="8" :sm="8" :md="2" >
              <div class="user-header">
                  <el-dropdown trigger="click" menu-align="start">
                      <img src="../../../static/images/b_header.jpg" width="50px" />
                      <el-dropdown-menu slot="dropdown">

                        <!--<el-dropdown-item >-->
                          <!--<div class="setting-div">-->
                            <!--<span class="setting-icon"><i class="material-icons">account_box</i></span>-->
                            <!--<span class="setting-string"><router-link to="/UserCenter">个人中心</router-link></span>-->
                          <!--</div>-->
                        <!--</el-dropdown-item>-->
                        <el-dropdown-item divided>
                          <div class="setting-div">
                            <span class="setting-icon"><i class="material-icons">settings</i></span>
                            <span class="setting-string"><router-link to="/ChangePassword">修改密码</router-link></span>
                          </div>

                        </el-dropdown-item>
                        <el-dropdown-item divided>
                          <div class="setting-div">
                            <span class="setting-icon"><i class="material-icons">assignment_return</i></span>
                            <span class="setting-string"><router-link to="/">注销</router-link></span>
                          </div>

                        </el-dropdown-item>

                      </el-dropdown-menu>
                  </el-dropdown>
              </div>


         </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
      computed:{
        onRoutes(){
          return this.$route.path.replace('/','');
        }
      },
        data() {
            return {
                name: 'linxin',
                dialogs:[
                    {header:'../../static/images/b_header2.jpg',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
                    {header:'../../static/images/b_header3.jpg',content:'中午一起吃个饭吧，我请客。',time:'15'},
                    {header:'../../static/images/b_header.jpg',content:'需要处理一下POP展示的白边样式。',time:'18'},
                    {header:'../../static/images/b_header2.jpg',content:'下午3点开需求会议，准时参加。',time:'24'},
                    {header:'../../static/images/b_header3.jpg',content:'晚上我开车送你回家，你请我吃晚饭。',time:'45'},
                ],
                tasks:[
                    {id:1,rank:1,content:'完成JSPangAdmin头部头部组件的编写。',overTime:'2017/3/9'},
                    {id:2,rank:2,content:'完成GitHub仓库的初始化工作。',overTime:'2017/3/15'},
                    {id:3,rank:3,content:'在阿里云进行网站备案，完成后通知组长。',overTime:'2017/3/20'}

                ]
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    .header {
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        height:66px;

        font-size: 14px;
        line-height: 66px;
        background-color:#324157;
        box-shadow:2px 0 3px rgba(0,0,0,.5);
        z-index:1000;
        padding:0 32px 0 40px;
        overflow:hidden;

    }
    .header .logo{
        float: left;
        cursor:pointer;
        font-size: 22px;
    }
    .logo_prefix{
        color:#209e91;
    }
    .userStyleNext {
      color:#209e91!important;
    }
    .logo_suffix{
        color:#fff;
    }
    .header .search{
        float: left;
        color:#fff;
        font-size:14px;
    }
    .website span{
        display:inline-block;
        color:#209e91;
    }
    .website span:first-child{
        color:#fff;
    }
    .header-right{
        padding-top:25px;
        line-height:10px;
    }
    .header-right span{
        display:inline-block;
        font-size:16px;
        color:#fff;
        line-height:1px;
        height:18px;
        cursor:pointer;

    }
    .header-right span:hover{
        color:#209e91;

    }
    .user-header{
        line-height:10px;
        padding-top:7px;
        font-size:12px;
    }
    .user-header img{
        border-radius:50%;
        cursor:pointer;
    }
    .pop-image{
        display:block;
        float:left;
    }
    .pop-image img{
        border-radius:50%;
    }
    .pop-div{
        height:55px;
        clear:both;
    }
    .pop-content{
        display:block;
        font-size:12px;
        line-height:14px;
        padding-top:15px;
        margin-left:60px;
    }
    .pop-time{
        display:block;
        float:right;
        font-size:10px;
        color:#ccc;

    }
    .pop-title{
        font-size:12px;
        color:#209e91;
    }
    .task-div{
        clear:both;
        height:55px;
    }
    .task-span{
        display:block;
        float:left;
        font-size:12px
    }

    .task-content{
        width:160px;
        line-height:16px;
        margin-left:10px;
        padding:5px;
    }
    .task-time{
        clear:both;
        float:right;
        color:#ccc;

    }
    .setting-div{
        height:30px;
        line-height:30px;
        clear:both;
    }
    .setting-div span{
        display:block;
        float:left;
        font-size:12px;
    }
    .setting-icon{
        padding-top:3px;
        padding-right:3px;
    }
    .userStyle {
      width: 70px;
      margin-top: 10px;
    }
    .userStyleMain {
      padding-left: 0px!important;
    }
    .setting-div a {
      color: #777777;
    }
</style>
