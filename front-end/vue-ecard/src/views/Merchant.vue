<template>
  <div class="home">
    <Header subheadings="Merchant Index"/>
    <div style="height: 20px;"/>
    <div class="flex-cashblock-container">
      <CashBlock title-zh="当前资产" title-en="Current Balance" amount="20.90"/>
      <CashBlock title-zh="上次交易额" title-en="Last Earnings" amount="12.00"/>
      <CashBlock title-zh="过去 30 天交易额" title-en="Recent Earnings" amount="893.75"/>
      <CashBlock title-zh="过去 30 天日均" title-en="Daily Average" amount="40.77"/>
    </div>
    <TitleCluster title-zh="消费趋势" title-en="Recent Spendings Chart"></TitleCluster>
    <div id="chart-container"></div>
    <TitleCluster title-zh="发起交易" title-en="Record New Deal"></TitleCluster>
    <div>
      <input type="number" placeholder="消费者帐号">
      <input type="number" placeholder="本次交易额">
      <button>确认扣费</button>
    </div>
    <TitleCluster title-zh="流水详单" title-en="Recent Spendings Details"></TitleCluster>
    <DataTable :records="this.records"></DataTable>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import CashBlock from "@/components/CashBlock.vue";
import Footer from "@/components/Footer.vue";
import DataTable from "@/components/DataTable.vue";
import TitleCluster from "@/components/TitleCluster.vue";

export default {
  name: "merchant",
  components: {
    Header,
    CashBlock,
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
      let sourceUrl = "https://api.myjson.com/bins/193so2";
      fetch(sourceUrl)
        .then(response => response.json())
        .then(json => {
          this.records = json.data;
          this.initChart();
        });
    },
    initChart: function() {
      let echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("chart-container"));
      myChart.setOption({
        tooltip: {},
        yAxis: {},
        xAxis: {
          data: this.records.map(record => record.value)
        },
        series: [
          {
            name: "Amount",
            type: "bar",
            data: this.records.map(record => record.value)
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
input {
  margin-right: 10px;
}
</style>
