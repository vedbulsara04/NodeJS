/*
To rename a file with the File System module,  
use the fs.rename() method.
*/
const fs = require('fs');

fs.rename('lol.txt', 'demo_file.txt', function(err){
    if(err) throw err;
    console.log("File renamed!"); 
});

// file renamed from "lol.txt" to "demo_file.txt"
