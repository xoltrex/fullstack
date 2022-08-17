import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState
    ([
      {name: 'Arto Hellas', id: '1'}
    ])

  const [newName, setNewName] = useState('')

  const Name = ({name}) => {
    return (<li>{name.name}</li>)
  }

  const addName = (event) => {
    event.preventDefault()
    const x = {
      name: newName,
      id: persons.length+1
    }
    setPersons(persons.concat(x))
    setNewName('')
  }

  const nameChanger = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div/><input value={newName} onChange={nameChanger}/>
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