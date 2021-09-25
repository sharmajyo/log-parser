const LogParser = require('./parser/logParser');
const logParser = new LogParser('.stub/programming-task-example-data.log');

// find:
// The number of unique IP addresses
// The top 3 most visited URLs
// The top 3 most active IP addresses

console.log('frequent urls: ', logParser.findMostVisitedUrls());
console.log('frequent IPs: ', logParser.findMostActiveIPs());
console.log('unique IPs: ', logParser.findUniqueIPCount());



