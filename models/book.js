const mongoose = require('mongoose')
const book = mongoose.Schema({
    book_name : {
        type : String,
        required: true
    },
    author_name :{
        type : String,
        required: true
    }
})

module.exports = mongoose.model('Book', book)