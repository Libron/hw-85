import axios from '../../axios-api';

export const FETCH_ARTISTS_REQUEST = 'FETCH_ARTISTS_REQUEST';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = 'FETCH_ARTISTS_FAILURE';

export const fetchArtistsRequest = () => ({type: FETCH_ARTISTS_REQUEST});
export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const fetchArtistsFailure = error => ({type: FETCH_ARTISTS_FAILURE, error});

export const fetchArtists = () => {
    return dispatch => {
        dispatch(fetchArtistsRequest());
        return axios.get('/artists').then(
            response => dispatch(fetchArtistsSuccess(response.data)),
            error => dispatch(fetchArtistsFailure(error))
        );
    };
};