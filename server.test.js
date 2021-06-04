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
      expect(result.text).toContain('Quiz Menu')
      return null
    })
})

test('Quiz page test', () => {
  expect.assertions(1)
  return request(server)
    .get('/anteater/1')
    .then(result => {
      expect(result.text).toContain('A mammal')
      return null
    })
})

test('Home page image test', () => {
  expect.assertions(1)
  return request(server)
    .get('/')
    .then(result => {
      const $ = cheerio.load(result.text)
      let img = $('img')
      expect(img.length).toEqual(4)
      return null
    })
})
