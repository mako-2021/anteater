const express = require('express')
const routes = express.Router()
const lib = require('./lib')
const data = require('./quiz.json')

// Potential way to have quiz page number 1, where :anteater/:1


// Get route parameters /anteater/1 
// Use the parameters to search through our object
routes.get('/:category/:id', (req, res) => {
  const category = req.params.category
  const id = req.params.id
  // lib.getQuiz((err, quizData) => {
  //   if (err) {
  //     return res.status(500).send(err.message)
  //   }
  //   // Use the category to find the animal object
  //   // Use the id to find the quiz question object
  //   //console.log(quizData)
  //   const categoryObj = quizData[category]
  //   //const question = categoryObj.find( item => item.id == id)
  //   // console.log(categoryObj)
  //   // const viewData = {
  //   //   question: result
  //   // }
  // })
  console.log("I got it!")
  console.log(data['jelly fish'])
  res.render('quiz')
})

// routes.get('/question', (req, res) => {
//   res.render('question')
// })

// routes.get('/:category', (req, res) => {
//   const category = (req.params.category)
//   res.send(`welcome to the ${category} quiz page`)
// })

// routes.get('/', (req, res) => { // ./ in current directory  / -> from root ../ go up a directory to find file
//   res.render('home')
// })

module.exports = routes
