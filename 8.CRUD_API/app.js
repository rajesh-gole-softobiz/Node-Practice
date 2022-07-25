const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//To access the form data
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/./views/index.html")
})


module.exports = app;

