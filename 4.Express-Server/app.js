const express = require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send("This is GET page ");
});
app.get('/register',(req,res)=>{
    res.send("This is Register page ");
});
app.get('/login',(req,res)=>{
    res.send("This is Login page ");
});
app.use((req,res)=>{
    res.send("<h1>404 Not Found!</h1> ");
});

module.exports = app;