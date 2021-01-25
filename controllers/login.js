const path = require('path');
const connection = require('../util/database');
const rootDIr = require('../util/path');

exports.login =(req,res,next)=>{
   var username =req.body.username;
   var password =req.body.password;
   if(username && password){
    let cli = 'SELECT * FROM accounts WHERE username = ? AND password = ?';
    connection.query(cli,[username,password],(err,results)=>{
        if(results.length>0){
            
            req.session.loggedIn = true;
            req.session.username = username;
        }
    })
   }
   
 
}