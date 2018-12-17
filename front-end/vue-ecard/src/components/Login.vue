<template>
  <div class="login">
    <button @click="toLoginApi">使用天外天帐号登录</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    toLoginApi() {
      location.href = location.origin + "/api/login"
    }
  }
};
</script>

<style scoped lang="scss">
input {
  display: block;
  margin: 0px 0 30px;
}
</style>
