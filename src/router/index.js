import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import Header from '@/components/common/Header';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
import EditorPage from '@/components/page/EditorPage';
import MarkdownPage from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import Login from '@/components/page/Login';
import Regist from '@/components/page/Regist';
import ErrorDetail from '@/components/page/ErrorDetail';
import CollectTable from '@/components/page/CollectTable';
import TotalChart from '@/components/page/TotalChart';
import UserCenter from '@/components/page/UserCenter';
import ChangePassword from '@/components/page/ChangePassword';
import ChangePaSe from '@/components/page/ChangePaSe';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name:'Login',
      component: Login
    },
    {
      path: '/Regist',
      name:'Regist',
      component: Regist
    },
    {
      path: '/',
      name:'Home',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/EditorPage',
          component:EditorPage
        },{
          path:'/MarkdownPage',
          component:MarkdownPage
        },{
          path:'/BasicCharts',
          component:AmCharts
        },{
          path:'/FormInput/:id',
          component:FormInput
        },{
          path:'/FormLayouts',
          component:FormLayouts
        },{
          path:'/BasicTables',
          component:BasicTables
        },{
          path:'/TodoList',
          component:TodoList
        },{
          path:'/Login',
          component:Login
        },{
          path:'/Regist',
          component:Regist
        },{
          path:'/ErrorDetail',
          component:ErrorDetail
        },{
          path:'/CollectTable',
          component:CollectTable
        },{
          path:'/TotalChart',
          component:TotalChart
        },{
          path:'/UserCenter',
          component:UserCenter
        },{
          path:'/ChangePassword',
          component:ChangePassword
        },{
          path:'/ChangePaSe',
          component:ChangePaSe
        }


      ]
    }
  ]
})
