<template>
  <div>

    <el-container>
      <el-header>谷子查询</el-header>
      <el-container>
        <el-main>
          <el-table
            :data="tableData"
            style="width: 100%"
            :header-row-style="rowClass">
            <el-table-column
              prop="create_date"
              label="排单日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="谷子名称">
            </el-table-column>
            <el-table-column
              prop="type"
              label="谷子类型">
            </el-table-column>
            <el-table-column
              prop="address"
              label="角色">
            </el-table-column>
            <el-table-column
              prop="picture_url"
              label="谷子图片">
            </el-table-column>
            <!--<el-table-column
              prop="address"
              label="动漫名称">
            </el-table-column>-->
            <!--<el-table-column
              prop="address"
              label="来源">
            </el-table-column>
            <el-table-column
              prop="address"
              label="群号/闲鱼名称">
            </el-table-column>-->
            <el-table-column
              prop="address"
              label="是否全款">
            </el-table-column>
            <el-table-column
              prop="address"
              label="定金">
            </el-table-column>
            <el-table-column
              prop="isAll"
              label="全款">
            </el-table-column>
            <!--<el-table-column
              prop="date"
              label="出谷日期">
            </el-table-column>-->
            <el-table-column
              prop="isFreeShipping"
              label="是否包邮">
            </el-table-column>
            <!--<el-table-column
              prop="address"
              label="邮费">
            </el-table-column>-->
            <el-table-column
              prop="isReceived"
              label="是否到货">
            </el-table-column>

            <!--添加操作按钮-->
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="getNewsList">编辑</el-button>
                <!--
                                  <el-button size="mini" type="danger">删除</el-button>
                -->
              </template>
            </el-table-column>
            <!--<el-table-column
              prop="address"
              label="总价">
            </el-table-column>-->

            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="动漫名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>

                  <el-form-item label="出谷日期">
                    <span>{{ props.row.end_date}}</span>
                  </el-form-item>
                  <el-form-item label="来源">
                    <span>{{ props.row.source }}</span>
                  </el-form-item>
                  <el-form-item label="群号/闲鱼号/微博号">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="邮费">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>

                  <el-form-item label="总价">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                </el-form>
              </template>

            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>


  </div>


</template>


<script>

  export default {
    data () {
      return{
        tableData: [],
      }
      /*return {
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
      }*/


    },
    created(){
      this.getNewsList();
    },
    methods: {
      // 设置表格第一行的颜色
      rowClass ({row, rowIndex}) {
        console.log(rowIndex) //表头行下标
        return 'background:#F3F4F7;color:#555'
      },

      getNewsList(){
        this.axios.post('/data/test/table').then((response)=>{

          this.tableData=response.data;
          console.log(this.tableData)
        }).catch((response)=>{
          console.log(response);
        })
      }
    }
  }

</script>

<style>

  .el-table__header {
    height: 35px;
    line-height: 50px;
  }


  .demo-table-expand {
    font-size: 0;
    line-height: 15px;
  }

  .demo-table-expand label {
    width: auto;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
