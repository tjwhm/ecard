<template>
  <div class="admin">
    <Header subheadings="Admin"/>
    <div style="height: 70px;"/>
    <TitleCluster title-zh="为消费者充值" title-en="Record deposit"></TitleCluster>
    <div>
      <input type="text" placeholder="消费者帐号">
      <input type="number" placeholder="充值额">
      <button>确认充值</button>
    </div>
    <div style="height: 50px;"/>
    <TitleCluster title-zh="为商家提现" title-en="Record withdraw"></TitleCluster>
    <div>
      <input type="text" placeholder="商家帐号">
      <input type="number" placeholder="取现额">
      <button>确认提现</button>
    </div>
    <div style="height: 50px;"/>
    <TitleCluster title-zh="补办记录" title-en="Record replacement"></TitleCluster>
    <div>
      <input type="text" placeholder="消费者帐号">
      <button>确认补办完成（解除挂失状态）</button>
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

export default {
  name: "starter",
  components: {
    Header,
    Footer,
    TitleCluster
  }
};
</script>

<style scoped lang="scss">
</style>
