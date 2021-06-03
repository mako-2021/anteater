const express = require('express')
const hbs = require('express-handlebars')
const server = express() 

server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.engine('hbs', hbs({extname: 'hbs'})) // tells us that all the hbs files are usable. 
server.set('view engine', 'hbs')








module.exports = server


