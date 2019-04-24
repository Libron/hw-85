import React, {Component, Fragment} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import {fetchTracks, saveHistory} from "../../store/actions/tracksAction";
import {NotificationContainer, NotificationManager} from "react-notifications";

import './TracksPage.css';
import {getCookie} from "../../cookies";

class TracksPage extends Component {
    componentDidMount(){
        let token = '';
        if (this.props.user) {
            token = this.props.user.token;
        }
        this.props.fetchTracks(this.props.location.search, token)
    };

    render() {
        if (!this.props.tracks) {
            return <div>Loading...</div>
        }

        return (
            <Fragment>
                <h2>Tracks <span className="labelArtist">{getCookie('artist')}</span> / <span className="labelAlbum">{getCookie('album')}</span></h2>
                <ListGroup className="Tracks">
                    {this.props.tracks.map(track => (
                        <ListGroupItem className="Item" key={track._id} onClick={() => this.props.saveHistory(track._id, this.props.user.token).then(NotificationManager.success('Track added successfully', track.title))}>
                            <span className="Track">{track.number}. {track.title}</span>
                            <span className="Duration">{track.duration}</span>
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <NotificationContainer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks.tracks,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchTracks: (query, token) => dispatch(fetchTracks(query, token)),
    saveHistory: (trackId, token) => dispatch(saveHistory(trackId, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksPage);