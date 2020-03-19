<!--
 * @Author: ShannonMYang
 * @Date: 2020-03-19 16:24:08
 * @LastEditTime: 2020-03-19 17:49:13
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
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("line"));
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: '折线图示例',
                        left: 'left'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 1578, 632, 1290, 321, 753],
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            color: '#52b7ff'
                        },
                        areaStyle: {
                            color: '#52b7ff',
                            opacity: 0.3
                        },
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
        },
        mounted() {
            this.drawLine();
        }
    }
</script>

<style scoped>
.lineChart {
    height: 100%; 
    width: 100%;
}
</style>