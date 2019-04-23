import React, {Component, Fragment} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {fetchHistory} from "../../store/actions/tracksAction";
import {connect} from "react-redux";
import {getUserFromStorage} from "../../storage";

class TrackHistoryPage extends Component {
    componentDidMount() {
        let user = getUserFromStorage();
        if (!user) {
            user = '';
        }
        this.props.fetchHistory(user.token);
    }

    render() {
        if (!this.props.history) {
            return <div>Loading...</div>
        }

        return (
            <Fragment>
                <h2>Track History ({this.props.history.length})</h2>
                <ListGroup className="Tracks">
                    {this.props.history.map(history => (
                        <ListGroupItem className="Item" key={history._id}>
                            <span className="Track">{history.user.username} / {history.track.title}</span>
                            <span className="Duration">{history.datetime}</span>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    history: state.tracks.history
});

const mapDispatchToProps = dispatch => ({
    fetchHistory: (token) => dispatch(fetchHistory(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistoryPage);