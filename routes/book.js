const express = require('express')
const router = express.Router()

const Book = require('../models/book')

router.get('/', async (req, res)=>{
    try{
        const books = await Book.find({});
        res.render('books/index', {
            books: books
        })
        
    }catch(err){
        res.render('books/index', {
            errorMessage: 'cannot display the books'
        })
    }
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