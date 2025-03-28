import { useEffect, useState } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [filterName, setFilterName] = useState('')
  const [persons, setPersons] = useState([]) 

  useEffect(() => {axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })}, [])

  const numbersToShow = filterName==='' ? persons : persons.filter((person => person.name.toLowerCase().includes(filterName.toLowerCase())))
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName}/>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow}/>
    </div>
  )
}

export default App
