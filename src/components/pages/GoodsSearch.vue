<template>
  <div>

    <el-container>
      <el-header>谷子查询</el-header>

      <el-container>
        <el-main>
          <el-row>
            <el-col :span="24" class="layClass">
              <div class="grid-content bg-purple-dark">
                <el-button type="success" size="min" @click="addDialogVisible=true" round>添加</el-button>
                <el-button type="danger" size="min" round>删除</el-button>
              </div>
            </el-col>
          </el-row>
          <el-table
            :data="tableData"
            style="width: 100%"
            :header-row-style="rowClass"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>

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
              <template slot-scope="props">
                <div v-if="props.row.type === 0">
                  <el-tag>吧唧</el-tag>
                </div>
                <div v-else-if="props.row.type === 1">
                  <el-tag style="color: #67C23A">橡胶</el-tag>
                </div>
                <div v-else-if="props.row.type === 2">
                  <el-tag style="color: #20B2AA">挂件</el-tag>
                </div>
                <div v-else-if="props.row.type === 3">
                  <el-tag style="color: #E6A23C">明信片</el-tag>
                </div>
                <div v-else-if="props.row.type === 4">
                  <el-tag style="color: #909399">文件夹</el-tag>
                </div>
                <div v-else-if="props.row.type === 5">
                  <el-tag style="color: #708090">其他</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="cname"
              label="角色">
            </el-table-column>
            <el-table-column
              label="谷子图片">
              <template slot-scope="props">
                <img src="props.row.picture_url">
              </template>
            </el-table-column>
            <el-table-column
              label="单价"
              prop="unit_price">
            </el-table-column>
            <el-table-column
              label="数量"
              prop="number">
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
              label="是否全款">
              <template slot-scope="props">
                <div v-if="props.row.isAll == 0">
                  <el-tag type="danger" effect="dark">非全款</el-tag>
                </div>
                <div v-else-if="props.row.isAll == 1">
                  <el-tag type="success" effect="dark">全款</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="front_money"
              label="定金">
            </el-table-column>
            <el-table-column
              prop="money"
              label="全款">
            </el-table-column>
            <!--<el-table-column
              prop="date"
              label="出谷日期">
            </el-table-column>-->
            <el-table-column
              label="是否包邮">
              <template slot-scope="props">
                <div v-if="props.row.isFreeShipping == 0">
                  <el-tag type="danger" effect="dark">不包邮</el-tag>
                </div>
                <div v-else-if="props.row.isFreeShipping == 1">
                  <el-tag type="success" effect="dark">包邮</el-tag>
                </div>
              </template>
            </el-table-column>
            <!--<el-table-column
              prop="address"
              label="邮费">
            </el-table-column>-->
            <el-table-column label="是否到货">
              <template slot-scope="props">
                <div v-if="props.row.isReceived == false">
                  <el-tag type="danger" effect="dark">未收货</el-tag>
                </div>
                <div v-else-if="props.row.isReceived == true">
                  <el-tag type="success" effect="dark">已收货</el-tag>
                </div>
              </template>
            </el-table-column>

            <!--添加操作按钮-->
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="editDialogVisible=true">编辑</el-button>
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

                    <div v-if="props.row.source === 0">
                      <el-tag>拼团</el-tag>
                    </div>
                    <div v-else-if="props.row.source === 1">
                      <el-tag style="color: #67C23A">闲鱼</el-tag>
                    </div>
                    <div v-else-if="props.row.source === 2">
                      <el-tag style="color: #67C23A">煤炉</el-tag>
                    </div>
                    <div v-else-if="props.row.source === 3">
                      <el-tag style="color: #E6A23C">代购</el-tag>
                    </div>
                    <div v-else-if="props.row.source === 4">
                      <el-tag style="color: #909399">微博</el-tag>
                    </div>
                    <!--<span>{{  }}</span>-->
                  </el-form-item>
                  <el-form-item label="群号/闲鱼号/微博号">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="邮费">
                    <span>{{ props.row.postage }}</span>
                  </el-form-item>
                  <el-form-item label="付款方式">
                    <div v-if="props.row.payType === 0">
                      <span> 支付宝</span>
                    </div>
                    <div v-else-if="props.row.payType === 1">
                      <span> 微信</span>
                    </div>

                  </el-form-item>
                  <el-form-item label="总价">
                    <span>{{ props.row.money }}</span>
                  </el-form-item>
                </el-form>
              </template>

            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>


    <!--新增弹框-->
    <el-dialog title="新增谷子信息" ref="addDialog" :visible.sync="addDialogVisible"
               width="500px">
      <el-form :model="form">
        <el-form-item label="排单时间" :label-width="formLabelWidth" class="datepicker">
          <div class="block inputclass">
            <el-date-picker
              v-model="create_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>


        <el-form-item label="谷子名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" class="inputclass" autocomplete="off" style="width: 150px"></el-input>
        </el-form-item>
        <el-form-item label="谷子类型" :label-width="formLabelWidth">
          <div class="inputclass">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="吧唧" value="0"></el-option>
              <el-option label="橡胶" value="1"></el-option>
              <el-option label="挂件" value="2"></el-option>
              <el-option label="明信片" value="3"></el-option>
              <el-option label="文件夹" value="4"></el-option>
              <el-option label="其他" value="5"></el-option>
            </el-select>
          </div>
        </el-form-item>

        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" class="inputclass" autocomplete="off" style="width: 150px"></el-input>
        </el-form-item>

        <el-form-item label="谷子图片" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            style="width: 300px">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>


        <el-form-item label="单价" :label-width="formLabelWidth">
          <el-input-number v-model="form.price" class="inputclass" :precision="2" :step="0.1"
                           :max="100000"></el-input-number>
        </el-form-item>

        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input-number v-model="form.number" class="inputclass" :precision="0" :step="1"
                           :max="100"></el-input-number>
        </el-form-item>


        <el-form-item label="是否全款" :label-width="formLabelWidth">
          <el-switch
            v-model="form.isAll"
            active-color="#13ce66"
            inactive-color="#ff4949"
            style="float: left">
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="line-height: 10px">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>


    <!--修改弹框-->
    <el-dialog title="修改谷子信息" ref="editDialog" :visible.sync="editDialogVisible" width="500px">
      <el-form :model="form">
        <el-form-item label="排单时间" :label-width="formLabelWidth" class="datepicker">
          <div class="block inputclass">
            <el-date-picker
              v-model="create_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>


        <el-form-item label="谷子名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" class="inputclass" autocomplete="off" style="width: 150px"></el-input>
        </el-form-item>
        <el-form-item label="谷子类型" :label-width="formLabelWidth">
          <div class="inputclass">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="吧唧" value="0"></el-option>
              <el-option label="橡胶" value="1"></el-option>
              <el-option label="挂件" value="2"></el-option>
              <el-option label="明信片" value="3"></el-option>
              <el-option label="文件夹" value="4"></el-option>
              <el-option label="其他" value="5"></el-option>
            </el-select>
          </div>
        </el-form-item>

        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" class="inputclass" autocomplete="off" style="width: 150px"></el-input>
        </el-form-item>

        <el-form-item label="谷子图片" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            style="width: 300px">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="单价" :label-width="formLabelWidth">
          <el-input-number v-model="form.price" class="inputclass" :precision="2" :step="0.1"
                           :max="100000"></el-input-number>
        </el-form-item>

        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input-number v-model="form.number" class="inputclass" :precision="0" :step="1"
                           :max="100"></el-input-number>
        </el-form-item>


        <el-form-item label="是否全款" :label-width="formLabelWidth">
          <el-switch
            v-model="form.isAll"
            active-color="#13ce66"
            inactive-color="#ff4949"
            style="float: left">
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="line-height: 10px">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>


</template>


<script>

  export default {
    data () {
      return {
        tableData: [],
        addDialogVisible: false,
        editDialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          price: '',
          number: '',
          isAll: true
        },
        formLabelWidth: '120px',
        create_time: '',
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
    created () {
      this.getNewsList()
    },
    methods: {
      // 设置表格第一行的颜色
      rowClass ({row, rowIndex}) {
        console.log(rowIndex) //表头行下标
        return 'background:#F3F4F7;color:#555'
      },

      handleSelectionChange (val) {
        this.multipleSelection = val
      },

      getNewsList () {
        this.axios.post('/data/test/table').then((response) => {

          this.tableData = response.data
          console.log(this.tableData)
        }).catch((response) => {
          console.log(response)
        })
      },

      /*新增弹框显示*/
      addDiagOpen () {
        var addDialog = this.$refs.addDialog
        addDialog.$open
        if (addDialog) {
          addDialog.style.visible = true
          console.log(addDialog.style.dialogFormVisible)
        } else {
          console.log('测试失败')
        }

      },

      /*弹框open事件*/
      open () {
        axios.get('/admin/getLocation', {
          params: {
            cityId: this.cityId,
            address: this.address
          }
        }).then((res) => {
          this.tableData = res.data.data
        }).catch((err) => {
          console.log(err)
        })
      }

    },

  }

</script>

<style>
  /*表格样式*/
  .el-table__header {
    height: 35px;
    line-height: 50px;
  }

  .el-row .el-col.layClass {
    height: 50px;
    line-height: 10px;
    width: 200px;
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

  /*弹框样式*/
  .el-dialog .el-dialog__header {
    line-height: 10px;
  }

  .datepicker {
    width: 80px;
  }


  .inputclass {
    float: left;
    width: 180px;
  }

  .el-upload-dragger{
    width: 300px;
    height: 200px;
  }
</style>
