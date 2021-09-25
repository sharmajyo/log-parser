const sortStringsByCount = (array) => {
  const frequencyObj = getStringsCount(array);
  const mostFreq = Object.values(frequencyObj).sort((a, b) => {
    if (a.count == b.count) return 0;
    return a.count < b.count ? 1 : -1;
  });

  return mostFreq;
}

const getStringsCount = (array) => {
  let countObject = {};
  if (array) {
    for (const item of array) {
      if (countObject[item]) {
        countObject[item].count++;
      } else {
        countObject[item] = { count: 1, key: item };
      }
    }
  }
  return countObject;
}

module.exports = { getStringsCount, sortStringsByCount };