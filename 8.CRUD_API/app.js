const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const userRouter = require('./routes/user.route');

//To access the form data
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/users',userRouter);

//Routes Planning
//  /users   GET
//  /users/:id   GET
//  /users/      POST
//  /users/:id  PATCH
//  /users/:id  DELETE

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/./views/index.html")
})

//For invalid route
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'route not found',
    })
})

// Server error handling
app.use((err, req,res,next)=>{
    res.status(500).json({
        message: 'something broke',
    })
})


module.exports = app;

