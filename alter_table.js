const mysql = require('mysql');

async function alterTable() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      port: 8889,
      user: "root",
      password: "root",
      database: "phco"
    });

    const sqlAlter  = `ALTER TABLE phcoStaff ADD email varchar(255)`;

    await connection.query(sqlAlter);
    console.log('Alter table!')
    
  } catch(error) {
    console.error('Error alter table:', error);
  }
}

alterTable();