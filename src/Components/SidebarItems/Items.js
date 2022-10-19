import React from 'react';
import './item.css'
const Items = (props) => {
    // console.log(props);
    return (
        <div className='addedPersonCard'>
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            <button className='items-remove-btn' >X</button>
        </div>
    );
};

export default Items;