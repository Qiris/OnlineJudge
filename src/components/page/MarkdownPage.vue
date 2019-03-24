<template>
    <div >
        <v-pageTitle vtitle="C语言题目列表"></v-pageTitle>

        
        <!--<el-row :gutter="20">-->
            <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                     <!--<markdown-editor v-model="source" ref="markdownEditor"></markdown-editor>-->
                <!--</el-card>-->
            <!--</el-col>-->
            <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                    <!--<div>预览效果：</div>-->
                    <!--<vue-markdown class="result-html full-height" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"-->
                    <!--:source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"-->
                    <!--:emoji="emoji" :typographer="typographer" :toc="toc"-->
                    <!--toc-id="toc"></vue-markdown>-->
                    <!--<pre>-->
                       <!---->
                    <!--</pre>-->
                <!--</el-card>-->
            <!--</el-col>-->

            <!---->
        <!--</el-row>-->
      <!--内容主体部分布局-->
      <el-row :gutter="20">
        <el-col :span="18" class="span18">
          <div class="grid-content bg-purple">
            <CList></CList>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="6" class="span6">
          <!--搜索题目-->
          <div class="grid-content bg-purple">
            <h3>快速查找题目</h3>
            <el-row :gutter="10">
              <el-col :span="20">
                <div class="grid-content bg-purple-dark">
                  <el-input v-model="input" placeholder="请输入题目进行搜索" icon="search"  class="searchInput"></el-input>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple-dark" suffix-icon="el-icon-search">
                  <el-button type="primary" icon="el-icon-search" class="searchInput">搜索</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--题目标签-->
          <div class="grid-content bg-purple">
            <!--java基础-->
            <div>
              <h4>C语言基础</h4>
              <el-row :gutter="10">
                <el-col :span="20" class="searchInput">
                  <el-tag>编程基础</el-tag>
                </el-col>
              </el-row>
            </div>
            <div>
              <h4>C语言算法</h4>
              <el-row :gutter="10">
                <el-col :span="20" class="searchInput">
                  <el-tag>查找</el-tag><el-tag type="success">排序</el-tag><el-tag type="danger">递归</el-tag><el-tag type="warning">贪心</el-tag><el-tag type="danger">动态规划</el-tag><el-tag type="success">分治</el-tag><el-tag type="info">模拟</el-tag>
                  <el-tag type="danger">穷举</el-tag><el-tag type="success">复杂度</el-tag><el-tag type="warning">高级算法</el-tag>
                </el-col>
              </el-row>
            </div>
            <div>
              <h4>C语言数据结构</h4>
              <el-row :gutter="10">
                <el-col :span="20" class="searchInput">
                  <el-tag>数组</el-tag><el-tag type="success">字符串</el-tag><el-tag type="danger">链表</el-tag><el-tag type="warning">栈</el-tag><el-tag type="danger">队列</el-tag><el-tag type="success">树</el-tag><el-tag type="info">图</el-tag>
                  <el-tag type="danger">哈希</el-tag><el-tag type="success">堆</el-tag><el-tag type="warning">高级结构</el-tag>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>







       

    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import VueMarkdown from 'vue-markdown';
    import { markdownEditor } from 'vue-simplemde';
    import CList from '../tables/CList.vue';
   

  

    export default {
        components:{
            vPageTitle,VueMarkdown,markdownEditor,CList
        },
        data(){
            return{
                source: "## 可以开始编写您的Markdown文档了！",
                show: true,
                html: true,
                breaks: true,
                linkify: true,
                emoji: true,
                typographer: true,
                toc: false,
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                input: ''
            }
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

   .box-card{
       line-height:40px;
   }
   /*表格分页位置*/
   .block {
     margin-top: 10px;
     margin-left: 400px;
   }
   /*右侧搜索题目*/
   .searchInput {
     margin-top: 10px;
   }
   .searchInput span {
     margin-bottom: 10px;
     margin-right: 10px;
   }
 
    
</style>
