import {
    FETCH_GROCERIES_PENDING,
    FETCH_GROCERIES_FULFILLED,
    FETCH_GROCERIES_REJECTED,
    FETCH_GROCERY_PENDING,
    FETCH_GROCERY_FULFILLED,
    FETCH_GROCERY_REJECTED
} from '../actions/GroceryActions';

// INITIALIZE STATE

export const initialGroceryCollectionState = {
    groceries: [],
    fetching: false,
    fetched: false,
    failed: false
};

export const initialGroceryState = {
    grocery: null,
    fetching: false,
    fetched: false,
    failed: false
};


export const FetchGroceryReducer = (state = initialGroceryState, action) => {
    switch(action.type){
        case FETCH_GROCERY_PENDING:
            return {
                ...state,
                grocery: null,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_GROCERY_FULFILLED:
            return {
                ...state,
                grocery: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_GROCERY_REJECTED:
            return {
                ...state,
                groceries: null,
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
export const FetchGroceriesReducer = (state = initialGroceryCollectionState, action) => {
    switch(action.type) {
        case FETCH_GROCERIES_PENDING:
            return {
                ...state,
                groceries: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_GROCERIES_FULFILLED:
            return {
                ...state,
                groceries: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_GROCERIES_REJECTED:
            return {
                ...state,
                groceries: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};