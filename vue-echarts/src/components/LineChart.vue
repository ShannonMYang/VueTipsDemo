<!--
 * @Author: ShannonMYang
 * @Date: 2020-03-19 16:24:08
 * @LastEditTime: 2020-04-02 16:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-echarts\src\components\LineChart.vue
 -->
<template>
  <div id="line" class="lineChart"></div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {
      xData: [],
      yData: []
    };
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("line"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "折线图示例",
          left: "left"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xData
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.yData,
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#52b7ff"
            },
            areaStyle: {
              color: "#52b7ff",
              opacity: 0.3
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    getLocalData() {
      this.$http({
        method: "GET",
        url: "http://localhost:8080/json/test.json"
      }).then(
        response => {
          this.xData = response.xdata;
          this.yData = response.ydata;
          this.drawLine();
        },
        err => {}
      );
    }
  },
  created() {
    this.getLocalData();
  }
};
</script>

<style scoped>
.lineChart {
  height: 100%;
  width: 100%;
}
</style>