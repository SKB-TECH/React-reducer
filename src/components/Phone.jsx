import React from 'react';
import phone from "/src/assets/tel.jpeg"
import { connect } from 'react-redux';
import { bay_phone } from '../redux/phone/actions';

const Phone = (props) => {
    console.log(props);
    return (
        <div className='container'>
            <img src={phone} alt="" srcset="" />
            <p>Disponible: <span id="counter">{props.phones}</span></p>
            <button className='bay_phone' onClick={() => props.bay_phone()}>Acheter</button>
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
        bay_phone: () => dispatch(bay_phone())
    }
}

export default connect(mapStateToprops, mapDispatchprops)(Phone);