<template>
  <!--首页内容-->
    <div >
      <!--首页标题-->
        <v-pageTitle vtitle="历史统计"></v-pageTitle>
        <div class="clear"></div>
        <el-row :gutter="20" class="piePosition">
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <pieChart></pieChart>
                    <span class="spanTips">该图表为本用户练习三种语言比重</span>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <lineChart></lineChart>
                  <span class="spanTips">该图表为本用户练习语言正确率</span>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<!--获取当前时间并格式化-->

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import barChart from '../charts/barChart.vue';
    import pieChart from '../charts/pieChart.vue';
    import lineChart from '../charts/lineChart.vue';
    import radarChart from '../charts/radarChart.vue';
    import funnelChart from '../charts/funnelChart.vue';
    import TodoList from '../todoList/TodoList.vue';
    import borderTable from '../tables/borderTable.vue';
    import MessageList from '../message/MessageList.vue';
    var padDate = function (value) {    //在月份、日期、小时等小于10时在前面补0
      return value<10?'0'+value:value;
    };
    export default {
        data(){
           return{
              //percentage:10
             date:new Date(),
             header: '../../static/images/timeCurrent.jpg',
             //主页第三部分类型图标
             allTask:'../../static/images/icons/iconItems3.png',
             trueTask:'../../static/images/icons/true.png',
             //星数
             starValue:4,
             //课程学习
             learnJave:'../../static/images/icons/java.png',
             learnC:'../../static/images/icons/git.png',
             learnPython:'../../static/images/icons/python.png',
           }
        },
        components:{
            vPageTitle,barChart,pieChart,lineChart,radarChart,funnelChart,TodoList,borderTable,MessageList
        },
      filters:{   //过滤器
        //  获取当前日期
        formatDate:function (value) {   //value为需要过滤的数据
          var date = new Date();
          var year = date.getFullYear();
          var month = padDate(date.getMonth()+1);
          var day = padDate(date.getDate());
          var hours = padDate(date.getHours());
          var minutes = padDate(date.getMinutes());
          var dateString = year+'-'+month+'-'+day;
          //整理数据并返回
          return dateString;
        },
        //获取当前时间
        formatDateMinutes:function(value) {
          var date = new Date();
          var year = date.getFullYear();
          var month = padDate(date.getMonth()+1);
          var day = padDate(date.getDate());
          var hours = padDate(date.getHours());
          var minutes = padDate(date.getMinutes());
          //整理数据并返回
          return hours+':'+minutes;
        },
      //  获取星期
        formatWeek:function(value) {
          var date = new Date();
          var year = date.getFullYear();
          var month = padDate(date.getMonth()+1);
          var day = padDate(date.getDate());
          var hours = padDate(date.getHours());
          var minutes = padDate(date.getMinutes());
          var dateString = year+'-'+month+'-'+day;
          var dateArray = dateString.split("-");
          date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
          var week = "星期" + "日一二三四五六".charAt(date.getDay());
          return week;
    }
      },
      mounted: function () {  //定时器，用于每秒刷新页面
        var _this = this;   //声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(function () {
          _this.date = new Date();    //修改数据date
        },1000);
      },
      beforeDestory:function () { //清除定时器
        if (this.timer){
          clearInterval(this.timer);  //在Vue实例销毁前，清除定时器
        }
      }
    }
</script>
<!--样式私有化-->
<style scoped>
    .el-col{
        margin-bottom:16px;
        text-align:center;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
    .box-card{
        height:260px;
    } 
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
    }
    .box-chart{
        height:420px;
    }
    .box-list{
        height:auto;
        text-align:left;
    }
    .box-list hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:5px;
        margin-top:6px;

    }
    /*首页轮播图样式开始*/
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    /*首页轮播图样式结束*/
    /*时间日期样式*/
    .minutesCurrent {
      color:#209e91;
      font-size: 45px;
      position: relative;
      margin-left: 110%;
      margin-top: 50px;
    }
  .dateCurrent {
    position: relative;
    left: 94%;
    margin-top: 5px;
  }
  .weekCurrent {
    width: 10px;
    margin-top: -68px;
    margin-left: 190%;
  }
  /*主要内容第三部分图标样式*/
  .aNextI {
    display: inline-block;
    width: 36px;
    height: 36px;
  }
  .specialI {
    background-position: 0 -424px!important;
  }
  .errorI {
    background-position: 0 -484px!important;
  }
  .onlineI {
    background-position: 0 -182px!important;
  }
  .learnI {
    background-position: 0 -243px!important;
  }
  .liekI {
    background-position: 0 -304px!important;
  }
  .iFont {
    font-size: 14px;
    color: #777777;
  }
  /*真题练习部分*/
  .trueTaskBg {
    padding: 10px;
  }
  .trueTaskBgChild {
    height: 250px;
    /* background: #d1dbe5; */
    margin-top: 20px;
    border-radius: 10px;
    border: 1px dashed #7777;
    padding: 5px;
  }
  .trueSpanDiv {
      position: relative;
      margin-top: 35px;
      margin-bottom: 20px;
  }
  .boxPadding {
    margin-top: 15px;
    padding-bottom: 0px;
  }
  /*课程练习类*/
  .learnImg {
    width: 353px;
    height: 149px;
  }
  .learnImgLast {
    margin-top: -10px;
  }
  .learnTaskBg {
    padding-bottom: 0px!important;
  }
  .piePosition {
    margin-top: 10%;
  }
  .spanTips {
    position: fixed;
    margin-top: 10px;
    margin-left: -115px;
  }
</style>
