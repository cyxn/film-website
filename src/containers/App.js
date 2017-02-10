import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import FilmsList from '../components/FilmsList';
import * as FilmsListActions from '../actions/FilmsListActions';
import * as RequestActions from '../actions/RequestActions';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    films: state.films
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
//NOTE: search things goes from here
