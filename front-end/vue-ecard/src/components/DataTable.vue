<template>
    <div class="data-table">
      <div class="table-row">
        <span class="table-prop a">交易时间</span>
        <span class="table-prop b">商家场所</span>
        <span class="table-prop c">交易值</span>
        <span class="table-prop d">交易类型</span>
        <span class="table-prop e">交易后余额</span>
      </div>
      <div class="table-row" :key="record.id" v-for="record in records">
        <span class="table-prop a">{{new Date(record.timestamp).toLocaleDateString()}}</span>
        <span class="table-prop b">{{record.location}}</span>
        <span class="table-prop c">{{record.value}}</span>
        <span class="table-prop d">{{typeToStr(record.record_type)}}</span>
        <span class="table-prop e">{{record.latest_balance}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    records: Array
  },
  methods: {
    typeToStr(type) {
      return type === 0 ? "消费" : "充值";
    }
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

  .a,
  .b,
  .c,
  .d,
  .e {
    width: 20%;
  }

  @media screen and (max-width: 980px) {

    .a {
      display: none;
    }

  }

}
</style>
