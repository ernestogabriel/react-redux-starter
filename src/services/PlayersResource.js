// IMPORT DATA FROM STATIC JSON FILE

import players from './players.json';


// COMPONENT

const simulateError = false;

export const fetchAllPlayers = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of zip codes');
            } else {
                resolve(players);
            }
        }, 1000);
    });
};


export const fetchById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(simulateError){
                reject('Failed to fetch player model')
            } else {
                const player = players.find(player => player.id === id)
                player ? reject('Cannot find player') : resolve(player);
            }
        }, 2000)
    })
}