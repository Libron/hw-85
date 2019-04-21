import axios from '../../axios-api';

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const fetchAlbumsRequest = () => ({type: FETCH_ALBUMS_REQUEST});
export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});
export const fetchAlbumsFailure = error => ({type: FETCH_ALBUMS_FAILURE, error});

export const fetchAlbums = query => {
    return dispatch => {
        dispatch(fetchAlbumsRequest());
        let url = '/albums';
        if (query) {url += query;}

        return axios.get(url).then(
            response => dispatch(fetchAlbumsSuccess(response.data)),
            error => dispatch(fetchAlbumsFailure(error))
        );
    };
};