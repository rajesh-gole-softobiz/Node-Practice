// const fs=require('fs');
const http = require('http');
const port = 3000;
const hostname= '127.0.0.1'

// fs.readFile('demo1.txt','utf-8',(err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

//Create a server
const myServer = http.createServer((req,res)=>{
    //To Create Status Code
    res.writeHead(202, {'Content-Type':'text/html'});
    res.write('<h1>Hello</h1>')
    res.end('<h1>Server is running...</h1>');

});

myServer.listen(port,hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})


