import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Consumer } from '../../../context'

export class Search extends Component {
  state = {
    trackTitle: ''
  }

  findTrack = (dispatch, e) => {
    e.preventDefault()
    axios
      .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_LYRICS}`)
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'SEARCH_TRACKS', payload: res.data.message.body.track_list })
        this.setState({ trackTitle: '' })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <Fragment>
              <div className="card card-body mb-4 p4 shadow">
                <h4 className="text-center heading-primary">Search lyrics for your favorite song</h4>
                <form
                  onSubmit={this
                    .findTrack
                    .bind(this, dispatch)}>
                  <div id="custom-search-input" className="gd shadow">
                    <div className="input-group input-lg">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="search song by track"
                        value={this.state.trackTitle}
                        onChange={(event) => this.setState({ trackTitle: event.target.value })} />

                      <span className="input-group-btn">
                        <button className="btn btn-lg" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Search