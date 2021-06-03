const express = require('express')
const routes = express.Router()

// Potential way to have quiz page number 1, where :anteater/:1
routes.get('/', (req, res) => { // ./ in current directory  / -> from root ../ go up a directory to find file
  res.render('home')
})

routes.get('/:category/:id', (req, res) => {
  const id = req.params.id
  const category = req.params.category
  res.send(`welcome to page ${id} page of our ${category} quiz`)
})

routes.get('/question', (req, res) => {
  res.render('question')
})

routes.get('/:category', (req, res) => {
  const category = (req.params.category)
  res.send(`welcome to the ${category} quiz page`)
})

module.exports = routes
