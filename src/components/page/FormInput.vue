<template>
    <div >
        <v-pageTitle vtitle="在线练习"></v-pageTitle>
        <!--<el-row :gutter="20">-->
            <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                  <!--STANDARD FIELDS-->
                  <!--<hr>-->
                  <!--Text-->
                  <!--<el-input  placeholder="请输入内容"></el-input>-->
                  <!--With Icon-->
                  <!--<el-input placeholder="带图标的文本框" icon="search" ></el-input>-->
                  <!--Disabled Input-->
                  <!--<el-input  placeholder="请输入内容" :disabled="true"></el-input>-->
                  <!--Textarea-->
                  <!--<el-input type="textarea" :rows="4"placeholder="请输入内容"></el-input>-->
                  <!--Small Input-->
                  <!--<el-input size="small" placeholder="请输入内容"></el-input>-->
                  <!--Large Input-->
                  <!--<el-input size="large" placeholder="请输入内容"></el-input>-->
                  <!--<br/><br/>-->
                <!--</el-card>-->
            <!--</el-col>-->



            <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                    <!--EXAMPLE FORM-->
                  <!--<hr>-->
                    <!--<el-form ref="form" label-width="80px">-->
                        <!--<el-form-item label="活动名称">-->
                            <!--<el-input></el-input>-->
                        <!--</el-form-item>-->
                        <!---->
                        <!--<el-form-item label="活动时间">-->
                            <!--<el-col :span="12">-->
                            <!--<el-date-picker type="date" placeholder="选择日期"  style="width: 99%;"></el-date-picker>-->
                            <!--</el-col>-->
                            <!---->
                            <!--<el-col :span="12">-->
                            <!--<el-time-picker type="fixed-time" placeholder="选择时间"  style="width: 100%;"></el-time-picker>-->
                            <!--</el-col>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="活动性质">-->
                            <!--<el-checkbox-group >-->
                            <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
                            <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
                            <!--</el-checkbox-group>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item>-->
                            <!--<el-button  >立即创建</el-button>-->
                            <!--<el-button>取消</el-button>-->
                        <!--</el-form-item>-->
                        <!--</el-form>-->




                <!--</el-card>-->
            <!--</el-col>-->




            <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                  <!--Time PICKER-->
                  <!--<hr>-->
                  <!---->
                        <!--<el-time-select v-model="time1" style="width: 100%;" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间">-->
                        <!--</el-time-select><br/><br/>-->
                   <!---->
                <!--<el-time-select-->
                    <!--placeholder="起始时间"-->
                    <!--style="width: 49%;"-->
                    <!--v-model="startTime"-->
                    <!--:picker-options="{-->
                    <!--start: '08:30',-->
                    <!--step: '00:15',-->
                    <!--end: '18:30'-->
                    <!--}">-->
                <!--</el-time-select>-->
                <!--<el-time-select-->
                    <!--placeholder="结束时间"-->
                    <!--v-model="endTime"-->
                    <!--style="width: 49%;"-->
                    <!--:picker-options="{-->
                    <!--start: '08:30',-->
                    <!--step: '00:15',-->
                    <!--end: '18:30',-->
                    <!--minTime: startTime-->
                    <!--}">-->
                <!--</el-time-select><br/><br/>-->
                   <!---->

                <!--</el-card>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :gutter="20">-->
             <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                    <!--SELECTS-->
                  <!--<hr>-->
                  <!--正常选项-->
                   <!--<el-select v-model="value1" placeholder="请选择" style="width:100%;">-->
                        <!--<el-option-->
                        <!--v-for="item in options1" :key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                  <!--有禁用选项-->
                    <!--<el-select v-model="value2" placeholder="请选择" style="width:100%;">-->
                        <!--<el-option-->
                        <!--v-for="item in options2" :key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value"-->
                        <!--:disabled="item.disabled">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                  <!--禁用 -->
                    <!--<el-select v-model="value1" placeholder="请选择" style="width:100%;" disabled >-->
                        <!--<el-option-->
                        <!--v-for="item in options1" :key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                  <!--多选-->
                    <!--<el-select v-model="value3" multiple placeholder="请选择" style="width:100%;">-->
                        <!--<el-option-->
                        <!--v-for="item in options1" :key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                  <!--分组-->
                     <!--<el-select v-model="value4" placeholder="请选择" style="width:100%;">-->
                        <!--<el-option-group-->
                        <!--v-for="group in options3" :key="group.label"-->
                        <!--:label="group.label">-->
                        <!--<el-option-->
                            <!--v-for="item in group.options" :key="item.label"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                        <!--</el-option>-->
                        <!--</el-option-group>-->
                    <!--</el-select>-->

                <!--</el-card>-->
            <!--</el-col>-->



             <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                   <!--INPUT GROUPS-->
                  <!--<hr>-->
                    <!--<div>-->
                    <!--<el-input placeholder="请输入内容" >-->
                        <!--<template slot="prepend">Http://</template>-->
                    <!--</el-input>-->
                    <!--</div>-->
                    <!--<div style="margin-top: 15px;">-->
                    <!--<el-input placeholder="请输入内容" >-->
                        <!--<template slot="append">.com</template>-->
                    <!--</el-input>-->
                    <!--</div>-->
                    <!--<div style="margin-top: 15px;">-->
                    <!--<el-input placeholder="请输入内容">-->
                        <!--<el-select v-model="select"  slot="prepend">-->
                        <!--<el-option label="餐厅名" value="1"></el-option>-->
                        <!--<el-option label="订单号" value="2"></el-option>-->
                        <!--<el-option label="用户电话" value="3"></el-option>-->
                        <!--</el-select>-->
                        <!--<el-button slot="append" icon="search"></el-button>-->
                    <!--</el-input>-->
                    <!--</div>-->


                <!--</el-card>-->
            <!--</el-col>-->


            <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
                <!--<el-card class="box-card">-->
                   <!--RATE-->
                  <!--<hr>-->
                <!--用户打分-->
                <!--<el-rate v-model="value5"></el-rate>-->
                <!--只读分数-->
                <!--<el-rate-->
                <!--v-model="value6"-->
                <!--disabled-->
                <!--show-text-->
                <!--text-color="#ff9900"-->
                <!--text-template="{value}">-->
                <!--</el-rate>-->

                <!--</el-card>-->
            <!--</el-col>-->
            <!---->
        <!--</el-row>-->
      <el-row :gutter="20">
        <el-col :span="10" class="firstTask">
          <!--左侧题目描述-->
          <div class="grid-content bg-purple">
            <div>
              <h3>名称</h3>
              <pre class="preStyle">{{name}}</pre>
            </div>
            <!--题目要求-->
            <div class="marginLeft">
              <h4>要求</h4>
              <pre class="preStyle">时间限制：{{timeLimit}}ms 空间限制：{{spaceLimit}}mb</pre>
            </div>
            <!--输入提示-->
            <div class="marginLeft">
              <h4>输入格式:</h4>
              <pre class="preStyle">{{inFormat}}</pre>
            </div>
            <!--输出提示-->
            <div class="marginLeft">
              <h4>输出格式:</h4>
              <pre class="preStyle">{{outFormat}}</pre>
            </div>
          </div>
          <!--输入提示-->
          <div class="marginLeft">
            <h4>示例:</h4>
          </div>
          <!--输出提示-->
          <div class="marginLeft">
            <h5 class="hFontStyle">输入样例:</h5>
            <pre class="preStyle">{{inExample}}</pre>
          </div>
          <div class="marginLeft">
            <h5 class="hFontStyle">输出样例:</h5>
            <pre class="preStyle">{{outExample}}</pre>
          </div>
          <div class="marginLeft">
            <h5 class="hFontStyle">提示:</h5>
            <pre class="preStyle">{{tipAndExplain}}</pre>
          </div>
        </el-col>
        <!--右侧输入答案-->
        <el-col :span="13" :offset="4" class="answerInput">
          <span class="chooseType">请选择练习语言:</span>
          <div class="marButtom">
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state3"
              :fetch-suggestions="querySearch"
              placeholder="请选择"
              @select="handleSelect">
              <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </div>
          <div class="grid-content bg-purple-light" id="disNone">
            <quill-editor ref="myTextEditor"
                          v-model="content"
                          :config="editorOption"
                          @blur="onEditorBlur($event)"
                          @focus="onEditorFocus($event)"
                          @ready="onEditorReady($event)">
            </quill-editor>
              <!--展示输入的内容-->
            <el-button class="submitBtn">提交代码</el-button>
            <el-button >查看结果</el-button>
            <!--<div class="html ql-editor" v-html="content"></div>-->
            <div class="result"></div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>

    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import { quillEditor } from 'vue-quill-editor';
    import axios from 'axios';
   
    export default {
        data(){
            return{
                restaurants: [],
                state3: '',
                time1:'',
                startTime: '',
                endTime: '',
                value1:'',
                value2:'',
                value3:[],
                value4:'',
                value5:null,
                value6:3.7,
                select: '',
                content:'',
                editorOption: {},
                id:'5',
            //  题目详情描述
                name:'',
                timeLimit:'',
                spaceLimit:'',
                inFormat:'',
                outFormat:'',
                inExample:'',
                outExample:'',
                tipAndExplain:''
                
            };
        },
        //获取题目详情
        created() {
        //获取题目id
          this.id=this.$route.params.id;
          axios.get('http://localhost:8888/questions/'+this.id)

        //then获取成功；response成功后的返回值（对象）

          .then(response => {
          //  题目描述
            this.name = response.data.data.name;
            this.timeLimit = response.data.data.timeLimit;
            this.spaceLimit = response.data.data.spaceLimit;
            this.inFormat = response.data.data.inFormat;
            this.outFormat = response.data.data.outFormat;
            this.inExample = response.data.data.inExample;
            this.outExample = response.data.data.outExample;
            this.tipAndExplain = response.data.data.tipAndExplain;


          })

          //获取失败

          .catch(error => {

            console.log(error);

            alert('网络错误，不能访问');

          })

      },
        components:{
            vPageTitle,quillEditor
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
          querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
          },
          createFilter(queryString) {
            return (restaurant) => {
              return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          loadAll() {
            return [
              { "value": "java", "type": "1" },
              { "value": "C语言", "type": "2" },
              { "value": "Python", "type": "3" }
            ];
          },
          handleSelect(item) {
            console.log(item);
          },
          handleIconClick(ev) {
            console.log(ev);
          }
        },
        computed: {
          editor() {
            return this.$refs.myTextEditor.quillEditor;
          }
        },
        mounted() {
          this.restaurants = this.loadAll();
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
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    .box-card{
        font-size:12px;
        line-height:26px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
    }
    .el-select .el-input {
    width: 140px;
     }
    /*左侧题目描述*/
    .firstTask {
      background: #ffffff;
      border-radius: 5px;
      padding: 10px;
    }
    .preStyle {
      font-size: 14px;
      position: relative;
      border-left: 2px solid #209e91;
      padding: 10px 0 10px 10px;
      margin: .8em 0;
      background: #fafafa;
      word-break: break-word;
      border-radius: 5px;
    }
    .marginLeft {
      margin-top: 10px;
    }
    /*右侧题目输入*/
  .answerInput {
    margin-left: 20px!important;
  }
  .hFontStyle {
    color: #209e91;
    margin-top: 10px;
  }
  .submitBtn {
    background: #324157;
    color: white;
    margin-top: 15px;
  }
  #disNone {
   margin-top: -10px;
  }
  .result {
    width: 905px;
    height: 300px;
    background: #324157;
    color: white;
    margin-top: 15px;
    border-radius: 5px;
    padding: 10px;
  }
    li {
      line-height: normal;
      padding: 7px;
    }
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
    .chooseType {
      color:#209e91;
    }
    .marButtom {
      margin-bottom: 10px;
      display: inline-block;
    }
</style>
