<template>
   
      
<div>
     <ul class="todolist">
         <li v-for="list in listContents">
           <router-link to="/FormInput">
             {{list.content}}
           </router-link>
          </li>
      </ul>
</div>


</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';




    export default {
        components:{
            vPageTitle
        },
        data(){
            return{
                inputContent:'',
                listContents:[
                    {content:'福尔摩斯的约会 (20)',isDone:false},
                    {content:'德才论 (25)',isDone:false},
                    {content:'打印沙漏(20)',isDone:false},
                    {content:'程序运行时间(15)',isDone:false},
                    {content:'反转链表 (25)',isDone:false},
                    {content:'统计同成绩学生',isDone:false},
                    {content:'福尔摩斯的约会 (20)',isDone:false},
                    {content:'德才论 (25)',isDone:false},
                    {content:'打印沙漏(20)',isDone:false},
                    {content:'程序运行时间(15)',isDone:false},
                    {content:'反转链表 (25)',isDone:false},
                    {content:'统计同成绩学生',isDone:false}
                ]
            }
        },
        
        methods: {
            onEnter:function(){
                
                if(this.inputContent!=''){
                 
                    var listContent={content:this.inputContent,isDone:true};
                    this.listContents.splice(0,0,listContent);
                    this.inputContent='';
                }
            }
        }
    }
</script>

<style>
    .el-col{
        margin-bottom:16px;
    }
    .todolist{
        margin-top:5px;
        list-style:none;
        border:1px solid #ccc;
        border-radius:6px;
    }
    .todolist li{
        transition:all 0.5s; 
        -moz-transition:all 0.5s; 
        -o-transition:all 0.5s; 
        -webkit-transition:all 0.5s; 
        line-height:20px;
        padding:10px;
        border-bottom:1px solid #ccc;
        cursor:pointer;
        border-left:5px solid #209e91;
        text-align:left;
    }
    .todolist li:nth-child(2n){
          border-left:5px solid #0e8174;
    }

    .todolist li:hover{
        border-left:30px solid #209e91;
        background-color:#eee;
    }
    .my-input{
        line-height:28px;
        border:1px solid #ccc;
        border-radius:6px;
        width:98%;
        padding:5px;
    }
    .todolist a {
      color: #777777;
    }
 
    
</style>
