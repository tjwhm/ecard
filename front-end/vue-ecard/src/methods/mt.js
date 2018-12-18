module.exports = {
  toMetadata: function(originalData, type) {
    let res = {
      currentBalance: 0,
      lastAmount: 0,
      recentTotal: 0,
      dailyAverage: 0
    };
    if (originalData.length) {
      res["currentBalance"] = originalData[0].latest_balance;
    }

    let stemData = originalData.filter(record => record.record_type === type);
    if (stemData.length) {
      res["lastAmount"] = stemData[0].value;
      let sumAmount = stemData
        .map(record => record.value)
        .reduce((current, accu) => current + accu, 0);
      res["recentTotal"] = sumAmount;
      res["dailyAverage"] = sumAmount / originalData.length;
    }
    for (let pr in res) {
      res[pr] = res[pr].toFixed(2);
    }
    return res;
  }
};
