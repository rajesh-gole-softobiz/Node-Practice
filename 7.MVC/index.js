const express = require('express');
const app = express();
const PORT = 3000;

// To access body and find data
app.use(express.urlencoded({extended:true}))

// Creating Form
const htmlForm = `
<form method="POST" actions="/users">
    <input type="text" name="name" placeholder="Enter Name" />
    <input type="number" name="age" placeholder="Enter Age" />
    <button type="submit">Save User</button>
</form>
`


app.get('/users',(req,res)=>{
    res.send(htmlForm)
})

app.post('/users',(req,res)=>{
    
})

app.use((req,res,next)=>{
    res.status(404).json({
        message : "Resource Not Found"
    })
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})