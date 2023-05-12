/*
The fs.writeFile() method is used to asynchronously write 
the specified data to a file. By default, the file would 
be replaced if it exists.
*/

const fs = require('fs');

let data = "Lewis Hamilton";

fs.writeFile('index.html', data, function(err){
    if (err)
        console.log(err);
    else{
        console.log("contents written to file successfuly!");
        console.log("The content written : ");
        console.log(fs.readFileSync('index.html','utf8'));
    }
});
