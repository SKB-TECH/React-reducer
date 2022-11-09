import { BAY_TV } from "./type";


const initialTv = {
    tv: 15
}
const reducerTv = (state = initialTv, action) => {
    switch (action.type) {
        case "BAY_TV":
            return {
                ...state,
                tv: state.tv - action.payload
            }
        default:
            return state;
    }
}

export default reducerTv;