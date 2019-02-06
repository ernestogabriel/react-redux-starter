import { fetchGroceries, fetchGrocery } from '../../../services/GroceryService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_GROCERIES = 'FETCH_GROCERIES';
export const FETCH_GROCERIES_PENDING = 'FETCH_GROCERIES_PENDING';
export const FETCH_GROCERIES_FULFILLED = 'FETCH_GROCERIES_FULFILLED';
export const FETCH_GROCERIES_REJECTED = 'FETCH_ZIPCODES_REJECTED';

export const FETCH_GROCERY = 'FETCH_GROCERY';
export const FETCH_GROCERY_PENDING = 'FETCH_GROCERY_PENDING';
export const FETCH_GROCERY_FULFILLED = 'FETCH_GROCERY_FULFILLED';
export const FETCH_GROCERY_REJECTED = 'FETCH_GROCERY_REJECTED';


// ACTION GENERATORS

const fetchGroceriesAction = () => ({
    type: FETCH_GROCERIES,
    payload: fetchGroceries()
});

const fecthGroceryByIdAction = ({id}) => ({
    type: FETCH_GROCERY,
    payload: fetchGrocery({id})
});


// EXPORT ACTIONS

export { fetchGroceriesAction as fetchGroceries, fecthGroceryByIdAction as fetchGrocery };