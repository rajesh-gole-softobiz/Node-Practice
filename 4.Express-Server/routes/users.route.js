const express = require('express');
const router = express.Router();


router.get('/register',(req,res)=>{
    res.send("This is Register page ");
});
router.get('/login',(req,res)=>{
    res.send("This is Login page ");
});

module.exports = router;