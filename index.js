
var file_stream = require('fs'),
    readline = require('readline');
const { processLine } = require("./main")
const args = process.argv;
if(!args[2]){
    console.log("No File path");
    return;
}
var fs = file_stream.createReadStream(args[2])
fs.on('error', function (err) {
    console.log("Invalid file Type",err)
});
var rd = readline.createInterface({
    input: fs,
    
});
rd.on('line', function (line) {
    processLine(line)
});

rd.on('error', function (line) {
   console.log("Invalid file Input!")
});