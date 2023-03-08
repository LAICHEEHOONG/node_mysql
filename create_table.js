const mysql = require('mysql');

async function createTable() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      port: 8889,
      user: "root",
      password: "root",
      database: "BMSTAR"
    });

    const sqlTable  = `CREATE TABLE bmstarStaff (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        branch varchar(255),
        PRIMARY KEY (id)
    )`;

    await connection.query(sqlTable);
    console.log('Table created!')
    
  } catch(error) {
    console.error('Error creating database', error);
  }
}

createTable();