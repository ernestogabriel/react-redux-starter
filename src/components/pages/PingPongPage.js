// IMPORT PACKAGE REFERENCES

import React from 'react';
import img from '../../images/redux-small.png';

import {PlayersList} from '../Player/PlayersList';
const players = [
    {
        id: 1,
        name: 'Gabriel  Muller',
        rank: '12',
        img
    },
    {
        id: 2,
        name: 'Eduardo Ortiz',
        rank: '12',
        img
    },
    {
        id: 3,
        name: 'Alejandro Pereyra',
        rank: '12',
        img
    },
    {
        id: 4,
        name: 'Laura Medina',
        rank: '12',
        img
    }
];

const PingPongPage = () => (
    <main>
        <p>Ping Pong Page</p>
        <PlayersList players={players}/>
    </main>
);

export { PingPongPage };