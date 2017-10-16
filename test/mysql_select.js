var mysql  = require('mysql');  
var connection = mysql.createConnection({     
    host     : '127.0.0.1',       
    user     : 'root',              
    password : '123456',       
    port: '3306',                   
    database: 'vimkid', 
}); 

connection.connect();

var  sql = 'SELECT * FROM vimkid_article';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');  
});

connection.end();

