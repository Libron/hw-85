import React, {Component, Fragment} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import {fetchTracks, saveHistory} from "../../store/actions/tracksAction";

import './TracksPage.css';
import {getCookie} from "../../cookies";
import {getUserToken} from "../../storage";

class TracksPage extends Component {
    componentDidMount(){
        this.props.fetchTracks(this.props.location.search, getUserToken())
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
                        <ListGroupItem className="Item" key={track._id} onClick={() => this.props.saveHistory(track._id)}>
                            <span className="Track">{track.number}. {track.title}</span>
                            <span className="Duration">{track.duration}</span>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
    fetchTracks: (query, token) => dispatch(fetchTracks(query, token)),
    saveHistory: (trackId) => dispatch(saveHistory(trackId, getUserToken()))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksPage);