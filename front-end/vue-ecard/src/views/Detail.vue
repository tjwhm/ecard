<template>
  <div class="detail">
    <Header subheadings="Detail"/>
    <div style="height: 20px;"/>
    <div id="chart-container"></div>
    <DataTable sourceUrl="https://api.myjson.com/bins/193so2"></DataTable>
    <div style="height: 70px;"/>
    <router-link to="/home"><button>返回 Home</button></router-link>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  name: "detail",
  components: {
    Header,
    Footer,
    DataTable
  },
  methods: {
    initChart: function() {
      let echarts = require("echarts");
      console.log(document.getElementById("chart-container"));
      var myChart = echarts.init(document.getElementById("chart-container"));
      myChart.setOption({
        tooltip: {},
        yAxis: {},
        xAxis: {
          data: [
            5,
            20,
            36,
            10,
            10,
            20,
            20,
            36,
            10,
            10,
            36,
            20,
            36,
            10,
            10,
            10,
            10,
            20
          ]
        },
        series: [
          {
            name: "Amount",
            type: "bar",
            data: [
              5,
              20,
              36,
              10,
              10,
              20,
              20,
              36,
              10,
              10,
              36,
              20,
              36,
              10,
              10,
              10,
              10,
              20
            ]
          }
        ]
      });
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style scoped lang="scss">
#chart-container {
  height: 300px;
}
</style>
