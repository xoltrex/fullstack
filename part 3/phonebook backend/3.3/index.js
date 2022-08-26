const express = require('express')
const app = express()

let people = [
  {"id": 1, "name": "Arto Hellas", "number": "040-123456"},
  {"id": 2, "name": "Ada Lovelace", "number": "39-44-5323523"},
  {"id": 3, "name": "Dan Abramov", "number": "12-43-234345"},
  {"id": 4, "name": "Mary Poppendieck", "number": "39-23-6423122"}
]

app.get('/api/people', (request, response) => {
  response.json(people)
})

app.get('/api/people/:id', (request, response) => {
  const {id} = request.params
  const index = people.findIndex(p => p.id == id);

if (index) {
  response.json(people[index])
  console.log("ok")
} else {
  response.status(404).end()
  console.log("bruh")
}
})



app.get('/info', (request, response) => {
  var today = new Date();
  response.send(`Phonebook has ${people.length} people <br/>${today} <br/>`)
})

const PORT = 3001
app.listen(PORT)
console.log(`shits buzzing at ${PORT}`)