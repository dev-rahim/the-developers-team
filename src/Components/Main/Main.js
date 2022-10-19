import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css'
const Main = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./dataOFDevelopers.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    const [addedPerson, setAddedPerson] = useState([])
    const handleAdd = (name) => {
        // console.log(name)
        setAddedPerson([...addedPerson, name])
        // console.log(addedPerson);

    }
    return (
        <div className='Main'>
            <div className='Cart_container'>
                {
                    persons.map(person => <Programmer key={person.id} handleAdd={handleAdd} person={person} />)
                }
            </div>
            {/* <Programmer /> */}
            <div>
                <Sidebar addedPerson={addedPerson} />
            </div>
        </div>
    );
};

export default Main;