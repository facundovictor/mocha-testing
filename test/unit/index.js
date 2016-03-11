var path = require("path");
var fs = require("fs");

fs.readdirSync(__dirname).forEach(function(file) {
  if (file.indexOf(".js",file.length - 3) !== -1 && file !== "index.js"){
    require('./' + file);
  }
});
