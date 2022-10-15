const express = require('express')
const router = express.Router()

const Book = require('../models/book')

router.get('/', (req, res)=>{
    res.render('books/index')
})

router.get('/new', (req, res)=>{
    res.render('books/new')
})
router.post('/', async (req, res)=>{
    const book = new Book({
        book_name : req.body.book_name,
        author_name : req.body.author_name
    })
    try{
        const new_book = await book.save();
        res.redirect(`books`)
    }catch(err){
        res.render('books/new', {
            book : book,
            messageError : "failed to created this book"
        })
    }
})

module.exports = router