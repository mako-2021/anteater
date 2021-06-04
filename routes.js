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
  lib.getQuiz((err, quizData) => {
    const category = req.params.category
    const id = Number(req.params.id)
    if (err) {
      return res.status(500).send(err.message)
    }
    // Use the category to find the animal object
    // Use the id to find the quiz question object
    const questionArr = quizData[category]
    const question = questionArr.find(item => item.id === id)
    res.render('quiz', { question })
  })
})

module.exports = routes
