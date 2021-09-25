const fs = require('fs');
const { getStringsCount, sortStringsByCount } = require('../util/util');
const IP_VALIDATOR = /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]? -)/g;
const URL_VALIDATOR = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g;



class LogParser {
  constructor(logFilePath) {
    if (!logFilePath) {
      console.log('Invalid input. Please provide a log file');
      process.exit(1);
    } else {
      this.logData = fs.readFileSync(logFilePath, 'utf8');
      this.parseLogFile();
    }
  }

  parseLogFile() {
    this.ipAddresses = this.logData.match(IP_VALIDATOR);
    this.urls = this.logData.match(URL_VALIDATOR);

    if (this.ipAddresses) {
      this.ipAddresses = this.ipAddresses.map((ip) => ip.replace(' -', ''));
    }
  }

  findUniqueIPCount() {
    const visitedIPs = getStringsCount(this.ipAddresses);
    return Object.keys(visitedIPs);
  }

  // when two urls are visited with same frequency, first one is count
  findMostVisitedUrls(frequencyCount = 3) {
    const mostFreq = sortStringsByCount(this.urls);
    return mostFreq.slice(0, frequencyCount);
  }

  // when two ips are visited with same frequency, first one is count
  findMostActiveIPs(frequencyCount = 3) {
    const mostFreq = sortStringsByCount(this.ipAddresses);
    return mostFreq.slice(0, frequencyCount);
  }
}

module.exports = LogParser;