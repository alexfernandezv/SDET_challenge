class LoggerDetector {

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

module.exports = LoggerDetector;
