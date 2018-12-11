<template>
  <div class="starter">
    <Header subheadings="Login"/>
    <div style="height: 70px;"/>
    <router-link to="/home"><button>使用天外天帐号登录</button></router-link>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "starter",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
</style>
