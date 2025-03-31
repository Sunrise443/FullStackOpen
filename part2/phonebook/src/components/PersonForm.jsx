import { useState } from 'react'

import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNewPerson = (event) => {
        event.preventDefault()
        
        const exists = persons.some(person => person.name===newName)
        const personObject = {
          name: newName,
          number: newNumber
        }

        if (!exists) {
          personsService
            .create(personObject)
            .then(returnedNote => {
              setPersons(persons.concat(returnedNote))
              setNewName('')
              setNewNumber('')
            })
        } else {
          if (persons.some(person => person.number===newNumber)){
            window.alert(`${newName} already exists`)
          } else {
            if (window.confirm(
              `${newName} is already in the phonebook, do you want to replace the number?`
            )) {
              const perID = persons.filter((person) => person.name === newName)[0].id
              personsService
                .replaceNumber(perID, personObject)
                .then(returned => {
                  setPersons(persons.map(person => person.id === perID ? returned : person))
                  setNewName('')
                  setNewNumber('')
                })
              }
          }
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
