const express = require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1>`);
})

//Register
app.use('/register',(req,res)=>{
    res.status(200).json({
        messag: "This is Register Page",
        statusCode: 200,
    });
});


//Login
app.use('/login',(req,res)=>{
    res.status(200).json({
        message: "This is login page",
        statusCode: 200,
    });
});

//Redirect
app.use('/signup',(req,res)=>{
    res.redirect('/register');
});
app.use('/signin',(req,res)=>{
    res.redirect('/login');
});

app.use((req,res)=>{
    res.send(`<h1>404 Not Found</h1>`);
})

module.exports = app;