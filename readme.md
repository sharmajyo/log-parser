The task
The task is to parse a log file containing HTTP requests and to report on its contents. For a given log file we want to know: • The number of unique IP addresses
• The top 3 most visited URLs
• The top 3 most active IP addresses

solution
The solution is written in js (node 12)

index.js is the main file to run for finding desired output.

to run the programme, cd to this folder and run
node index.js

Unit test can be run using jest or node test. Package.json is added to support unit testing/jest.
