import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import FavoritesList from '../components/FavoritesList';
import * as FilmsListActions from '../actions/FilmsListActions';
import * as RequestActions from '../actions/RequestActions';

class Favorites extends Component {

  render() {
    return (
        <h1>test</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.page.favoritesList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch),
    FilmsListActions: bindActionCreators(FilmsListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
