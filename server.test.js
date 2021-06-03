const request = require('supertest')
const cheerio = require('cheerio')
const server = require('./server')

test('test setup working #1', () => {
  expect.assertions(2)
  expect(true).toBeTruthy()
  expect(false).toBeFalsy()
})

test('Home page test', () => {
  expect.assertions(1)
  return request(server)
    .get('/')
    .then(result => {
      expect(result.text).toContain('Hello World')
      return null
    })
})

test('Quiz page test', () => {
  expect.assertions(1)
  return request(server)
    .get('/')
    .then(result => {
      expect(result.text).toContain('Hello World')
      return null
    })
})
