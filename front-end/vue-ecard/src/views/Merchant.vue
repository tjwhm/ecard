<template>
  <div class="home">
    <Header subheadings="Merchant Index"/>
    <div style="height: 20px;"/>
    <div class="flex-cashblock-container">
      <CashBlock v-if="metadata" title-zh="当前资产" title-en="Current Balance" :amount="metadata.currentBalance"/>
      <CashBlock v-if="metadata" title-zh="上次交易额" title-en="Last Earnings" :amount="metadata.lastAmount"/>
      <CashBlock v-if="metadata" title-zh="过去 30 天交易额" title-en="Recent Earnings" :amount="metadata.recentTotal"/>
      <CashBlock v-if="metadata" title-zh="每笔平均" title-en="Average Amount" :amount="metadata.dailyAverage"/>
    </div>
    <div style="height: 20px;"/>
    <TitleCluster title-zh="发起交易" title-en="Record New Deal"></TitleCluster>
    <div>
      <input v-model.number="dealInfo.card_id" type="text" placeholder="消费者帐号">
      <input v-model.number="dealInfo.value" type="number" placeholder="本次交易额">
      <button @click="newDeal">确认扣费</button>
    </div>
    <div style="height: 50px;"/>
    <TitleCluster title-zh="消费趋势" title-en="Recent Spendings Chart"></TitleCluster>
    <div id="chart-container"></div>
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

import Alert from "@/components/Alert.vue";
import MessageBox from "@/components/MessageBox.vue";
import { create } from "vue-modal-dialogs";
const messageBox = create(MessageBox, "title", "content");
const alertBox = create(Alert, "title", "content", "buttonText");

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
      records: undefined,
      metadata: undefined,
      dealInfo: {}
    };
  },
  methods: {
    init: function() {
      this.$http
        .get("records", this.store.reqConfig)
        .then(response => response.json())
        .then(json => {
          this.records = json.data;
          let mt = require("@/methods/mt.js");
          this.metadata = mt.toMetadata(this.records, 1);
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
          data: this.records.map((record, i) => i)
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
    },
    async newDeal() {
      if (await messageBox("Confirm", "是否确认交易？")) {
        this.$http
          .post("deal", this.dealInfo, this.store.reqConfig)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            alertBox("Succeed", "交易成功", "关闭");
          });
      }
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
