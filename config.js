import mysql from 'mysql';

const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"password",
    database:"sample_db"
});

con.connect((err)=>{
    if(err)
    {
        console.warn(err)
    }
});

export default con;