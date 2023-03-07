var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "nodeDB"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the Database!");

  // Create Database only one time
  // con.query("CREATE DATABASE nodeDB", function(err, result) {
  //   if(err) throw err;
  //   console.log("Database Created!")
  // })

  // var sql = `CREATE TABLE customers (
  //               id int NOT NULL AUTO_INCREMENT,
  //               name VARCHAR(255),
  //               email VARCHAR(255),
  //               PRIMARY KEY (id)
  //           )`;
  // var sql = `CREATE TABLE customers (
  //   name VARCHAR(255), 
  //   email VARCHAR(255)
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table has been created...");
  // })
  var sql = `ALTER TABLE customers ADD id int AUTO_INCREMENT PRIMARY KEY`;
  con.query(sql, function(err, result) {
      if(err) throw err;
      console.log('Our Table Has Been Altered...');
  })
});


// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);