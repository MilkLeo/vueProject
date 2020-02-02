<template>
  <div>

    <!--<el-container>
      <el-header>谷子查询</el-header>
      <el-container>
        <el-main>

        </el-main>
      </el-container>
    </el-container>-->

    <el-table
      :data="tableData"
      style="width: 100%"
      :header-row-style="rowClass">
      <el-table-column
        prop="date"
        label="排单日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="谷子名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="谷子类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="address"
        label="谷子图片">
      </el-table-column>
      <el-table-column
        prop="address"
        label="动漫名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="来源">
      </el-table-column>
      <el-table-column
        prop="address"
        label="群号/闲鱼名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否全款">
      </el-table-column>
      <el-table-column
        prop="address"
        label="定金">
      </el-table-column>
      <el-table-column
        prop="address"
        label="全款">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出谷日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否包邮">
      </el-table-column>
      <el-table-column
        prop="address"
        label="邮费">
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否到货">
      </el-table-column>
      <el-table-column
        prop="address"
        label="总价">
      </el-table-column>
    </el-table>
  </div>


</template>


<script>

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },

    methods: {
      // 设置表格第一行的颜色
      rowClass({ row, rowIndex}) {
        console.log(rowIndex) //表头行下标
        return 'background:#F3F4F7;color:#555'
      }
    }
  }

</script>

<style>

  .el-table__header{
    height: 35px;
    line-height: 50px;
  }


</style>
