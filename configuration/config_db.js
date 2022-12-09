const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "Bootcamp1104",
    database: 'employees', 
  });
 connection.connect((error) => {
    if ( error) console.log(error);
    console.log("db connected");
  })
  
module.exports = connection;