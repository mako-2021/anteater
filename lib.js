const fs = require('fs')


// 

// function getQuiz (cb, path = './quiz.json') {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) return null
//         const quizData = JSON.parse(data) 
//         console.log(quizData['anteater'])
//         cb(null, quizData["anteater"])
//     })
// }


// function getQuizData2 (callback, path = './quiz.json') {
//   fs.readFile(path, 'utf8', (err, contents) => {
//     let quizData

//     if (err) {
//       console.error(err)
//       callback(new Error('Unable to load the data file'))
//       return
//     }
//     try {
//       quizData = JSON.parse(contents)
//     } catch (error) {
//       console.error(error)
//       callback(new Error('Unable to parse the data file'))
//       return
//     }
//     callback(null, quizData)
//   })
// }

// module.exports = {
//     getQuiz,
//     // getQuizData2
// }