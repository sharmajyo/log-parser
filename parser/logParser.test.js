const LogParser = require('./logParser');

let logParser;
beforeEach(() => {
  logParser = new LogParser('./.stub/programming-task-example-data.log');
})
describe('LogParser', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
  it('should thow error if log file is not provided', () => {
    logParser = new LogParser();
    expect(mockExit).toHaveBeenCalledWith(1);
  })
  it('should parse a log file and find all valid ips', () => {
    expect(logParser.ipAddresses.length).toBe(26);
  })
  it('should parse a log file and find all valid urls', () => {
    expect(logParser.urls.length).toBe(2);
  })

  describe('findUniqueIPCount', () => {
    it('should find all unique ip counts', () => {
      const uniqueIps = logParser.findUniqueIPCount();
      expect(uniqueIps).toEqual(["177.71.128.21", "168.41.191.40", "168.41.191.41", "0.9.58.49", "168.41.191.9", "168.41.191.34", "50.112.00.28", "50.112.00.11", "72.44.32.11", "72.44.32.10", "168.41.191.43", "79.125.00.21"]);
    })
  });

  describe('findMostVisitedUrls', () => {
    it('should find top most frequent urls based on frequency count', () => {
      const topUrls = logParser.findMostVisitedUrls(1);
      expect(topUrls).toEqual([{
        count: 1, key: 'http://example.net/faq/'
      }]);
    })
    it('should find three top most frequent urls if no frequency count is given', () => {
      const topUrls = logParser.findMostVisitedUrls()
      expect(topUrls).toEqual([{ count: 1, key: 'http://example.net/faq/' },
      { count: 1, key: 'http://example.net/blog/category/meta/' }]);
    })
  });

  describe('findMostActiveIPs', () => {
    it('should find top most frequent ips based on frequency count', () => {
      const topIps = logParser.findMostActiveIPs(1);
      expect(topIps).toEqual([{ count: 4, key: '168.41.191.40' }]);
    })
    it('should find three top most frequent ips if no frequency count is given', () => {
      const topIps = logParser.findMostActiveIPs();
      expect(topIps).toEqual([{ count: 4, key: '168.41.191.40' },
      { count: 3, key: '177.71.128.21' },
      { count: 3, key: '0.9.58.49' }]);
    })
  });
})