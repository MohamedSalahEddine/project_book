const express = require('express')
const author_router = express.Router();
const Author = require('../models/author')

author_router.get('/', (req, res)=>{
    res.render('authors/index')
})

author_router.get('/new', (req, res)=>{
    res.render('authors/new', { author: new Author()})
})

author_router.post('/', async (req, res)=>{
    const author = new Author({
        name : req.body.name
    })
    // author.save((err, newAuthor) =>{
    //     if(err){
    //         res.render('authors/new', {
    //             author : author,
    //             errorMessage : 'Error creating Author'
    //         })
    //     }else{
    //         // res.redirect(`authors/${newAuthor.id}`)
    //         res.redirect('authors')
    //     }
    // })
    try{
        const new_author = await author.save();
        // res.redirect(`authors/${new_author.id}`)
        res.redirect('authors')
    }catch(err){
        res.render('authors/new',{
            author : author,
            errorMessage : 'An error occured'
        })
    }
})

module.exports = author_router