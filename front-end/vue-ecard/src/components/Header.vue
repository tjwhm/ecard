<template>
  <div class="header-container">
    <div class="header-row-container">
      <img class="logo-ambient" src="../assets/hand-with-card.svg">
      <img class="ecard-logo" alt="Vue logo" src="../assets/logo.svg">
      <small class="subheadings font-condensed">{{ subheadings }}</small>
      <div class="header-icons right">
            
      </div>
    </div>
    <hr class="header-divider"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    subheadings: String
  }
};
</script>

<style scoped lang="scss">
.header-container {
}

.header-row-container {
  position: relative;
}

.ecard-logo {
  width: 170px;
  margin-right: 20px;
}

.logo-ambient {
  position: absolute;
  z-index: -1;
  opacity: 0.05;
  width: 700px;
  left: -360px;
  top: -100px;
}

.subheadings {
  font-size: 50px;
  font-weight: bold;
  opacity: 0.4;
}

hr.header-divider {
  border: none;
  height: 7px;
  width: 60px;
  background-color: #eee;
  display: inline-block;
  margin-top: 80px;
}
</style>
