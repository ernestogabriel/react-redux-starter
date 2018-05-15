// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';



// COMPONENT
const PlayerListItem = ({ img, name, rank }) => (
    <div className="list-group-item">
        <div className="row">
            <div className="col-sm">
                <div className="avatar">
                    <img src={img} className="img-thumbnail" alt="" />
                </div>
            </div>
            <div className="col-sm">
                <p className="bloc bloc__name">{ name } </p>
            </div>
            <div className="col-sm">
                <p className="bloc bloc__name">{ rank } </p>
            </div>

        </div>
    </div>
);

PlayerListItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired
};


export { PlayerListItem };