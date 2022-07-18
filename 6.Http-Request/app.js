const express = require('express');
const app=express();
const bodyParser = require("body-parser");


// app.get('/',(req,res)=>{
//     // http request with query parameter localhost:3000/?id=101
//     const id=req.query.id;
//     res.send(`<h1>Student Id: ${id}</h1>`);

// });

// app.get('/userId/:id/userAge/:age',(req,res)=>{
//     // http request with route parameter localhost:3000/userId/101/userAge/25
//    const id = req.params.id;
//    const age = req.params.age;

//    res.send(`<h1>Student id is : ${id}, and age is: ${age}</h1>`);
// });

// http request using header (postman)
// app.get('/',(req,res)=>{
//     const id = req.header('id');
//     const name =req.header('name');

//     res.send(`<h1>Student id is ${id} and name is ${name}</h1>`);
// })

//http request with JSON data (postman)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/user',(req,res)=>{
    const name = req.body.name;
    res.send(`welcome ${name}`);
})

app.use((req,res)=>{
    res.send(`<h1>404 page not found!</h1>`)
})
module.exports = app;