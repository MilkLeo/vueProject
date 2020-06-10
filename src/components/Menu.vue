<template>
  <el-aside width="12%">
    <el-row class="tac">
      <el-col :span="12" style="width:100%">
        <el-menu default-active="this.$route.path" class="el-menu-vertical-demo"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router>

          <el-submenu index="1" class="initMenu">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>谷子管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="GoodsSearch">
                <i class="el-icon-info">谷子查询</i></el-menu-item>
              <el-menu-item index="GoodsSell">
                <i class="el-icon-sell">回血</i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!--<el-menu-item index="GoodsSearch">
            <div class="initMenu">
              <i class="el-icon-menu"></i>
              <span slot="title">谷子管理</span>
            </div>
          </el-menu-item>-->

          <el-submenu index="2" class="initMenu">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>群管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="GroupManage">
                <i class="el-icon-user">群用户</i></el-menu-item>
              <el-menu-item index="GroupOrder">
                <li class="el-icon-sold-out">群订单</li>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="GoodsStatistics">
            <div class="initMenu">
              <i class="el-icon-document"></i>
              <span slot="title">统计</span>
            </div>
          </el-menu-item>

          <el-menu-item index="Thanks">

            <div class="initMenu">
              <i class="el-icon-present"></i>
              <span slot="title">感谢</span>
            </div>
          </el-menu-item>
          <!-- <el-menu-item index="3" disabled>
             <i class="el-icon-document"></i>
             <span slot="title">统计</span>
           </el-menu-item>
           <el-menu-item index="4">
             <i class="el-icon-setting"></i>
             <span slot="title">感谢</span>
           </el-menu-item>-->
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>

  export default {
    name: 'Menu'
  }
</script>

<style scoped>

</style>
