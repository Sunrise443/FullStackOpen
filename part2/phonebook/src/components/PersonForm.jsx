import { useState } from 'react'

import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNewPerson = (event) => {
        event.preventDefault()
        
        const exists = persons.some(person => person.name===newName)
    
        if (!exists) {
          const personObject = {
            name: newName,
            number: newNumber
          }

          personsService
            .create(personObject)
            .then(returnedNote => {
              setPersons(persons.concat(returnedNote))
              setNewName('')
              setNewNumber('')
            })
        } else {
          window.alert(`${newName} already exists`)
        }
    }

    return (
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
    )
}

export default PersonForm;
