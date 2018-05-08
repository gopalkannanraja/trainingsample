import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS
} from "../actionTypes";

function counterReducer( prevState = {}, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...prevState, isLoading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...prevState, isLoading: false, products: action.products };
        case GET_PRODUCTS_FAILURE:
            return { ...prevState, isLoading: false, error: action.error };
        default:
            return prevState;
    }
}

export default counterReducer;
