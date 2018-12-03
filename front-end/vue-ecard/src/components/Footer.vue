<template>
  <div class="footer-container">
    <hr />
    <div class="footer-flex-container">
      <span>Copyright © twtstudio x Tianjin univ. ecard management centre 2018. All rights reserved.</span>
      <span>
        <a href="https://coder.twtstudio.com">about us</a> / <a href="https://coder.twtstudio.com/hr">join us</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.footer-flex-container {
  display: flex;
  justify-content: space-between;
  span {
    opacity: 0.3;
    font-size: 10px;
  }
}

hr {
  border: none;
  height: 1px;
  background: #eee;
  opacity: 0.3;
}
</style>
