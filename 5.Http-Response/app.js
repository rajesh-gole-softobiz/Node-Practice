const express = require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1>`);
})

// Sending HTML file as response
//Register
app.use('/register',(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+'/views/register.html');
})
// Home page
app.use('/index',(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+'/views/index.html');
})


// Sending JSON data and status code as response
//Register
// app.use('/register',(req,res)=>{
//     res.status(200).json({
//         messag: "This is Register Page",
//         statusCode: 200,
//     });
// });


// //Login
// app.use('/login',(req,res)=>{
//     res.status(200).json({
//         message: "This is login page",
//         statusCode: 200,
//     });
// });

//Response Redirect
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