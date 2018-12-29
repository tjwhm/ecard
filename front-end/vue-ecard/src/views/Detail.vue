<template>
  <div class="detail">
    <Header subheadings="Detail"/>
    <div style="height: 20px;"/>
    <TitleCluster title-zh="收支趋势" title-en="Recent Flow Chart"></TitleCluster>
    <div id="chart-container"></div>
    <TitleCluster title-zh="流水详单" title-en="Recent Flow Details"></TitleCluster>
    <DataTable :records="this.records"></DataTable>
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
import TitleCluster from "@/components/TitleCluster.vue";

export default {
  name: "detail",
  components: {
    Header,
    Footer,
    DataTable,
    TitleCluster
  },
  data() {
    return {
      records: []
    };
  },
  methods: {
    init: function() {
      this.$http
        .get("records", this.store.reqConfig)
        .then(response => response.json())
        .then(json => {
          this.records = json.data;
          this.initChart();
        });
    },
    initChart: function() {
      let echarts = require("echarts/lib/echarts");
      // 引入柱状图
      require('echarts/lib/chart/bar');
      // 引入提示框和标题组件
      require('echarts/lib/component/tooltip');
      require('echarts/lib/component/title');
      var myChart = echarts.init(document.getElementById("chart-container"));
      myChart.setOption({
        tooltip: {},
        yAxis: {},
        xAxis: {
          data: this.records.map((record, i, arr) => arr.length - i),
          inverse: true
        },
        series: [
          {
            name: "Amount",
            type: "bar",
            data: this.records.map(function(record) {
              let processedValue = record.value;
              if (record.record_type == 0) processedValue = -processedValue;
              return processedValue;
            })
          }
        ]
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="scss">
#chart-container {
  height: 300px;
}
</style>
