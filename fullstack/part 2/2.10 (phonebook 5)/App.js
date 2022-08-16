import { useState } from 'react'
import Name from './stuff/Name'
import Input from './stuff/Input'

const App = () => {
  const [persons, setPersons] = useState
    ([
      {name: 'Arto Hellas', number: '123', id: '1'},
      {name: 'Jorma Pekka', number: '456', id: '2'},
      {name: 'Jukka Tuoma', number: '789', id: '3'}
    ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const x = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    for (let i=0; i<persons.length; i++) {
      if(persons[i].name.includes(newName)) {
        alert("name "+newName+" already exists")
        return
      } else if(persons[i].number.includes(newNumber)) {
        alert("number "+newNumber+" already exists")
        return
      }
    }
    
    setPersons(persons.concat(x))
    setNewName('')
    setNewNumber('')                                                       //ei täst saa kolmee irti vai
  }

  const nameChanger = (event) => {
    return (setNewName(event.target.value))
  }
  const numberChanger = (event) => {
    return (setNewNumber(event.target.value))
  }

  const searchName = (event) => {
    const filtered = persons.filter((person) =>
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
      {(search || persons).map(name => 
        <Name key={name.id} name={name}/>
      )}
    </div>
  )
}

export default App