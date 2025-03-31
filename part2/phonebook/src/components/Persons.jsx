import personsService from '../services/persons'

const Persons = ({ numbersToShow, setPersons, persons }) => {
    
    const delPerson = (event, person) => {
        event.preventDefault()
        
        if (window.confirm(`Are you sure you want to delete ${person.name}?`)){
            personsService
                .delPer(person.id)
                .then(returned => {
                    setPersons(persons.filter((per) => per.id !== returned.id))
                })
        }
    }

    return (
        <ul>
            {numbersToShow.map((person) =>
                
                <div key={person.id}>
                    <h1></h1>
                    <li>{person.name} {person.number}</li>
                    <button onClick={(event) => delPerson(event, person)}>delete</button>
                </div>
            )}
        </ul>
    )
}

export default Persons;
