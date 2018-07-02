import { fetchAllPlayers } from '../../../services/PlayersResource';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_PLAYERS = 'FETCH_ZIPCODES';
export const FETCH_PLAYERS_PENDING = 'FETCH_ZIPCODES_PENDING';
export const FETCH_PLAYERS_FULFILLED = 'FETCH_ZIPCODES_FULFILLED';
export const FETCH_PLAYERS_REJECTED = 'FETCH_ZIPCODES_REJECTED';


// ACTION GENERATORS

const fetchPlayersAction = () => ({
    type: FETCH_PLAYERS,
    payload: fetchAllPlayers()
});


// EXPORT ACTIONS

export { fetchPlayersAction as fetchPlaayers };