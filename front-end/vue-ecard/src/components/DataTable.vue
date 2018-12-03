<template>
    <div class="data-table">
      <div class="table-row" :key="record.id" v-for="record in records">
        <span class="table-prop">{{record.timestamp}}</span>
        <span class="table-prop">{{record.location}}</span>
        <span class="table-prop">{{record.value}}</span>
        <span class="table-prop">{{record.location}}</span>
        <span class="table-prop">{{record.latest_balance}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "DataTable",
  data() {
    return {
      records: []
    };
  },
  methods: {
    initTable: function() {
      fetch(this.sourceUrl)
        .then(response => response.json())
        .then(json => {
          this.records = json.data
          console.log(this.records)
        });
    }
  },
  props: {
    sourceUrl: String
  },
  created() {
    this.initTable()
  }
};
</script>

<style scoped lang="scss">

.table-row {
  padding: 12px;
  margin: 6px;
  background: rgba(255,255,255,0.05);
  display: flex;
  justify-content: space-around;

  table-prop {
    display: inline-block;
  }
}

</style>
