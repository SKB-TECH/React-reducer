import { BAY_TV } from "./type";

const initialTv = {
    tv: 15
}
const reducerTv = (state = initialTv, action) => {
    switch (action.type) {
        case "BAY_TV":
            return {
                ...state,
                tv: state.tv - 1
            }

        default:
            return state;
    }
}

export default reducerTv;