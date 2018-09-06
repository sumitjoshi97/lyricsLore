import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import animation from '../../../utility/animation'

class Track extends Component {
    componentDidMount() {
        let track = document.getElementsByClassName('track')
        animation.stagger(track)
    }
    render() {
        return (
            <div className="col-md-6">
                <div className="card mb-4 shadow track">
                    <div className="card-body">
                        <h5 className="font-weight-bold mb-3">{this.props.track.track_name}</h5>
                        <p className="card-text">
                            <strong>
                                <i className="fa fa-us  er"></i>{' '}
                                Artist</strong>: {this.props.track.artist_name}
                            <br />
                            <strong>
                                <i className="fa fa-compact-disc"></i>{' '}
                                Album</strong>: {this.props.track.album_name}
                        </p>
                    </div>
                    <Link to={`/lyrics/track/${this.props.track.track_id}`} className="btn-block btn-card">
                        <i className="fa fa-chevron-right"></i>
                        {' '}View Lyrics
                    </Link>
                </div>
            </div>
        )
    }
}
export default Track