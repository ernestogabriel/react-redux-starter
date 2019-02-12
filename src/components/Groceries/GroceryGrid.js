import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchGroceries } from '../state/actions/GroceryActions';
//dependencies
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { GroceryCard } from './GroceryCard';

import './GroceryGrid.scss';

let maxCols;

const ColGrid = (props) => {
    return (
        <div className={`col-sm-${props.size}`}>
            <GroceryCard data={props.data} />
        </div>
    );
};

const RowGrid = (props) => {
    return (
        <div className="row row-padding-bottom">
            {props.children}
        </div>
    );
};

class GroceryGrid extends Component {

    logMessageError = '';

    constructor(props) {
        super(props);
        maxCols = (12 / (this.props.colSize || 3) );
    }

    componentDidMount() {
        this.props.fetchGroceries()
            .catch((err) => {
                this.logMessageError = err.message;
            });
    }

    createRows() {
        const maxRows = Math.ceil(this.props.groceries.length / maxCols); // round forward
        let rows = [];
        let gIndex = 0;

        for (let xIndex = 0; xIndex < maxRows; xIndex++) {
            let children = [];
            let jIndex = 0;
            while (jIndex < maxCols && gIndex < this.props.groceries.length ) {
                const grocery = this.props.groceries[gIndex];
                jIndex++;
                gIndex++;
                children.push(<ColGrid key={grocery.data.id} data={grocery.data} size={this.props.colSize}/>);
            }
            rows.push(<RowGrid key={`row-${xIndex}`}>{children}</RowGrid>);
        }

        return rows;
    }

    render() {
        return (
            <Fragment>
                { this.props.fetched &&  this.createRows() }

                { <LoadingIndicator busy={this.props.fetching} /> }

                { this.props.failed && <Error message={this.logMessageError} /> }
            </Fragment>
        );
    }
}

ColGrid.propTypes = {
    data: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired
};

RowGrid.propTypes = {
    children: PropTypes.node.isRequired
};

GroceryGrid.propTypes = {
    fetchGroceries: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    groceries: PropTypes.array.isRequired,
    colSize: PropTypes.number
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, groceries } = state.groceries;

    return { fetching, fetched, failed, groceries };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchGroceries }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(GroceryGrid);


// EXPORT COMPONENT

export { hoc as GroceryGrid };