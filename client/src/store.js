import { createStore } from "redux";
import rootred from "./redux/reducers/index";


const store = createStore(
    rootred
);


export default store;