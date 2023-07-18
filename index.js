// https://medium.com/7span/crud-operation-using-node-js-and-express-js-a0d63a2216aa
const express = require('express');
const server = express();
const Connectdb = require('./db/conn')
const router = require('./Routes/Router')
const bodyParser = require('body-parser')
const port = 5000;
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
Connectdb();
server.use('/api',router)

server.listen(port,()=>{
    console.log(`Server Running at port ${port}`)
})