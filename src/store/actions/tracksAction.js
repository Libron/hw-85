import axios from '../../axios-api';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const fetchTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});

export const fetchTracks = query => {
    return dispatch => {
        let url = '/tracks';
        if (query) {url += query;}

        return axios.get(url).then(
            response => dispatch(fetchTracksSuccess(response.data))
        );
    };
};