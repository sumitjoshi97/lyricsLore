import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../../Layout/Spinner/Spinner'
import {TweenMax} from 'gsap'
export class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  }

  componentDidMount() {
    axios
      .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LYRICS}`)
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics })
        return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LYRICS}`)
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track })
      })
      .catch(err => console.log(err))

    let lyrics = document.getElementsByClassName('lyrics')
    TweenMax.fromTo(lyrics, 2, {
      opacity: 0,
      y: -10
    }, {
      opacity: 1,
      y: 0
    })
  }

  render() {
    const { track, lyrics } = this.state
    if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
      return <Spinner />
    } else {
      const lyricsSet = JSON.stringify(lyrics.lyrics_body)
      const lyricsText = lyricsSet.split('\\n').map((item, i) => {
        return <p key={i}>{item}</p>
      })

      return (
        <Fragment>
          <Link to="/" className="btn btn-dak btn-sm mb-4"><i className="fa fa-arrow-left"></i> Go Back</Link>
          <h4 className="ml-4">Lyrics</h4>
          <h1 className="font-weight-bold ml-4">
            {track.track_name}
          </h1>
          <h3 className="text-primary font-weight-bold ml-4">
            {track.artist_name}
          </h3>
          <div className="card shadow my-5 lyrics">
            <div className="card-body lyrics">
              {lyricsText}
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default Lyrics