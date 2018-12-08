<script>
export default {
  name: "MetadataPreprocessor",
  methods: {
    toMetadata: function(originalData) {
      let res = {};
      res["currentBalance"] = originalData[0].latest_balance.toFixed(2);
      res["lastAmount"] = originalData[0].value.toFixed(2);
      let sumAmount = originalData.map(record => record.value).reduce((current, accu) => current+accu, 0);
      res["recentTotal"] = sumAmount.toFixed(2);
      res["dailyAverage"] = (sumAmount / originalData.length).toFixed(2);
      return res;
    }
  }
};
</script>