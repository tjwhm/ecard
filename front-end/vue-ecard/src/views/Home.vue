<template>
  <div class="home">
    <Header subheadings="Home"/>
    <div style="height: 20px;"/>
    <div class="flex-cashblock-container">
      <CashBlock v-if="metadata" title-zh="当前余额" title-en="Current Balance" :amount="metadata.currentBalance"/>
      <CashBlock v-if="metadata" title-zh="上次消费" title-en="Last Transaction" :amount="metadata.lastAmount"/>
      <CashBlock v-if="metadata" title-zh="过去 30 天消费" title-en="Recent Spendings" :amount="metadata.recentTotal"/>
      <CashBlock v-if="metadata" title-zh="过去 30 天日均" title-en="Daily Average" :amount="metadata.dailyAverage"/>
    </div>
    <div style="height: 70px;"/>
    <router-link to="/detail"><button>详单查询</button></router-link>
    <button @click=showReportLossConfirm>挂失</button>
    <router-link to="/about"><button>帮助文档</button></router-link>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import CashBlock from "@/components/CashBlock.vue";
import Footer from "@/components/Footer.vue";

import Confirm from '@/components/MessageBox.vue'
import MessageBox from '@/components/MessageBox.vue'
import { create } from 'vue-modal-dialogs'

export default {
  name: "home",
  components: {
    Header,
    CashBlock,
    Footer
  },
  data() {
    return {
      records: undefined,
      metadata: undefined,
    };
  },
  methods: {
    init: function() {
      let sourceUrl = "https://api.myjson.com/bins/193so2";
      fetch(sourceUrl)
        .then(response => response.json())
        .then(json => {
          this.records = json.data;
          let mt = require("@/methods/mt.js");
          this.metadata = mt.toMetadata(this.records);
        });
    },
    showReportLossConfirm() {
      const messageBox = create(MessageBox, 'title', 'content')
      messageBox("Confirm", "是否确定挂失？为安全考虑，挂失后卡片将暂时无法消费。若需解挂，请向财务处申请。")
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="scss">
</style>
