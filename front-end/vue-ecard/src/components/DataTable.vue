<template>
    <div class="data-table">
      <div class="table-row" :key="record.id" v-for="record in records">
        {{record.location}}
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
  padding: 20px;
  margin: 6px;
  background: red;
  display: flex;
}

</style>
