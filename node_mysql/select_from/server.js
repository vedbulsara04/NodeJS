var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

conn.connect(function (err){
    if(err) throw err;
    conn.query("SELECT * FROM formula1", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});
