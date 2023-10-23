import { createStore } from "redux";
import combinedreducers from "./reducers/Reducers";



const store = createStore(combinedreducers,{})

export default store;