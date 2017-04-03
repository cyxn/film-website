export function inFavorites(movie, favorites) {
    return favorites.map(item => item.id).includes(movie.id);
}

export function findGenreNames(movie, genres) {
    if (typeof movie.genre_ids === 'undefined') {
        return movie.genres.map(item => item.name).join(', ');
    }
    return genres
        .filter((item, i, array) => {
            const index = movie.genre_ids.indexOf(item.id);
            return array[index];
        })
        .map(item => item.name)
        .join(', ');
}
