import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState
    ([
      {name: 'Arto Hellas', number: '1234', id: '1'}
    ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const Name = ({name}) => {
    return (<li>{name.name} : {name.number}</li>)
  }

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
    setNewNumber('')
  }

  const nameChanger = (event) => {
    return (setNewName(event.target.value))
  }
  const numberChanger = (event) => {
    return (setNewNumber(event.target.value))
  }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div/>name<input value={newName} onChange={nameChanger}/>
        <div/>number<input value={newNumber} onChange={numberChanger}/>
        <div/><button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
        {persons.map(name => 
          <Name key={name.id} name={name} />
        )}
    </div>
  )
}

export default App