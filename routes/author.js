const express = require('express')
const author_router = express.Router();
const Author = require('../models/author')

author_router.get('/', async (req, res)=>{
    let authors;
    let search_options={}
    if(req.query.name!= null && req.query.name!==''){
        search_options.name = new RegExp(req.query.name, 'i')
    }
    try{
        authors = await Author.find(search_options)
        res.render('authors/index',{authors: authors,
        search_options : req.query})
    }catch{
        res.redirect('/')
    }
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