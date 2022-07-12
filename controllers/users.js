import con from '../config.js';


export const login = (req,response)=>{
    let username = req.body.username;
    let password = req.body.password;
    if(username && password){
        con.query("Select * from user where username = ? AND password = ?",[username, password], (err, result) =>{
            if (err) {
                response.status(500).send("err");
            }
            if(result.length > 0) {
                response.status(200).send("login success!");
                //redirect or something
            }
            else{
                response.send("Incorrect username or password!");
            }
        })
    }
    else{
        response.send('Please input username and password!');
    }
}


export const retrieveInfo = (req,res)=>{
    con.query("select * from user", (err, result) => {
        if (err) 
        { 
            res.send(err);
        }
        else 
        { 
            res.send(result);
        }
    })
}

export const register = (req,response)=>{
    let username = req.body.username;
    let password = req.body.password;
    if(username && password){
        con.query("Select * from user where username = ?",[username], (err, result) =>{
            if (err) {
                response.status(500).send("err");
            }
            if(result.length > 0) {
                response.send("Username has already been used!");
                //redirect or something
            }
            else{
                con.query("INSERT INTO user (username, password) VALUES (?, ?)",[username,password], (err) =>{
                    if (err) {
                        response.status(500).send("err");
                    }
                    else response.send("You have successfully been registered!");
                })
            }
        })
    }
    else{
        response.send('Please input username and password!');
    }
}

export const changePassword = (req,response)=>{
    let username = req.body.username;
    let password = req.body.password;
    let newPassword = req.body.newPassword;
    if(username && password && newPassword){
        con.query("Select * from user where username = ? AND password = ?",[username,password], (err, result) =>{
            if (err) {
                response.status(500).send("err")
            }
            if(result.length > 0) {
                //redirect or something
                con.query("UPDATE user SET password = ? WHERE userid =?;",[newPassword,result[0].userid], (err) =>{
                    if (err) {
                        response.status(500).send(err);
                    }
                    else{ 
                        response.status(200).send("Password has been updated!");
                    }
                })
            }
            else{
                response.send("Invalid username or password!");
            }
        })
    }
    else{
        response.send('Please input username and password!');
    }
}

export const deleteUser = (req,response)=>{
    let username = req.body.username;
    con.query("DELETE FROM user WHERE username=?",[username], (err) =>{
        if (err) {
            response.status(500).send("err");
        }
        else {
            response.status(200).send(" User has been successfuly deleted");
        }
    })
}