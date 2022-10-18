import React from 'react';
import './Programer.css'

const Programmer = (props) => {
    const { name, designation, img, salary, age, nationality } = props.person;

    return (
        <div className='Programmer'>
            <div className="cart">
                <img src={img} alt="" />
                <div className="Cart_Content">
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Designation: {designation}</p>
                    <p>Salary: {salary}</p>
                    <p>Country: {nationality}</p>
                </div>
                <button>
                    <span>Add To Team</span>
                </button>
            </div>
        </div>
    );
};

export default Programmer; 