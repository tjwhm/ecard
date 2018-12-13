<template>
  <div class="starter">
    <Header subheadings="Login"/>
    <div style="height: 70px;"/>
    <input type="text" placeholder="用户名">
    <input type="password" placeholder="密码">
    <div style="height: 30px;"/>
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
input {
  display: block;
  margin: 0px 0 30px;
}

</style>
