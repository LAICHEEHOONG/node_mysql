var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the Database!");
    
    con.query("CREATE DATABASE nodeDB", function(err, result) {
      if(err) throw err;
      console.log("Database Created!")
    })
  });