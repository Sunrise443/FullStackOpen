import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const numbersToShow = filterName==='' ? persons : persons.filter((person => person.name.toLowerCase().includes(filterName.toLowerCase())))

  const addNewPerson = (event) => {
    event.preventDefault()
    
    const exists = persons.some(person => person.name===newName)

    if (!exists) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} already exists`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filter show with: <input
          value={filterName}
          onChange={(event) => {
            setFilterName(event.target.value)
          }}
        />
          
        </div>
      </form>
      <form>
        <div>
          name: <input
            value={newName} 
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>

        <div>
          number: <input
            value={newNumber} 
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>

        <div>
          <button type="submit" onClick={addNewPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {numbersToShow.map((person) =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App
