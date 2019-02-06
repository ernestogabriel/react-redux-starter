import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchGroceries } from '../state/actions/GroceryActions';
//dependencies
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { GroceryCard } from './GroceryCard';

const maxCols = 3;

const ColGrid = (props) => {
    console.log(props.data);
    return (
        <div className="col-sm">
            <GroceryCard data={props.data} />
        </div>
    );
};

const RowGrid = (props) => {
    console.log(props.children);
    return (
        <div className="row">
            {props.children}
        </div>
    );
};

class GroceryGrid extends Component {

    logMessageError = '';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGroceries()
            .catch((err) => {
                console.log(err);
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
                children.push(<ColGrid key={grocery.id} data={grocery} />);
            }
            rows.push(<RowGrid key={`row-${xIndex}`}>{children}</RowGrid>);
        }

        return rows;
    }

    render() {
        console.log(this.props.failed);
        return (
            <Fragment>
                { this.props.fetched &&  this.createRows()}

                { <LoadingIndicator busy={this.props.fetching} /> }

                { this.props.failed && <Error message={this.logMessageError} /> }
            </Fragment>
        );
    }
}

ColGrid.propTypes = {
    data: PropTypes.object.isRequired
};

RowGrid.propTypes = {
    children: PropTypes.node.isRequired
};

GroceryGrid.propTypes = {
    fetchGroceries: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    groceries: PropTypes.array.isRequired
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