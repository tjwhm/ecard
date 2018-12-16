<template>
  <div class="starter">
    <Header subheadings="Welcome"/>
    <div style="height: 70px;"/>
    <Login v-show="!this.loggedIn"/>
    <div style="height: 50px;"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";

export default {
  name: "starter",
  components: {
    Header,
    Footer,
    Login
  },
  data() {
    return {
      loggedIn: true
    };
  },
  methods: {
    redirectToSeparateHome: function() {
      this.$http
        .get("userinfo")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          if (json.error_code == 0) {
            this.loggedIn = true;
            if (json.data.user_type == 0) {
              this.$router.push("home");
            } else if (json.data.user_type == 1) {
              this.$router.push("merchant");
            } else {
              this.$router.push("admin");
            }
          } else {
            this.loggedIn = false;
          }
        });
    }
  },
  created() {
    this.redirectToSeparateHome();
  }
};
</script>

<style scoped lang="scss">
</style>
