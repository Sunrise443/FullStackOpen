import { useEffect, useState } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [filterName, setFilterName] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {personsService
    .getAll()
    .then(initialNotes => {setPersons(initialNotes)})
    }, [])

  const numbersToShow = filterName==='' ? persons : persons.filter((person => person.name.toLowerCase().includes(filterName.toLowerCase())))
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName}/>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} setPersons={setPersons} persons={persons}/>
    </div>
  )
}

export default App
