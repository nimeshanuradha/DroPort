var mysql = require('mysql');

var dbconnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'droport'
});

dbconnect.connect(function(err){
    if(err) throw err && Console.log('Error connect DB');
    console.log('connected')
});

module.exports = dbconnect;

