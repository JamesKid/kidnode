
var mysql  = require('mysql');  

var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : '123456',       
    port: '3306',                   
    database: 'test', 
}); 

connection.connect();

var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//改
connection.query(modsql,modsqlparams,function (err, result) {
    if(err){
        console.log('[update error] - ',err.message);
        return;
    }        
    console.log('--------------------------update----------------------------');
    console.log('update affectedrows',result.affectedrows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();

