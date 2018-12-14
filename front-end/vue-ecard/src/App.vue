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
  font-family: "Montserrat", "Avenir", "Segoe UI", Helvetica, Arial, "等线",
    "微软雅黑", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  transition: all 0.2s;
  box-sizing: border-box;
}

*::selection {
  background-color: #2f5b6b;
  color: #eee;
}

a {
  color: inherit;
}

a:hover {
  opacity: 0.8;
  text-decoration: none;
}

@mixin sized-input() {
  padding: 8px 15px;
  font-weight: bold;
  font-size: 20px;
}

button {
  @include sized-input();
  outline: none;
  box-shadow: none;
  background: none;
  border: none;
  background-color: #eee;
  color: #141414;
  cursor: pointer;
  margin-right: 25px;
  min-width: 120px;
  display: inline-block;
}

button:hover {
  transform: translateY(3px);
  opacity: 0.9;
}

button:active {
  transform: translateY(3px) scale(1.03);
}

input {
  @include sized-input();
  font-size: 18px;
  border: none;
  border-bottom: 1px solid currentColor;
  background: none;
  color: #eee;
}

input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input {
  margin-right: 30px;
}

.font-condensed {
  font-family: "Directors", "FF Din", "Franklin Gothic", "等线", "微软雅黑",
    sans-serif;
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
  margin-bottom: 20vh;
  color: #eee;
}

.fixed-width-container {
  max-width: 900px;
  margin: 0 auto;
}

.flex-cashblock-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 980px) {
  .fixed-width-container {
    width: 87%;
  }

  img {
    max-width: 100%;
  }

  .flex-cashblock-container {
    flex-wrap: wrap;
    .cashblock {
      margin-right: 20px;
    }
  }

  input,
  button {
    margin-bottom: 20px;
  }
}
</style>
