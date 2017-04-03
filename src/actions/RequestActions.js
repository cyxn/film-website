import fetch from 'isomorphic-fetch';

import {
    REQUEST_FILMS,
    RECEIVE_FILMS,
    RECEIVE_DETAILED,
    SEARCH,
    RECEIVE_SEARCH,
} from '../constants/ActionTypes';
import { filmDetail } from './FilmsListActions';

export function receiveFilms(json, page) {
    return {
        type: RECEIVE_FILMS,
        page,
        payload: json.results.map(item => item),
    };
}

export function fetchFilms(page = 1) {
    const link = `https://api.themoviedb.org/3/movie/popular?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US&page=${page}`;
    return dispatch => {
        dispatch({
            type: REQUEST_FILMS,
        });
        return fetch(link)
            .then(response => response.json())
            .then(json => dispatch(receiveFilms(json, page)));
    };
}

export function fetchDetailedFilm(id, page = 1) {
    const urls = [
        `https://api.themoviedb.org/3/movie/${id}?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US`,
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US&page=${page}`,
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US&page=${page}`,
    ];
    return dispatch => {
        dispatch(filmDetail(id));
        return Promise.all(
            urls.map(item => fetch(item).then(resolve => resolve.json()))
        ).then(json => dispatch(receiveDetailedFilm(json, id)));
    };
}

export function searchFilms(text) {
    if (text.length === 0)
        return {
            type: RECEIVE_SEARCH,
            payload: [],
        };
    const link = `https://api.themoviedb.org/3/search/movie?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US&query=${text}&page=1`;
    return dispatch => {
        dispatch({
            type: SEARCH,
        });
        return fetch(link)
            .then(response => response.json())
            .then(json => dispatch(receiveSearchResult(json)));
    };
}

function receiveSearchResult(json) {
    return {
        type: RECEIVE_SEARCH,
        payload: json.results,
    };
}

export function receiveDetailedFilm(json, id) {
    return {
        type: RECEIVE_DETAILED,
        detailed: json[0],
        recommendations: json[1],
        similar: json[2],
        id,
    };
}
