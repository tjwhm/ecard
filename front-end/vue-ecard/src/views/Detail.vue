<template>
  <div class="detail">
    <Header subheadings="Detail"/>
    <div style="height: 20px;"/>
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

export default {
  name: "detail",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
</style>
