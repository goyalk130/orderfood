export const ADD_TO_CART = "ADD_TO_CART"
export const EMPTY_CART = "EMPTY_CART" 
export const ORDER_ITEMS =  "ORDER_ITEMS"
export const GET_ORDER_HISTORY =  "GET_ORDER_HISTORY"
export const ADD_ORDER_TO_HISTORY = "ADD_ORDER_TO_HISTORY"

export function addtocart(dish){
    return {
        type:ADD_TO_CART,
        payload:dish
    }
}

export function orderitems(){
    return {
        type:ORDER_ITEMS
    }
}
export function emptycart(){
    return {
        type:EMPTY_CART
    }
}
export function addordertohistory(order){
    return {
        type:ADD_ORDER_TO_HISTORY,
        payload:order
    }
}

export function getorderhistory(){
    return {
        type:GET_ORDER_HISTORY
    }

}