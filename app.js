const express = require('express')
const morgan = require('morgan')
const route = require('./routes/resumeRoute')


const app = express()

// static files
app.use(express.static('./public'))
// logging
app.use(morgan('dev'))
// use express body parser
app.use(express.urlencoded({ extended: false }))

// serve templates with ejs
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000

app.use(route)

app.listen(PORT, () => console.log(`server up and running on port ${PORT}`))
