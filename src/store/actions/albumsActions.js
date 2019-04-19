import axios from '../../axios-api';

export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});

export const fetchAlbums = query => {
    return dispatch => {
        let url = '/albums';
        if (query) {url += query;}

        return axios.get(url).then(
            response => dispatch(fetchAlbumsSuccess(response.data))
        );
    };
};