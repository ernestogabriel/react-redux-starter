// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ZipCodesPage } from '../pages/ZipCodesPage';
import { PingPongPage } from '../pages/PingPongPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/zipcodes' component={ZipCodesPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/pingpong' component={PingPongPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);