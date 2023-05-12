var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

conn.connect(function(err) {
  if (err) throw err;

  var sql = "DROP TABLE formula1";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
