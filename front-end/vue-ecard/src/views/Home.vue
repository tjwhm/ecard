<template>
  <div class="home">
    <Header subheadings="Home"/>
    <div style="height: 20px;"/>
    <div class="flex-cashblock-container">
      <CashBlock title-zh="当前余额" title-en="Current Balance" amount="20.90"/>
      <CashBlock title-zh="上次消费" title-en="Last Transaction" amount="12.00"/>
      <CashBlock title-zh="过去 30 天消费" title-en="Recent Spendings" amount="893.75"/>
      <CashBlock title-zh="过去 30 天日均" title-en="Daily Average" amount="40.77"/>
    </div>
    <div style="height: 70px;"/>
    <button>详单查询</button><button>挂失</button><button>帮助</button>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import CashBlock from "@/components/CashBlock.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    CashBlock,
    Footer
  }
};
</script>

<style scoped lang="scss">
</style>

<style>
.flex-cashblock-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
