class LoggerDetection {

    constructor() { this.ipDict = {} } 
    
    parseLine(line){
        let splittedLine = line.split(",")

        if (this.ipDict[splittedLine[0]]==null){
            this.ipDict[splittedLine[0]] = 0
        }

        if(splittedLine[2] == "FAILURE"){
            this.ipDict[splittedLine[0]] = this.ipDict[splittedLine[0]] + 1
        }

        if(this.ipDict[splittedLine[0]] >= 5){
            return splittedLine[0]   
        }

        return null
    }
 
}

const lineReader = require('line-reader');
var logger = new LoggerDetection()
var suspiciousIP = null;
lineReader.eachLine('./logLines.txt', function(line){
     suspiciousIP = logger.parseLine(line)
}, function (err) {
    if (err) throw err;
    if(suspiciousIP=='80.238.9.179') console.log("TEST PASSED")
})
