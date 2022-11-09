import { React, useState } from 'react';
import tvs from "../assets/tv.jpeg"
import { connect } from 'react-redux';
import bayTv from '../redux/tv/actions';

const Tv = (props) => {
    const [nbr, setNrb] = useState(1)
    return (
        <div className='container'>
            <img src={tvs} alt="" srcset="" />
            <p>Disponible: <span id="counter">{props.tv}</span></p>
            <div className="btnContainer">
                <button className='bay_phone' onClick={() => props.bay_tv(nbr)}>Acheter</button>
                <input type="text" name="" id="" className='inputs' value={nbr} onChange={(e) => setNrb(e.target.value)} />
            </div>
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
        bay_tv: (n) => dispatch(bayTv(n))
    }
}






export default connect(mapStateprops, mapDispatchprops)(Tv);