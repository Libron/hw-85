import React, {Component, Fragment} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import {fetchTracks} from "../../store/actions/tracksAction";

class TracksPage extends Component {
    componentDidMount(){
        this.props.fetchTracks(this.props.location.search);
    };

    render() {
        if (!this.props.tracks) {
            return <div>Loading...</div>
        }

        return (
            <Fragment>
                <h2>Track List:</h2>
                <ListGroup className="Artists">
                    {this.props.tracks.map(track => (
                        <ListGroupItem className="Item" key={track._id}>
                            <span>{track.number}. {track.title}</span>
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
    fetchTracks: (query) => dispatch(fetchTracks(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksPage);