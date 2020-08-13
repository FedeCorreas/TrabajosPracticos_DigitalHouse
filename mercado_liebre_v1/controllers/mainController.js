const fs = require('fs');
const path = require('path');

function readHTML(__filename){
    let archivoHTML = fs.readFileSync(path.join(__dirname + "/../views/" + __filename + ".html"), "utf-8");
    return archivoHTML;
}

let mainController = {
    index: function (req, res){
        let archivoHTML = readHTML("index");
        res.send(archivoHTML);
    }
}

module.exports = mainController;