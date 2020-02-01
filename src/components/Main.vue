<template>
  <div id="app" class="app">
    <el-container>
      <el-header>谷子管理系统</el-header>
      <el-container>
        <v-menu></v-menu>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>

    <!--<el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>-->
  </div>
</template>
<script>
  import vMenu from './Menu.vue'
  /* import vSearch from './pages/GoodsSearch'
    import vInsert from './pages/GoodsInsert.vue'
    import vThanks from './pages/Thanks.vue' */

  export default {
    components: {
      vMenu
      /*,
        vInsert,
        vSearch,
        vThanks */
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #1c293a;
    color: #f5f7fa;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .app {
    height: 100%;
    width: 100%;
  }

  html,
  body,
  #app,
  .el-container,
  .tac {
    height: 100%;
    padding: 0px;
    margin: 0px;
    background-color: rgb(84, 92, 100);
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .initMenu {
    text-align: left;
  }
</style>
