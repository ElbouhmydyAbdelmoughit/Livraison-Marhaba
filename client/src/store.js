import { createStore } from "redux";
import rootReducer from "./Reducers"

let store = createStore(rootReducer,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())
export default store