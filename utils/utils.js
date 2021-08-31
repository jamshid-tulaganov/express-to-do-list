const fs = require("fs");

function writeFile(directory,file){
    fs.writeSync(directory,JSON.stringify(file,null,2),"utf8",(error) =>{
        console.log(error);
    })
}

module.exports = {
    writeFile
}