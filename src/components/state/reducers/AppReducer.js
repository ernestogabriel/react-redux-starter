// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import {FetchGroceryReducer, FetchGroceriesReducer } from '../reducers/FetchGroceriesReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    grocery: FetchGroceryReducer,
    groceries: FetchGroceriesReducer
});