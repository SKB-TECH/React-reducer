import { legacy_createStore as createStore } from "redux";
import PhoneReducer from "./phone/reducerPhone";

const store = createStore(PhoneReducer)

export default store