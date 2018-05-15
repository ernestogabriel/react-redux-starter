// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { PlayerListItem } from './PlayerListItem';

// COMPONENT

const renderList = players => (
    <div className="list-group animated fadeIn">
        {players.map(renderListItem)}
    </div>
);

const renderListItem = player => (
    <Fragment key={ player.id }>
        <PlayerListItem
            img={ player.img }
            name={ player.name }
            rank={ player.rank } />
    </Fragment>
);


const PlayersList = props => (
    <Fragment>
        { renderList(props.players) }
    </Fragment>
);

PlayersList.propTypes = {
    players: PropTypes.array.isRequired
};

export { PlayersList };
