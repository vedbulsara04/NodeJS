/*
To delete a file with the File System module,  
use the fs.unlink() method.
*/

// NOTE : create a 'lol.txt' file first.

const fs = require('fs');

fs.unlink('lol.txt', function (err){
    if (err) throw err;
    console.log("File Deleted!");
});
