const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'@dmin!234',
    database: ''
});

connection.connect(){
    if(err){
        console.log(err);
    }
    else console.log("Connected ")
}

module.exports=connection; 