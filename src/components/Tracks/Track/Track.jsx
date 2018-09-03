import React from 'react'
import {Link} from 'react-router-dom'

const Track = ({track}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow">
                <div className="card-body">
                    <h5 className="font-weight-bold mb-3">{track.track_name}</h5>
                    <p className="card-text">
                        <strong>
                            <i className="fa fa-user"></i>{' '}
                            Artist</strong>: {track.artist_name}
                        <br/>
                        <strong>
                            <i className="fa fa-compact-disc"></i>{' '}
                            Album</strong>: {track.album_name}
                    </p>             
                </div>
                <Link to={`/lyrics/track/${track.track_id}`} className="btn-block btn-card">
                        <i className="fa fa-chevron-right"></i>
                        {' '}View Lyrics
                </Link>
            </div>
        </div>
    )
}

export default Track