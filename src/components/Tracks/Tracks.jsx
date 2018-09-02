import React, {Component, Fragment} from 'react'
import {Consumer} from '../../context'
import Spinner from '../Layout/Spinner/Spinner'
import Track from './Track/Track';

export class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {trackList, heading} = value
          console.log(value)
          if (trackList === undefined || trackList.length === 0) {
            return <Spinner/>
          } else {
            return (
              <Fragment>
                <h3 className="text-cente mb-4">{heading}</h3>
                <div className="row">
                  { trackList.map(item => (
                    <Track key={item.track.track_id} track={item.track}/>
                  ))}
                </div>
              </Fragment>

            )
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks