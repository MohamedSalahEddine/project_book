const express = require('express')
const author_router = express.Router();

author_router.get('/', (req, res)=>{
    res.send('hiii from author')
})

author_router.get('/new', (req, res)=>{
    res.send('creating a new author')
})

module.exports = author_router