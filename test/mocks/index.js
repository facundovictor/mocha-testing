var scope = this;
var path = require("path");
var fs = require("fs");

fs.readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf(".js",file.length - 3) !== -1 && file != "index.js"){
    var module_name = file.slice(0,file.length - 3);
    scope[module_name] = require('./' + file);
  }
});

module.exports = scope;
