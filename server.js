if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
 
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', ()=> console.log('connected to databse'))

const index_router = require('./routes/index')
const author_router = require('./routes/author')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'))

app.use('/', index_router)
app.use('/author', author_router)

app.listen(process.env.PORT)