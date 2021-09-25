const { getStringsCount, sortStringsByCount } = require('./util');
describe('sortStringsByCount', () => {
  it('should sort array items by freequency', () => {
    expect(sortStringsByCount(['abc', 'xyz', 'abc', 'lmn', 'qrs', 'lmn'])).toEqual([
      { count: 2, key: "abc" },
      { count: 2, key: "lmn" },
      { count: 1, key: "xyz" },
      { count: 1, key: "qrs" },
    ]);
  })
  it('should handle null array', () => {
    expect(sortStringsByCount()).toEqual([]);
  })
})

describe('getStringsCount', () => {
  it('should count occurrences of a word in given string array', () => {
    expect(getStringsCount(['abc', 'xyz', 'abc'])).toEqual({
      abc: 2,
      xyz: 1,
    });
  })
  it('should handle null array', () => {
    expect(getStringsCount()).toEqual({});
  })
})