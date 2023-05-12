var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

conn.connect(function (err){
    if (err) throw err;
    console.log("Connected!");

    var sql = "CREATE TABLE formula1 (driver_name VARCHAR(255), team_name VARCHAR(255))";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created!");
    });
});
