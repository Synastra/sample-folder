import mysql from 'mysql';

const con= mysql.createConnection({
    host:'172.25.0.100',
    user:'root',
    password:"123",
    database:"testDb",
    // port: '/var/lib/mysql/mysqld.sock'
    
});

con.connect((err)=>{
    if(err)
    {
        console.warn(err)
    }
});

export default con;