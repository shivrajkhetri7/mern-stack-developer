require('./db/dbconnection');
const Users =require('./modules/UserData')
const express = require('express');
const app= express();
const port = 3001;
app.get('/',(req,res)=>{
    res.send(`Hello Welcome to Test Page`)
});
app.post("/user",async(req,res)=>{
    try{    
    const name =req.body.firstName;
    const password =req.body.password;
    console.log(`here the name ${name} and password ${password} `)
    const userData= Users(
        {
            firstName:name,
            password:password
        })
    await userData.save()  
}
catch(err){
    res.send(err);
}

})

app.listen(port,()=>{
    console.log(`the Server is Running in the port ${port}`)
})