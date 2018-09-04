import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import TransitionGroup from 'react-transition-group'
import { TweenMax } from 'gsap'
class Track extends Component {
    componentDidMount() {
        let track = document.getElementsByClassName('track')
        TweenMax.staggerFromTo(track, 0.8, {
            cycle: { x: [-100, 100], opacity: 0 }
        }, {
            cycle: { x: [0, 0], opacity: 1, delay: 0.2 * this.props.index }
            })
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