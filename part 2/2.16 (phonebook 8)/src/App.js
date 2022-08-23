import { useState, useEffect } from 'react'
import Name from './stuff/Name'
import Input from './stuff/Input'
import server from './stuff/backend'
import axios from 'axios'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    server.get()
    .then(response => {
      setPeople(response)})
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const x = {
      name: newName,
      number: newNumber,
      id: people.length+1
    }

    for (let i=0; i<people.length; i++) {
      if(people[i].name.includes(newName)) {
        alert("name "+newName+" already exists")
        return
      } else if(people[i].number.includes(newNumber)) {
        alert("number "+newNumber+" already exists")
        return
      }
    }

    server.create(x).then(response => {
      setPeople(people.concat(response))
      setNewName('')
      setNewNumber('')
    })
    setNewName('')
    setNewNumber('')
  }

  const nameChanger = (event) => {
    return (setNewName(event.target.value))
  }
  const numberChanger = (event) => {
    return (setNewNumber(event.target.value))
  }

  const searchName = (event) => {
    const filtered = people.filter((person) =>
    person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    return setSearch(filtered)
  }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Input onChange={searchName} placeholder={'search'}/>
      <form onSubmit={addPerson}>
        <Input value={newName} onChange={nameChanger} placeholder={'name'}/>
        <Input value={newNumber} onChange={numberChanger} placeholder={'number'}/>
        <div/><button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {(search || people).map(name => 
        <Name key={name.id} name={name}/>
      )}
    </div>
  )
}

export default App