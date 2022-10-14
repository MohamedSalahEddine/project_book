const express = require('express')
const author_router = express.Router();

author_router.get('/', (req, res)=>{
    res.render('authors/index')
})

author_router.get('/new', (req, res)=>{
    res.render('authors/new')
})

author_router.post('/', (req, res)=>{
    res.send('creating new author')
})

module.exports = author_router