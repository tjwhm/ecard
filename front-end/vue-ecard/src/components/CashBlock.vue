<template>
    <div>
        <div class="title-zh font-condensed">{{ titleZh }}</div>
        <div class="title-en font-condensed">{{ titleEn }}</div>
        <div class="amount font-condensed">{{ amount }}</div>
    </div>
</template>

<script>
export default {
  name: "CashBlock",
  props: {
    titleZh: String,
    titleEn: String,
    amount: String
  }
};
</script>

<style scoped lang="scss">

.title-zh, .title-en {
    opacity: 0.3;
    text-transform: uppercase;
    font-size: 22px;
}

.title-en {
    font-weight: bold;
    letter-spacing: 0.5px;
}

.amount {
    font-size: 110px;
}

.amount:after {
    content: " ¥";
    opacity: 0.3;
}

</style>
