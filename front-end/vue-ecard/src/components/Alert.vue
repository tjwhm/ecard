<template>

    <div class="alert dialog-mask" @click="$close">
    <div class="dialog-content">
      <h1 class="font-condensed">{{ title }}</h1>
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <footer>
        <button type="text" size="mini" @click="$close">{{ buttonText }}</button>
      </footer>
    </div>
  </div>

</template>

<style scoped lang="scss">

.dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.85);
  color: #eee;
  text-align: center;
}

.dialog-content {
  max-width: 80%;
}

button {
  margin: 0 15px;
}

h1 {
  font-size: 70px;
  margin: 10px auto;
}

p {
  margin: 10px 0 30px;
}

</style>
