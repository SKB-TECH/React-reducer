import React from 'react';
import tvs from "../assets/tv.jpeg"
import { connect } from 'react-redux';
import bayTv from '../redux/tv/actions';

const Tv = (props) => {
    return (
        <div className='container'>
            <img src={tvs} alt="" srcset="" />
            <p>Disponible: <span id="counter">{props.tv}</span></p>
            <button className='bay_phone' onClick={() => props.bay_tv()}>Acheter</button>
        </div>
    );
};

const mapStateprops = (state) => {
    return {
        tv: state.television.tv
    }
}
const mapDispatchprops = (dispatch) => {
    return {
        bay_tv: () => dispatch(bayTv())
    }
}






export default connect(mapStateprops, mapDispatchprops)(Tv);