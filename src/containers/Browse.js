import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilmsList from '../components/FilmsList';
import * as FilmsListActions from '../actions/FilmsListActions';
import * as RequestActions from '../actions/RequestActions';

class Browse extends Component {
    render() {
        return <FilmsList {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        movies: state.films.filmsArr,
        dataReady: state.films.dataReady,
        genres: state.films.genres,
        page: state.films.page,
        favorites: state.page.favoritesList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        RequestActions: bindActionCreators(RequestActions, dispatch),
        FilmsListActions: bindActionCreators(FilmsListActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
