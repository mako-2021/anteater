const express = require('express')
const routes = express.Router()
const lib = require('./lib')

// Potential way to have quiz page number 1, where :anteater/:1
routes.get('/', (req, res) => { // ./ in current directory  / -> from root ../ go up a directory to find file
  res.render('home')
})

// Get route parameters /anteater/1 
// Use the parameters to search through our object
routes.get('/:category/:id', (req, res) => {
  lib.getQuizData2((err, quizData) => {
    if (err) {
      return res.status(500).send(err.message)
    }
    console.log(quizData['anteater'])
    res.render('quiz')
  })
})

routes.get('/question', (req, res) => {
  res.render('question')
})

routes.get('/:category', (req, res) => {
  const category = (req.params.category)
  res.send(`welcome to the ${category} quiz page`)
})

module.exports = routes
