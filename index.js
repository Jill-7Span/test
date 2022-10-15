const express = require('express');
const { send } = require('process');

const router = require('./routes')

const app = express();

app.use('/',router)

app.get('/',(req,res)=>{
    res.send("jkdbgchjks");
})

app.listen(5000);