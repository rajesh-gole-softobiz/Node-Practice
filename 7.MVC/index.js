const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./routes/users.route');
const productRouter = require('./routes/products.route');

// To access body and find data
app.use(express.urlencoded({extended:true}))
//To use user router
app.use(userRouter);
app.use(productRouter);

// Models Part

// const users = [
//     {
//         name: "Rajesh Gole",
//         age : 26
//     },
//     {
//         name: "abc xyz",
//         age : 31
//     },
// ]

// Creating Form - Views Part
// const htmlForm = `
// <form method="POST" actions="/users">
//     <input type="text" name="name" placeholder="Enter Name" />
//     <input type="number" name="age" placeholder="Enter Age" />
//     <button type="submit">Save User</button>
// </form>
// `

//Routes & Controllers Part

// app.get('/users',(req,res)=>{
//     res.send(htmlForm)
// })

// app.post('/users',(req,res)=>{
//     const name = req.body.name;
//     const age = Number(req.body.age);
//     const user = {
//         name,
//         age
//     }
//     users.push(user)
//     res.status(201).json({
//         success: true,
//         users
//     })
// })

app.use((req,res,next)=>{
    res.status(404).json({
        message : "Resource Not Found"
    })
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})