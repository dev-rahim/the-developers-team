import React from 'react';
import './Programer.css'

const Programmer = (props) => {
    const { name, designation, img, salary, age, nationality, } = props.person;
    return (
        <div className='Programmer'>
            <div className="cart">
                <img src={img} alt="" />
                <div className="Cart_Content">
                    <p><strong>Name:</strong>{name}</p>
                    <p><strong>Age:</strong>{age}</p>
                    <p><strong>Role:</strong>{designation}</p>
                    <p><strong>Salary:</strong>{salary}</p>
                    <p><strong>Country:</strong>{nationality}</p>
                </div>
                <button onClick={() => props.handleAdd(props.person)}>
                    Add To Team
                </button>
            </div>
        </div>
    );
};

export default Programmer; 