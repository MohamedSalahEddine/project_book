const mongoose = require('mongoose')
const author_schema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('Author', author_schema)