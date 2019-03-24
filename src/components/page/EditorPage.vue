<template>
    <div >
      <!--java题目列表-->
        <v-pageTitle vtitle="题目列表"></v-pageTitle>
        <!--内容主体部分布局-->
      <el-row :gutter="20">
        <el-col :span="18" class="span18">
          <div class="grid-content bg-purple">
            <JavaList ref="listChild"></JavaList>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
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
                  <el-input v-model="input" placeholder="请输入题目进行搜索" icon="search" class="searchInput" ></el-input>
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
              <img :src='sheng' class="imgPosition">&emsp;<img :src='drop' class="imgPosition">
              <h4>基础</h4>
              <el-row :gutter="10">
                <el-col :span="20" class="searchInput">
                  <el-tag>编程基础</el-tag>
                </el-col>
              </el-row>
            </div>
            <div>
              <h4>算法</h4>
              <el-row :gutter="10">
                <el-col :span="20" class="searchInput">
                  <el-tag>查找</el-tag><el-tag type="success">排序</el-tag><el-tag type="danger">递归</el-tag><el-tag type="warning">贪心</el-tag><el-tag type="danger">动态规划</el-tag><el-tag type="success">分治</el-tag><el-tag type="info">模拟</el-tag>
                  <el-tag type="danger">穷举</el-tag><el-tag type="success">复杂度</el-tag><el-tag type="warning">高级算法</el-tag>
                </el-col>
              </el-row>
            </div>
            <div>
              <h4>数据结构</h4>
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
    import { quillEditor } from 'vue-quill-editor';
    import JavaList from '../tables/JavaList.vue';

      export default {
        components:{
            vPageTitle,quillEditor,JavaList
        },
        data(){
            return{
                content:'<h2>JSPangAdmin 是一个由Vue2为框架开发的后台管理系统。</h2><h3>你可以随意的使用并编辑它，希望可以帮助前端开发者减轻开发步骤，让大家有时间泡妞和享受生活。</h3>',
                editorOption: {},
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                input: '',
                sheng:'../../static/images/icons/sheng.png',
                drop:'../../static/images/icons/drop.png'
            }
        },
        mounted: function () {
          console.log( this.$refs.listChild);
        },
        methods: {
             onEditorBlur(editor) {
                    console.log('editor blur!', editor)
                },
                onEditorFocus(editor) {
                    console.log('editor focus!', editor)
                },
                onEditorReady(editor) {
                    console.log('editor ready!', editor)
                },
        //  分页方法
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        }
    }
</script>

<style scoped>

    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }

    .ql-container .ql-editor {
        min-height: 20em;
        padding-bottom: 1em;
        max-height: 25em;

    }
    .html {
        height: 9em;
        overflow-y: auto;
        border: 1px solid #ccc;
        border-top: none;
        resize: vertical;
        background-color:#fff;
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
    .imgPosition {
      margin-bottom: 20px;
    }
</style>
