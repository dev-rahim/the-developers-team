import React from 'react';
import Items from '../SidebarItems/Items';
import './Sidebar.css'
const Sidebar = (props) => {
    const { addedPerson } = props;
    let total = 0;
    for (const person of addedPerson) {
        total += person.salary;
    }
    console.log(total);
    return (
        <div className='SideBar'>
            <div className='Sidebar-header'>
                <h2>Total Added:{addedPerson.length}</h2>
                <h4>Total Cost:${total}</h4>
            </div>
            {
                props.addedPerson.map(person => <Items key={person.id} name={person.name} img={person.img} />)
            }

            <div className='btn-container'>
                <button className='hire-btn'>Hire Now</button>
            </div>
        </div>
    );
};

export default Sidebar;