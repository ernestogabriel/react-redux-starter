// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import { FetchPlayersReducer } from '../reducers/FetchPlayersReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    players: FetchPlayersReducer
});