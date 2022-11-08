import React from 'react';
import {phone} from "../assets/tel.jpeg"
const Phone = () => {
    return (
        <div className='container'>
            <img src="/src/assets/tel.jpeg" alt="" srcset="" />
            <p>Disponible: <span className="counter"></span></p>
            <button className='bay_phone'>Acheter</button>
        </div>
    );
};

export default Phone;