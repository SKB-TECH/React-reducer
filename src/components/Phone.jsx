import { React, useState } from 'react';
import phone from "/src/assets/tel.jpeg"
import { connect } from 'react-redux';
import { bay_phone } from '../redux/phone/actions';

const Phone = (props) => {
    const [nbr, setNrb] = useState(1)
    console.log(nbr)
    return (
        <div className='container'>
            <img src={phone} alt="" srcset="" />
            <p>Disponible: <span id="counter">{props.phones.phones}</span></p>
            <div className="btnContainer">
                <button className='bay_phone' onClick={() => props.bay_phone(nbr)}>Acheter</button>
                <input type="text" className="inputs" value={nbr} onChange={e => setNrb(e.target.value)} />
            </div>
        </div>
    );
};
// la fonction pour accede au state du store
const mapStateToprops = (state) => {
    return {
        phones: state.phones
    }
}

// la fonction pour dispatch l'action
const mapDispatchprops = (dispatch) => {
    return {
        bay_phone: (n) => dispatch(bay_phone(n))
    }
}

export default connect(mapStateToprops, mapDispatchprops)(Phone);