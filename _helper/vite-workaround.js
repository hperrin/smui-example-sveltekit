import path from "path";
// var path = require("path"),
import fs from "fs";
//   fs = require("fs");

function removeFiles(startPath, filter) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      removeFiles(filename, filter); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      console.log("-- removing: ", filename);
      fs.unlinkSync(filename);
    }
  }
}
console.log("Starting Vite Workaround Scriot");
removeFiles("node_modules/@material", ".js.map");
