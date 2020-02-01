<template>
  <el-aside width="20%">
    <el-row class="tac">
      <el-col :span="12" style="width:100%">
        <el-menu default-active="this.$route.path" class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router=true>
         <!-- <el-submenu index="GoodsInsert">
            <template slot="title">
              <div class="initMenu">
                <i class="el-icon-tickets"></i>
                <span>谷子管理</span>
              </div>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>-->
          <el-menu-item index="GoodsSearch">
            <div class="initMenu">
              <i class="el-icon-menu"></i>
              <span slot="title">谷子管理</span>
            </div>
          </el-menu-item>

          <el-menu-item index="GoodsStatistics">

            <div class="initMenu">
              <i class="el-icon-document"></i>
              <span slot="title">统计</span>
            </div>

          </el-menu-item>

          <el-menu-item index="Thanks">

            <div class="initMenu">
              <i class="el-icon-info"></i>
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
