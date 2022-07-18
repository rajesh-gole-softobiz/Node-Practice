const express = require('express');
const app=express();
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);

app.get('/',(req,res)=>{
    res.send("This is Home page ");
});

app.use((req,res)=>{
    res.send("<h1>404 Not Found!</h1> ");
});

module.exports = app;