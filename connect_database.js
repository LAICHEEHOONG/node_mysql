const mysql = require('mysql');

async function connectToDB() {
  try {
    const con = await mysql.createConnection({
      host: "localhost",
      port: 8889,
      user: "root",
      password: "root",
    });

    console.log('Connected to database!')

  } catch(error) {
    console.error('Error connecting to database:', error);
  }
}

connectToDB();