const loggerDetector = require("./loggerDetector.js")
const lineReader = require('line-reader');

test('given log lines, suspicious IP is detected and returned', () => {
    let logger = new loggerDetector()
    let suspiciousIP = null;
    lineReader.eachLine('./logLines.txt', function(line){
        let returnedVal = logger.parseLine(line)
        if (returnedVal)
            suspiciousIP = returnedVal
    }, function (err) {
        if (err) throw err;
        expect(suspiciousIP).toBe('80.238.9.179');
    })
  });
