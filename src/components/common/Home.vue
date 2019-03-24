<template>
    <div class="wrapper">
      <!--顶部导航栏-->
        <v-head></v-head>
      <!--侧边导航栏-->
         <v-sidebar></v-sidebar>
      <!--主体内容-->
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>
<!--引入头部和侧边导航栏组件-->
<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>
<style>
  .content {
    left:100px;
  }
</style>
