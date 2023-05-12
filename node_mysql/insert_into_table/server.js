var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database: "mydb"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO formula1 (driver_name, team_name) VALUES ('Lewis Hamilton', 'Mercedes-AMG Formula1 team')";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("1 record inserted!");
    });
});
