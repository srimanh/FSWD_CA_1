const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello, server is running");
});
app.listen(PORT,()=>{
    console.log(`server is runnig at http://localhost:${PORT}`);
});

app.post('/signup',(res,req)=>{
    const {userName,email,password,dateOfBirth} = req.body;
    if (!userName){
        return res.status(400).json({error:"Username cannot be empty"});
    }
    if (!email){
        return res.status(400).json({error:"Email cannot be empty"});
    }
    if (!password){
        return res.status(400).json({error:"Password cannot be empty"});
    }
    if(!dateOfBirth){
        return res.status(400).json({error:"Dateofbirth cannot be empty"});
    }
    if(password.length<8 || password.length>16){
        return res.status(400).json({error:"password length should be greater than 8 and less than 16"});
    }
    res.status(201).json({
        message:"user signed up",
        user:{
            userName,
            email,
            dateOfBirth
        }
    });
});