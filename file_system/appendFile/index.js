var fs = require('fs');

/* 
fs.appendFile() method APPENDS specified content to a file.
If the file does not exist, the file will be created.
*/

fs.appendFile('index.html', 'Hello Ved Bulsara', function(err){
    if(err) throw err;
    console.log("File saved!");
});
