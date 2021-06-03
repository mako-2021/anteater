const express = require('express') // Bringing in code thats been written for us.
const hbs = require('express-handlebars') // Bringing in code thats been written for us.
const questions = require('./models/questions')

const server = express() // Creating our server using the package that was installed.

server.use(express.static('public')) // Allows the public folder to be active
server.use(express.urlencoded({ extended: false })) // URL picking up body of request (exp in forms)

server.engine('hbs', hbs({ extname: 'hbs' })) // tells us that all the hbs files are usable.
server.set('view engine', 'hbs') // allowing us to use handlebars

server.get('/', (req, res) => { // ./ in current directory  / -> from root ../ go up a directory to find file
  res.render('home')
})

server.get('/question', (req, res) => {
  res.render('question', questions[0])
})

module.exports = server
