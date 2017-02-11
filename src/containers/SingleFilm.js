import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieDetailed from '../components/MovieDetailed';
import * as RequestActions from '../actions/RequestActions';

class SingleFilm extends Component {
  componentDidMount() {
    this.props.RequestActions.fetchDetailedFilm(this.props.params.id);
  }
  render() {
    return (
        <MovieDetailed {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentFilm: state.detailedFilm.currentFilm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFilm)
