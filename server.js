const express = require('express') // Bringing in code thats been written for us.
const hbs = require('express-handlebars') // Bringing in code thats been written for us.

const server = express() // Creating our server using the package that was installed.
const routes = require('./routes') // bring in the routes that are written in routes.js.

server.use(express.static('public')) // Allows the public folder to be active
server.use(express.urlencoded({ extended: false })) // URL picking up body of request (exp in forms)

server.engine('hbs', hbs({ extname: 'hbs' })) // tells us that all the hbs files are usable.
server.set('view engine', 'hbs') // allowing us to use handlebars

server.use('/', routes)

module.exports = server
