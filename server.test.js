const request = require('supertest')
const cheerio = require('cheerio')
const server = require('./server')

// test ('testing home page', () => {

// })

test('test setup working #1', () => {
    expect.assertions(2)
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})

test('GET /', () => {
    expect.assertions(1)
    expect('/').toContain('Hello World')
})