
require('dotenv').config()
const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const Person = require('./models/people')
app.use(morgan("tiny"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(cors())
app.use(express.static("build"));


morgan.token("content", (req, res) => {
  if (req.method === "POST") return JSON.stringify(req.body)
  return null
})

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :content"))

app.get('/api/people', (request, response) => {
  Person.find({}).then((results) => {
    response.json(results.map((person) => person.toJSON()))
  })
})

app.get('/api/people/:id', (request, response, next) => {
  Person.findById(request.params.id).then((person) => {
    if (person) {
      response.json(person.toJSON())
    } else {
      res.status(404).end()
    }
  })
  .catch((error) => next(error))
})

app.delete('/api/people/:id', (request, response) => {
  const id = Number(request.params.id)
    Person.findByIdAndRemove(id)
    .then(() => {
      res.status(204).end()
    })
    .catch((error) => next(error))
})

app.post('/api/people', (request, response) => {
const body = request.body
  if (!body.name) {
    return response.status(400).json({
      error: "no name"})
  }

  const person = {
    id: people.length+1,
    name: body.name,
    phone: body.number
  }
  const x = people.filter((y) =>y.name === person.name)
  if (x.length !== 0) {
    return response.status(400).json({
      error: "name taken"})
  }
  people = people.concat(person)
  response.json(person)
})

app.get('/info', (request, response) => {
  var today = new Date()
  response.send(`Phonebook has ${people.length} people <br/>${today} <br/>`)
})

const PORT = process.env.PORT
app.listen(PORT)
console.log(`shits grooving @ ${PORT}`)