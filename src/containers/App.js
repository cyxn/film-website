import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import Header from '../components/Header';
import * as RequestActions from '../actions/RequestActions';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header {...this.props} />
                {this.props.children}
                <Alert stack={{ limit: 2 }} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        search: state.films.searchResult,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        RequestActions: bindActionCreators(RequestActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//NOTE: search things goes from here
