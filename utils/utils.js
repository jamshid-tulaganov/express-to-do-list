const fs = require("fs");

function writeFile(directory,file){
  fs.writeFileSync(directory,JSON.stringify(file,null,2),"utf-8")
}

module.exports = {
    writeFile
}