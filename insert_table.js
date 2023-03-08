const mysql = require('mysql');

async function insertTable() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      port: 8889,
      user: "root",
      password: "root",
      database: "phco"
    });

    const sqlInsert  = `
    INSERT INTO phcoStaff (email) 
    VALUES ('sql@gmail.com')`;

    await connection.query(sqlInsert);
    console.log('Data insert into statment!')
    
  } catch(error) {
    console.error('Error insert data:', error);
  }
}

insertTable();