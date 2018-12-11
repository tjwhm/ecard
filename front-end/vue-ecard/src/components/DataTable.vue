<template>
    <div class="data-table">
      <div class="table-row">
        <span class="table-prop a">消费时间</span>
        <span class="table-prop b">消费商家场所</span>
        <span class="table-prop c">交易值</span>
        <span class="table-prop d">交易后余额</span>
      </div>
      <div class="table-row" :key="record.id" v-for="record in records">
        <span class="table-prop a">{{new Date(record.timestamp).toLocaleString()}}</span>
        <span class="table-prop b">{{record.location}}</span>
        <span class="table-prop c">{{record.value}}</span>
        <span class="table-prop d">{{record.latest_balance}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    records: Array
  }
};
</script>

<style scoped lang="scss">
.table-row {
  padding: 12px;
  margin: 6px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-around;
  text-align: center;

  table-prop {
    display: inline-block;
  }

  .b,
  .c,
  .d {
    width: 20%;
  }

  .a {
    width: 40%;
  }
}
</style>
