<template>
  <!--<span>数据</span>-->
  <div>
    <!--<v-chart :options="polar"/>-->
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div id="myChart" ref="chart" style="width: 600px; height: 400px">
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div id="main" ref="main" style="width: 600px;height:400px;"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  /*import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/polar'

  export default {
    components: {
      'v-chart': ECharts
    },
    data () {
      let data = []

      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }

      return {
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ],
          animationDuration: 2000
        }
      }
    }
  }*/
  var echarts = require('echarts')

  export default {
    name: 'hello',
    data () {
      return {
        data: []
      }
    },
    mounted () {
      this.getStatistic()
      this.getCircleStatistic()
    },

    methods: {

      //获取条状统计图数据
      getStatistic () {
        this.axios.post('/data/test/statistic').then((response) => {
          console.log(response.data)
          this.data = response.data
          this.drawLine()
        }).catch((response) => {
          console.log(response)
        })
      },

      //获取柱状统计图数据
      //获取数据
      getCircleStatistic () {
        this.axios.post('/data/test/circleStatistic').then((response) => {
          console.log(response.data)
          this.drawCircle(response.data)
        }).catch((response) => {
          console.log(response)
        })
      },

      //柱状图
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        var chart = this.$refs.chart
        console.log(JSON.stringify(this.data) + 'data')
        var xList = []
        var yList = []

        //对时间排序
        this.data.sort(function (a, b) {
          return a.create_date < b.create_date ? -1 : 1
        })

        if (this.data && this.data.length > 0) {
          for (var i = 0; i < this.data.length; i++) {
            xList.push(this.data[i].create_date)
            yList.push(this.data[i].money)
          }
        }
        if (chart) {
          let myChart = echarts.init(chart)
          // 绘制图表
          myChart.setOption({
            title: {text: '本年花费'},
            tooltip: {},
            xAxis: {
              data: xList
            },
            yAxis: {},
            series: [{
              name: '花费金额',
              type: 'bar',
              data: yList
            }],

          })
        }
      },

      //饼图
      drawCircle (data) {
        var myChart = echarts.init(this.$refs.main)

        var xList = []
        if (data && data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            var object = new Object()
            object.name = data[i].cname
            object.value = data[i].money
            xList.push(object)
          }
        }
        myChart.setOption({

          title: {text: '角色花费数据'},
          //提示框组件,鼠标移动上去显示的提示内容
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
          },
          series: [{

            type: 'pie',    // 设置图表类型为饼图
            radius: '75%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            data: xList        // 数据数组，name 为数据项名称，value 为数据项值

          }],
          //标签
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

              textStyle: {
                align: 'center',
                baseline: 'middle',
                fontFamily: '微软雅黑',
                fontSize: 15,
                fontWeight: 'bolder'
              }
            }
          }
        })
      }
    }

  }

</script>
/**
* 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
* 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
*/
<!--#main {
width: 100%;
height: 100%;
}-->
#main{
width: '300px';
height: '300px'
}


<style scoped>

</style>
