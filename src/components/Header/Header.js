// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENT
const links = [
    {
        id: 1,
        route: '/',
        label: 'Home'
    },
    {
        id: 2,
        route: '/pingpong',
        label: 'Ping Pong Rank'
    }
];

const renderLinkItems = (link) => (
    <Fragment key={link.id}>
        <li className="nav-item">
            <div className="nav-link">
                <NavLink to={link.route} activeClassName='menu selected' exact={true}>{link.label}</NavLink>
            </div>
        </li>
    </Fragment>
);

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert-dark">
        <a className="navbar-brand" href="/">
            <i className="fab fa-react fa-2x" style={{color: 'dodgerblue'}}></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                { links.map(renderLinkItems) }
            </ul>
        </div>
    </nav>
);