const mysql = require('mysql');

async function createDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      port: 8889,
      user: "root",
      password: "root",
    });

    await connection.query('CREATE DATABASE BMSTAR');
    console.log('Database created!')

  } catch(error) {
    console.error('Error creating database', error);
  }
}

createDatabase();