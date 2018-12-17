<template>
  <div class="login">
    <router-link to="/api/login"><button>使用天外天帐号登录</button></router-link>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped lang="scss">
input {
  display: block;
  margin: 0px 0 30px;
}
</style>
