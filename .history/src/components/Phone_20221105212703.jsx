import React from 'react';
import { phone  from "/src/assets/tel.jpeg"
const Phone = () => {
    return (
        <div className='container'>
            <img src={phone} alt="" srcset="" />
            <p>Disponible: <span className="counter"></span></p>
            <button className='bay_phone'>Acheter</button>
        </div>
    );
};

export default Phone;