import {combineReducers} from "redux"
import { ADD_TO_CART,ADD_ORDER_TO_HISTORY,GET_ORDER_HISTORY,ORDER_ITEMS, EMPTY_CART } from "../actions/Actions"


const inititalstatefood = [
    {id:1,name:"Pizza",price:100},
    {id:2,name:"Smoothie",price:150},
    {id:3,name:"Burger",price:200},
]

const foodreducer = (state=inititalstatefood,action)=>{
    switch (action.type){
        default:
            return state
    }
}

const initialcart = []

const cartreducer = (state=initialcart,action)=>{
        switch (action.type){
            case ADD_TO_CART:
                return [...state,action.payload]
            case ORDER_ITEMS:
                return []
            case EMPTY_CART:
                return []
            default:
                return state
        }
}

const initialhistory = []

const historyreducer = (state=initialhistory,action)=>{
    switch (action.type){
        case ADD_ORDER_TO_HISTORY:
            return [action.payload,...state]
            break;
        case GET_ORDER_HISTORY:
            return state
        default:
            return state
    }
}

 const combinedreducers = combineReducers({
    history:historyreducer,
    cart:cartreducer,
    food:foodreducer
})

export default combinedreducers;