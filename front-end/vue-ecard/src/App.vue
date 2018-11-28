<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <div class="fixed-width-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Directors";
  font-weight: bold;
  src: url("assets/fonts/tt_directors_bold-webfont.woff2") format("woff2"),
    url("assets/fonts/tt_directors_bold-webfont.woff") format("woff");
  font-style: normal;
}

@font-face {
  font-family: "Directors";
  font-weight: normal;
  src: url("assets/fonts/tt_directors_regular-webfont.woff2") format("woff2"),
    url("assets/fonts/tt_directors_regular-webfont.woff") format("woff");
  font-style: normal;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

* {
  font-family: "Montserrat", "Avenir", "Segoe UI", Helvetica, Arial, "等线", "微软雅黑", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

a {
  color: inherit;
}

.font-condensed {
  font-family: "Directors", "FF Din", "Franklin Gothic", "等线", "微软雅黑", sans-serif;
}

.left {
  float: left;
}

.right {
  float: right;
}

.clearfix {
  float: auto;
}

body {
  background: #141414;
  margin-top: 20vh;
  color: #eee;
}

.fixed-width-container {
  max-width: 900px;
  margin: 0 auto;
}



</style>
