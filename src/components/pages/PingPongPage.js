// IMPORT PACKAGE REFERENCES

import React from 'react';
import img from '../../images/redux-small.png';

import {PlayersList} from '../Player/PlayersList';
import { bindActionCreators } from 'redux';
import { fetchPlayers } from '../state/actions/PlayersActions';
import { LoadingInidicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';

class PingPongPage extends React.Component {
    constructor (props){
        super(props);
    }

    componentDidMount (){
        this.props.fetchPlayers(); // fetch players from remote when component was already mounted in DOM
    }

    render (){
        return (
            <main>
            <p>Ping Pong Page</p>
            {
                this.props.fetched && <PlayersList players={this.props.players} />
            }
            {
                <LoadingInidicator busy={this.props.fetching} />
            }
            {
                this.props.failed && <Error message="Failed to fetch list of players" />
            }
            </main>
        );
    }
}

PingPongPage.propTypes = {
    fetchZipCodes: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    players: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, players } = state.players;
    return { fetching, fetched, failed, players }
}

const mapDispatchToProps = dispatch => {
    bindActionCreators( {fetchPlayers}, dispatch);
}

const hoc = connect(mapStateToProps, mapDispatchToProps)(PingPongPage);

export { hoc as PingPongPage };