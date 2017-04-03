import React from 'react';
import { Card, Heading } from 'rebass';
import { Link } from 'react-router';

import { findGenreNames } from '../utils';
import MovieImage from './MovieImage';
import '../styles/Movie.sass';

//TODO: image should be taken from props
const Movie = props => {
    const { movie, genres } = props;
    const singleFilmLink = `/view/${movie.id}`;
    const CardStyle = {
        border: 'none',
        marginLeft: '15px',
        marginRight: '15px',
        marginBottom: '50px',
    };
    const genreNames = findGenreNames(movie, genres);
    return (
        <Card style={CardStyle} width={180}>
            <Link to={singleFilmLink} className="single-movie">
                <MovieImage {...props} />
                <Heading style={{ marginTop: '3px' }} size={3}>
                    {movie.original_title}
                </Heading>
                <p>
                    {genreNames}
                </p>
            </Link>
        </Card>
    );
};

Movie.propTypes = {
    movie: React.PropTypes.object.isRequired,
    genres: React.PropTypes.array.isRequired,
};

export default Movie;
