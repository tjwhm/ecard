<template>
  <div class="admin">
    <Header subheadings="Admin"/>
    <div style="height: 70px;"/>
    <TitleCluster title-zh="为消费者充值" title-en="Record deposit"></TitleCluster>
    <div>
      <input v-model.number="topupInfo.card_id" type="number" placeholder="消费者卡号">
      <input v-model.number="topupInfo.value" type="number" placeholder="充值额">
      <button @click="confirmTopup">确认充值</button>
    </div>
    <div style="height: 50px;"/>
    <TitleCluster title-zh="为商家提现" title-en="Record withdraw"></TitleCluster>
    <div>
      <input v-model.number="withdrawInfo.card_id" type="number" placeholder="商家卡号">
      <input v-model.number="withdrawInfo.value" type="number" placeholder="取现额">
      <button @click="confirmWithdraw">确认提现</button>
    </div>
    <div style="height: 50px;"/>
    <TitleCluster title-zh="查询用户流水" title-en="Spending Details Lookup"></TitleCluster>
    <div>
      <input v-model.number="recordLookupInfo.card_id" type="number" placeholder="用户帐号">
      <button @click="fetchLookupRequest">查询近期活动</button>
    </div>
    <div style="height: 50px;"/>
    <DataTable :records="this.records"></DataTable>
    <div style="height: 50px;"/>
    <TitleCluster title-zh="补办记录" title-en="Record replacement"></TitleCluster>
    <div>
      <input v-model.number="reactivateInfo.card_id" type="number" placeholder="消费者卡号">
      <button @click="confirmReactivation">确认补办完成（解除挂失状态）</button>
    </div>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TitleCluster from "@/components/TitleCluster.vue";
import DataTable from "@/components/DataTable.vue";

import Alert from "@/components/Alert.vue";
import MessageBox from "@/components/MessageBox.vue";
import { create } from "vue-modal-dialogs";
const messageBox = create(MessageBox, "title", "content");
const alertBox = create(Alert, "title", "content", "buttonText");

export default {
  name: "starter",
  components: {
    Header,
    Footer,
    DataTable,
    TitleCluster
  },
  data() {
    return {
      records: undefined,
      metadata: undefined,
      topupInfo: {
        change_type: 0
      },
      withdrawInfo: {
        change_type: 1
      },
      recordLookupInfo: {},
      reactivateInfo: {
        change_type: 1
      }
    };
  },
  methods: {
    async confirmTopup() {
      if (await messageBox("Confirm", "是否确认充值？")) {
        this.$http
          .post("balance", this.topupInfo, this.store.reqConfig)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if (json.error_code === 0) {
              alertBox("Succeed", "充值成功", "关闭");
            }
            else {
              alertBox("Oops!", "操作失败：" + json.message, "关闭");
            }
          });
      }
    },
    async confirmWithdraw() {
      if (await messageBox("Confirm", "是否确认为商家提现？")) {
        this.$http
          .post("balance", this.withdrawInfo, this.store.reqConfig)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if (json.error_code === 0) {
              alertBox("Succeed", "提现成功", "关闭");
            }
            else {
              alertBox("Oops!", "操作失败：" + json.message, "关闭");
            }
          });
      }
    },
    fetchLookupRequest() {
      this.$http
        .get(
          "records",
          {...this.store.reqConfig, params: {
            "card_id": this.recordLookupInfo.card_id,
          }}
        )
        .then(response => response.json())
        .then(json => {
          debugger;
          this.records = json.data;
        });
    },
    async confirmReactivation() {
      if (await messageBox("Confirm", "是否确认补办完成并解挂？")) {
        this.$http
          .put("card_status", this.reactivateInfo, this.store.reqConfig)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if (json.error_code === 0) {
              alertBox("Succeed", "解挂成功", "关闭");
            }
            else {
              alertBox("Oops!", "操作失败：" + json.message, "关闭");
            }
          });
      }
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
</style>
