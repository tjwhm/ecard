<template>
    <div class="title-cluster">
        <div class="title-zh font-condensed">{{ titleZh }}</div>
        <div class="title-en">{{ titleEn }}</div>
    </div>
</template>

<script>
export default {
  name: "TitleCluster",
  props: {
    titleZh: String,
    titleEn: String
  }
};
</script>

<style scoped lang="scss">
.title-cluster {
  margin: 25px 0 15px;
}
.title-zh,
.title-en {
  text-transform: uppercase;
  font-size: 26px;
}

.title-en {
  letter-spacing: 0.5px;
  font-size: 15px;
  opacity: 0.4;
  margin-top: 5px;
  font-weight: bold;
}
</style>
