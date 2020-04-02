<!--
 * @Author: your name
 * @Date: 2020-03-19 15:51:34
 * @LastEditTime: 2020-04-02 14:55:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-echarts\src\views\About.vue
 -->
<template>
  <div class="line-div">
    <Loading />
    <h1>This is an LineChart page!!!</h1>
    <div class="line-chart">
      <LineChart></LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue';
export default {
  name: 'about',
  components: {
    LineChart
  }
}
</script>

<style lang="scss" scoped>
    .line-div {
        height: 500px;
        margin-top: 15px;
        padding: 10px 10px 10px 10px;
        background-color: #fff;
        /*边框线宽度*/
        border: 1px solid #ccc;
        /*圆角化*/
        border-radius: 5px;
        /*阴影效果*/
        box-shadow: 0 0 4px 0 #ccc;
    }

    .line-chart {
        height: 300px;
        margin-top: 15px;
        padding: 10px 10px 10px 10px;
        background-color: #fff;
        /*边框线宽度*/
        border: 1px solid #ccc;
        /*圆角化*/
        border-radius: 5px;
        /*阴影效果*/
        box-shadow: 0 0 4px 0 #ccc;
    }

    .line-chart:hover {
        height: 300px;
        margin-top: 15px;
        padding: 10px 10px 10px 10px;
        background-color: #fff;
        /*边框线宽度*/
        border: 1px solid #ccc;
        /*圆角化*/
        border-radius: 5px;
        /*阴影效果*/
        box-shadow: 0 0 8px 0 rgb(173, 69, 69);
    }
</style>
