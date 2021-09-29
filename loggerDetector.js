class LoggerDetector {

    constructor() { this.ipDict = {} } 
    
    parseLine(line){
        let splittedLine = line.split(",")
        let ip = splittedLine[0]
        let date = splittedLine [1]
        let status = splittedLine[2]
        
        if (this.ipDict[ip]==null){
            this.ipDict[ip] ={ count: 0, timeStamps: [] } 
        }

        if(status == "FAILURE"){
            this.ipDict[ip].count += 1
            this.ipDict[ip].timeStamps.push(date)
            
            while( (date - this.ipDict[ip].timeStamps[0]) > 300 ){
                this.ipDict[ip].timeStamps.shift()
                this.ipDict[ip].count -= 1
            }
            
        }
        
        if(this.ipDict[ip].count >= 5){
            return ip   
        }
        
        return null
    }
 
}
module.exports = LoggerDetector
