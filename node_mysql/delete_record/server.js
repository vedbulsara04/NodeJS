var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

conn.connect(function(err){
    if(err) throw err;
    var sql = "DELETE FROM formula1 WHERE driver_name = 'Lewis Hamilton' ";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("Number of records deleted: ", + result.affectedRows);
    });
});
