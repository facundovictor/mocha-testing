var scope = this;
var path = require("path");
var fs = require("fs");
var jsf = require('json-schema-faker');

fs.readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf(".js",file.length - 3) !== -1 && file != "index.js"){
    var module_name = file.slice(0,file.length - 3);
    module = require('./' + file);
    scope[module_name] = jsf(module);
  }
});

module.exports = scope;
