const fs = require('fs')

function getQuiz (cb, path = './quiz.json') {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) return null
        const quizData = JSON.parse(data) 
        cb(null, quizData)
    })
}

// function populateQuiz (cb, path = '.quiz.json') {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) return null
//         const quizData = JSON.parse(data)

//     })
// }


module.exports = {
    getQuiz
}