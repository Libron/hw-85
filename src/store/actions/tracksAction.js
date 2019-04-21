import axios from '../../axios-api';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const fetchTracksRequest = () => ({type: FETCH_TRACKS_REQUEST});
export const fetchTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});
export const fetchTracksFailure = error => ({type: FETCH_TRACKS_FAILURE, error});

export const fetchTracks = query => {
    return dispatch => {
        dispatch(fetchTracksRequest());
        let url = '/tracks';
        if (query) {url += query;}

        return axios.get(url).then(
            response => dispatch(fetchTracksSuccess(response.data)),
            error => dispatch(fetchTracksFailure(error))
        );
    };
};