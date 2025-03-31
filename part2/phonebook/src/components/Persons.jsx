import personsService from '../services/persons'

const Persons = ({ numbersToShow, setPersons, persons }) => {
    
    const delPerson = (event, id) => {
        event.preventDefault()
        
        personsService
            .delPer(id)
            .then(returned => {
                setPersons(persons.filter((per) => per.id !== returned.id))
            })
    }

    return (
        <ul>
            {numbersToShow.map((person) =>
                
                <div key={person.id}>
                    <h1></h1>
                    <li>{person.name} {person.number}</li>
                    <button onClick={(event) => delPerson(event, person.id)}>delete</button>
                </div>
            )}
        </ul>
    )
}

export default Persons;
