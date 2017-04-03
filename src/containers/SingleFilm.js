import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieDetailed from '../components/MovieDetailed';
import * as RequestActions from '../actions/RequestActions';
import * as FilmsListActions from '../actions/FilmsListActions';

class SingleFilm extends Component {
    componentDidMount() {
        this.props.RequestActions.fetchDetailedFilm(this.props.params.id);
    }
    render() {
        return <MovieDetailed {...this.props} />;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location)
            this.props.RequestActions.fetchDetailedFilm(nextProps.params.id);
    }
}

function mapStateToProps(state) {
    return {
        currentFilm: state.detailedFilm.currentFilm,
        favorites: state.page.favoritesList,
        dataReady: state.detailedFilm.dataReady,
        recommendations: state.detailedFilm.recommendations,
        genres: state.films.genres,
        similar: state.detailedFilm.similar,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        RequestActions: bindActionCreators(RequestActions, dispatch),
        FilmsListActions: bindActionCreators(FilmsListActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFilm);
