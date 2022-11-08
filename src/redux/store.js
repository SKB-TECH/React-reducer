import { legacy_createStore as createStore, combineReducers } from "redux";
import PhoneReducer from "./phone/reducerPhone";
import reducerTv from "./tv/reducerTv";

const rootReducers = combineReducers({
    phones: PhoneReducer,
    television: reducerTv
})
const store = createStore(rootReducers)

export default store