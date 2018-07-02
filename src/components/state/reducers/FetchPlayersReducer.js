import {
    FETCH_PLAYERS_PENDING,
    FETCH_PLAYERS_FULFILLED,
    FETCH_PLAYERS_REJECTED
} from '../actions/PlayersActions';


// INITIALIZE STATE

const initialState = {
    players: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchPlayersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PLAYERS_PENDING:
            return {
                ...state,
                players: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_PLAYERS_FULFILLED:
            return {
                ...state,
                players: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_PLAYERS_REJECTED:
            return {
                ...state,
                players: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};