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
    return (
        <div className='Main'>
            <div className='Cart_container'>
                {
                    persons.map(person => <Programmer person={person} />)
                }
            </div>
            {/* <Programmer /> */}
            <Sidebar />
        </div>
    );
};

export default Main;