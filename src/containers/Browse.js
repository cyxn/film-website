import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilmsList from '../components/FilmsList';
//import * as FilmsListActions from '../actions/FilmsListActions';
import * as RequestActions from '../actions/RequestActions';

class Browse extends Component {
  componentDidMount() {
    const { fetchFilms } = this.props.RequestActions;
    fetchFilms();
  }

  render() {
    return (
        <FilmsList {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.films.filmsArr,
    dataReady: state.films.dataReady,
    genres: state.films.genres
  }
}

function mapDispatchToProps(dispatch) {
  return {
    RequestActions: bindActionCreators(RequestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
